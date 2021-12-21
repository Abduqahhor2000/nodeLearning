const http = require("http")

const server = http.createServer((req, res) => {
    // rec - so'rov yuborish
    // res - javob qaytarish
    // console.log(rec.url)
    if (req.method === "GET"){
        res.end(`
            <h2>Malumot yubor svolich!!!</h2>
            <form method="post" action="/">
                <input name="title" type="text"></input>
                <button type="submit">send</button>
            </form>
        `);
    }
  
})

server.listen(5001, () => {
    console.log("server voshi qichu ishlavotti")
})