const http = require("http")

const server = http.createServer((req, res) => {
    // rec - so'rov yuborish
    // res - javob qaytarish
    // console.log(rec.url)
    if (req.method === "GET"){
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end(`
            <h1>Malumot yubor svolich!!!</h1>
            <form method="post" action="/">
                <input name="title" type="text"></input>
                <button type="submit">send</button>
            </form>
        `);
    } else if(req.method === "POST"){
        res.writeHead(200, {"content-type" : "text/html; charset : utf-8"})
        const body = []
        req.on("data", (data) => {
            body.push(Buffer.from(data))
        })
        req.on("end", () => {
            const message = body.toString().split("=")[1].split("+")

            res.end(`<span>Your message is bad: <b>${message}</b></span>`)
        })
    }
  
})

server.listen(5001, () => {
    console.log("server voshi qichu ishlavotti")
})