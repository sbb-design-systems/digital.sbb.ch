// Lyne-Version: folgt der installierten Version von @sbb-esta/lyne-elements (package.json),
// damit Readmes, Bundle und Angaben auf der Seite übereinstimmen.
const { installedVersion } = require("../../../lyne-catalog");

module.exports = {
  url: 'https://raw.githubusercontent.com/sbb-design-systems/lyne-components/',
  branch: `v${installedVersion()}`,
  master: "master",
  path: "/src/elements/",
  pathexperimental: "/src/elements-experimental/",
  dok: '/readme.md'
};
