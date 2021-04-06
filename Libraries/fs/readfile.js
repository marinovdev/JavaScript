const fs = require('fs');

const url = new URL('file:///C:/Users/vyful/Desktop/JavaScript Repo/JavaScript/.gitignore');

//readFileSync returns a buffer
let gitignore = fs.readFileSync(url).toString();

console.log(gitignore); 
/*
find . -size +8M | cat >> .gitignore
*/

async function print(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}
print('../').catch(console.error);
/* 
Async_hooks
Child_Processes
Cluster
Command_Line_Arguments
Console
Crypto
Depricated
Diagnostics_tools
DNS
Events
fs
junk
README.md
*/
