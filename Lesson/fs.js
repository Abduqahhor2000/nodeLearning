const path = require("path")
const fs = require("fs")




fs.rename(
    path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"),
    path.join(__dirname, "vushshiiKattaPapka", "chachachacha.txt"),
    (err) => {
        if(err) throw err;
        console.log("file was changed succesfully!");
    }

)

fs.readFile(
    path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"),
    "utf-8",
    (err, data) => {
    if(err) throw err;
    console.log(data)
    // console.log(Buffer.from(data).toString());
})

fs.writeFile(
    path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"), 
    "qalay hay. yaxshimisanay", 
    (err) => {
        if (err) throw err;
        console.log("TXT was created succesfully!");
        fs.appendFile(
            path.join(__dirname, "vushshiiKattaPapka", "chacha.txt"),
            " ishlar zo'rma",
            (err) => {
                if (err) throw err;
                console.log("File was changed succesfully!"); 
            }
        )
    }
);


fs.mkdir(path.join(__dirname, "vushshiiKattaPapka"), (err) => {
    if (err) throw err;
    console.log("Folder was created succesfully!")

    fs.writeFile(
        path.join(__dirname, "vushshiiKattaPapka", "kattaFile.js"),
        "//path modules",
        (err) => {
           if (err) throw err

           console.log("File was created succesfully!")
        })
})