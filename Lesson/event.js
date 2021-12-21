const event = require("events")


class Car extends event{
    log(message){
        this.emit("message", `${message}, ID: ${Date.now()}`)
    }
}

const GieM = new Car()

GieM.on("message", (message)=>{console.log(message)})

GieM.log("salom")

