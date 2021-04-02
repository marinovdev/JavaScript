const cpus = require('os').cpus();

console.log(cpus);

// [
//     {
//       model: 'Intel(R) Pentium(R) CPU 2020M @ 2.40GHz',
//       speed: 2395,
//       times: {
//         user: 52261078,
//         nice: 0,
//         sys: 18363281,
//         idle: 227725078,
//         irq: 1861203
//       }
//     },
//     {
//       model: 'Intel(R) Pentium(R) CPU 2020M @ 2.40GHz',
//       speed: 2395,
//       times: {
//         user: 55960187,
//         nice: 0,
//         sys: 16191750,
//         idle: 226197296,
//         irq: 210671
//       }
//     }
//   ]