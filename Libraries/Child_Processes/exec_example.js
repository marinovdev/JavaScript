// On Windows Only...
const { exec, spawn } = require('child_process');
// DIR is a BATCH command that lists all files in current directory
exec('DIR', (err, stdout) => {

    if(err){
        console.error(stderr);
    }

    console.log(stdout);
});

// 01.04.2021 ?.  14:45    <DIR>          .
// 01.04.2021 ?.  14:45    <DIR>          ..
// 01.04.2021 ?.  01:42               354 child_process.js
// 01.04.2021 ?.  14:47               192 example.js
// 01.04.2021 ?.  13:57                46 my.bat
// 31.03.2021 ?.  23:40               166 process_execution_args.js
// 01.04.2021 ?.  14:33               509 run_batch_file.js
// 31.03.2021 ?.  23:47               212 sdtout.write.js
// 01.04.2021 ?.  01:59               596 socket_to_child_process.js
//                7 File(s)          2�075 bytes
//                2 Dir(s)  115�517�915�136 bytes free
