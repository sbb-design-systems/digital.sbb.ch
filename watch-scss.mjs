import chokidar from 'chokidar';
import { exec } from 'child_process';

chokidar.watch('src/assets/css/**/*.scss').on('change', (path) => {
  console.log(`Changed: ${path} — running lint:scss...`);
  exec('npm run lint:scss', (err, stdout, stderr) => {
    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stderr.write(stderr);
  });
});