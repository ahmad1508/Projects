//Creating a stream

const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt"); //the first argument is gonna tell where we want to read sata from

// //.on is an event listener listening for a buffer of data to arrive
// //when we get a new chunk of data we launch the function
// readStream.on("data", (chunk) => {
//   console.log("---------New Chunk---------");
//   console.log(chunk);
// });

// readStream.on("data", (chunk) => {
//   console.log("---------New Chunk---------");
//   console.log(chunk);

//   writeStream.write("\n---------------------NEW CHUNK-----------------------\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream); //reads data and every thing that's read is piped to the write Stream
