const fs = require('fs');
const file = fs.readFileSync('./readfile.js').toString();

console.log(file)
fs.stat('./readfile.js', (err, status) => {
    console.log(status);
});

// Stats {
//     dev: 1784627404,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 13229323905449136,
//     size: 628,
//     blocks: 1,
//     atimeMs: 1617627080387.344,
//     mtimeMs: 1617568891866.8235,
//     ctimeMs: 1617568891866.8235,
//     birthtimeMs: 1617566516317.6882,
//     atime: 2021-04-05T12:51:20.387Z,
//     mtime: 2021-04-04T20:41:31.867Z,
//     ctime: 2021-04-04T20:41:31.867Z,
//     birthtime: 2021-04-04T20:01:56.318Z
//   }