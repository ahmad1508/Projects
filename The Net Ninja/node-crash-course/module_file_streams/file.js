const fs = require("fs"); //fs = file system

//reading files

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString()); //gives us a buffer wich is data
// });

// console.log("last line");

//writing files
// for (let i = 0; i < 10000; i++) {
//   fs.appendFileSync(
//     "./docs/blog3.txt",
//     "lorem text test we are writing. to test the coodee with streams. so maybe we need to write something wayyyyy bigger to fill uo the fucking file\n",
//     () => {}
//   );
// }

//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
