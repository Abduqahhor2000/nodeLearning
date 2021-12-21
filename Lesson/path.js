const path = require("path")
const carObj = require("../data")


console.log(carObj, __filename) // faylgacha yo'l va o'zi ham
console.log(carObj, __dirname) // faylgacha yo'l
console.log(path.basename(__filename)) // fayl nomi
console.log(path.dirname(__filename)) // faylgacha yo'l
console.log(path.extname(__filename)) // fayl turining nomi
console.log(path.parse(__filename)) // fayl haqida barcha malumot 
console.log(path.join(__dirname, "frontend", "kakaka.js")) //bu yerda yayl yaratiladi.
console.log(path.resolve(__dirname, "./frontend", "/kakaka.js")) // mashitga sal tushunmadim.

