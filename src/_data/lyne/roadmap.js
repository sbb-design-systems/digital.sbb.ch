// Lädt die rohen Roadmap-Daten und reichert sie mit berechneten Werten an.
// Granularität: Monate. Achse: zweistufig (Jahre + Quartale).

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MONTHS_DE = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

// "2026-03" -> { year: 2026, month: 3 }
function parseMonth(str) {
  const m = /^(\d{4})-(\d{2})$/.exec(str);
  if (!m) throw new Error(`Ungültiges Datum (erwartet "YYYY-MM"): ${str}`);
  return { year: Number(m[1]), month: Number(m[2]) };
}

// Anzahl Monate von "from" bis "to" (inklusiv beider Enden)
function monthsBetween(from, to) {
  return (to.year - from.year) * 12 + (to.month - from.month) + 1;
}

// 1-basierter Spaltenindex relativ zum Timeline-Start
function monthColumn(month, timelineStart) {
  return monthsBetween(timelineStart, month);
}

// Lesbares Label für aria-label, "März 2026" bzw. "März – Mai 2026"
function rangeLabel(start, end) {
  const sameYear = start.year === end.year;
  const sameMonth = sameYear && start.month === end.month;
  if (sameMonth) {
    return `${MONTHS_DE[start.month - 1]} ${start.year}`;
  }
  if (sameYear) {
    return `${MONTHS_DE[start.month - 1]} – ${MONTHS_DE[end.month - 1]} ${start.year}`;
  }
  return `${MONTHS_DE[start.month - 1]} ${start.year} – ${MONTHS_DE[end.month - 1]} ${end.year}`;
}

export default async function () {
  const raw = JSON.parse(
    await readFile(join(__dirname, 'roadmap-source.json'), 'utf8'),
  );

  const tlStart = parseMonth(raw.timeline.start);
  const tlEnd = parseMonth(raw.timeline.end);
  const totalMonths = monthsBetween(tlStart, tlEnd);

  // === Items pro Lane anreichern ===
  const enrichedLanes = raw.lanes.map((lane) => {
    const items = (lane.items || []).map((item) => {
      const s = parseMonth(item.start);
      const e = parseMonth(item.end);
      const startCol = monthColumn(s, tlStart);
      const endCol = monthColumn(e, tlStart);
      // grid-column-end ist exklusiv → endCol + 1
      return {
        ...item,
        row: item.row || 1,
        gridColumn: `${startCol} / ${endCol + 1}`,
        rangeLabel: rangeLabel(s, e),
      };
    });

    const maxRow = items.length ? Math.max(1, ...items.map((i) => i.row)) : 1;
    return { ...lane, items, maxRow };
  });

  // === Achse: Jahresbänder ===
  // Pro Jahr: wieviele Monate liegen innerhalb der Timeline?
  const yearBands = [];
  for (let y = tlStart.year; y <= tlEnd.year; y++) {
    const firstMonth = y === tlStart.year ? tlStart.month : 1;
    const lastMonth = y === tlEnd.year ? tlEnd.month : 12;
    const startCol = monthColumn({ year: y, month: firstMonth }, tlStart);
    const endCol = monthColumn({ year: y, month: lastMonth }, tlStart);
    yearBands.push({
      year: y,
      gridColumn: `${startCol} / ${endCol + 1}`,
      monthCount: lastMonth - firstMonth + 1,
    });
  }

  // === Achse: Quartals-Ticks ===
  // Quartal Q1 = Jan-Mär, Q2 = Apr-Jun, Q3 = Jul-Sep, Q4 = Okt-Dez.
  // Wir zeigen nur die Quartale, deren Anfangsmonat in der Timeline liegt.
  const quarterTicks = [];
  for (let y = tlStart.year; y <= tlEnd.year; y++) {
    for (let q = 1; q <= 4; q++) {
      const qStartMonth = (q - 1) * 3 + 1;        // 1, 4, 7, 10
      const qEndMonth   = qStartMonth + 2;        // 3, 6, 9, 12
      const qStart = { year: y, month: qStartMonth };
      const qEnd   = { year: y, month: qEndMonth };
      // Quartal innerhalb Timeline clippen
      const inRange =
        (qEnd.year > tlStart.year ||
          (qEnd.year === tlStart.year && qEnd.month >= tlStart.month)) &&
        (qStart.year < tlEnd.year ||
          (qStart.year === tlEnd.year && qStart.month <= tlEnd.month));
      if (!inRange) continue;

      const clipStart =
        qStart.year < tlStart.year ||
        (qStart.year === tlStart.year && qStart.month < tlStart.month)
          ? tlStart
          : qStart;
      const clipEnd =
        qEnd.year > tlEnd.year ||
        (qEnd.year === tlEnd.year && qEnd.month > tlEnd.month)
          ? tlEnd
          : qEnd;
      const startCol = monthColumn(clipStart, tlStart);
      const endCol = monthColumn(clipEnd, tlStart);
      quarterTicks.push({
        label: `Q${q}`,
        year: y,
        gridColumn: `${startCol} / ${endCol + 1}`,
      });
    }
  }

  return {
    ...raw,
    lanes: enrichedLanes,
    columnCount: totalMonths,
    yearBands,
    quarterTicks,
  };
}
