const carObj = require("./data")
const path = require("path")
const fs = require("fs")

fs.rename(
    path.join(__dirname, "chachachacha.txt"),
    path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"),
    (err) => {
        if(err) throw err;
        console.log("file was changed succesfully!");
    }

)

// fs.readFile(
//     path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"),
//     "utf-8",
//     (err, data) => {
//     if(err) throw err;
//     console.log(data)
//     // console.log(Buffer.from(data).toString());
// })

// fs.writeFile(
//     path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"), 
//     "qalay hay. yaxshimisanay", 
//     (err) => {
//         if (err) throw err;
//         console.log("TXT was created succesfully!");
//         fs.appendFile(
//             path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"),
//             " ishlar zo'rma",
//             (err) => {
//                 if (err) throw err;
//                 console.log("File was changed succesfully!"); 
//             }
//         )
//     }
// );

// console.log(carObj, __filename) // faylgacha yo'l va o'zi ham
// console.log(carObj, __dirname) // faylgacha yo'l
// console.log(path.basename(__filename)) // fayl nomi
// console.log(path.dirname(__filename)) // faylgacha yo'l
// console.log(path.extname(__filename)) // fayl turining nomi
// console.log(path.parse(__filename)) // fayl haqida barcha malumot 
// console.log(path.join(__dirname, "frontend", "kakaka.js")) //bu yerda yayl yaratiladi.
// console.log(path.resolve(__dirname, "./frontend", "/kakaka.js")) // mashitga sal tushunmadim.


// fs.mkdir(path.join(__dirname, "vushshiiKattaPapka"), (err) => {
//     if (err) throw err;
//     console.log("Folder was created succesfully!")

    // fs.writeFile(
    //     path.join(__dirname, "vushshiiKattaPapka", "kattaFile.js"),
    //     "//path modules",
    //     (err) => {
    //        if (err) throw err

    //        console.log("File was created succesfully!")
    //     })
// })