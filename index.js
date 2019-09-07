const {exec} = require('child_process');
const iohook = require('iohook');

iohook.start();

if (process.argv.length === 2) {
  console.log('Launched main');
  iohook.on('keydown', (e) => {
    console.log('Main', e.rawcode);
  });
  exec([`"${process.argv[0]}"`, process.argv[1], '-t'].join(' ')).stdout.pipe(process.stdout);
} else {
  console.log('Launched child');
  iohook.on('keydown', (e) => {
    console.log('Child', e.rawcode);
  });
}
