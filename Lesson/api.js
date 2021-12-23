
const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.method === "GET"){
        res.writeHead(200, {"Content-type" : "text/html"})
        if(req.url === "/"){
            fs.readFile(
                path.join(__dirname, "views", "index.html"),
                "utf-8",
                (err, content) => {
                    if(err) throw err
                    res.end(content)
                } 
            )
        }else if(req.url === "/contact"){
            fs.readFile(
                path.join(__dirname, "views", "contact.html"),
                "utf-8",
                (err, content) => {
                    if(err) throw err
                    res.end(content)
                } 
            )
        }else if(req.url === "/api/user"){
            res.writeHead(200, {"Content-type" : "text/json"})
            const user = [
                {GM: "nexia", color: "white"},
                {BMW: "cadilak", color: "black"}
            ]
            res.end(JSON.stringify(user))
        }
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