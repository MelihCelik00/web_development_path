// import fs from "fs"; 
const fs = require("fs");

// Read already created file

fs.readFile("./txtfiles/password.txt", 'utf8', (err, res) => {
    if (err) console.log(err);
    console.log(res);
    console.log("data reading is finished!")
});

// Create new file

fs.writeFile("./txtfiles/example.txt", "New file!", "utf8", (err) => {
    if (err) console.log(err);
    console.log("File is created successfully!")
});

fs.writeFile("./json/example.json", "{'name': 'Melih', 'age': '21'}", 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Json file is created successfully!")
});

// Update File

fs.appendFile("./txtfiles/example.txt", "\nSecond row!!!", "utf8", (err) => {
    if (err) console.log(err);
    console.log("New data added to the file!!!!")
});

// Delete file

// fs.unlink("./json/example.json", (err) => {
//     if (err) console.log(err);
//     console.log("File is deleted!!!!")
// });

// Create folder(s)

fs.mkdir("uploads/img", {recursive:true}, (err) => {
    if (err) console.log(err);
    console.log("Folder(s) created successfully!!");
});

fs.rmdir("uploads/img", {recursive:true}, (err) => { // if you just write "uploads" to the path, it will delete the upload folder itself
    if (err) console.log(err);                      // but in this case it will only delete img folder which is inside upload
    console.log("Folder(s) deleted successfully!!");
});
