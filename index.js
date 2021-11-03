const express = require('express');
const cluster = require('cluster');
const router = require("./routes");

const numCPUs = require('os').cpus().length;
 
const app = express();
const PORT = 3000;
 

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`)
  
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`)
    })
  } else {
    const express = require('express')
  
    const app = express()
       
    app.listen(PORT)

    app.use("/api", router)
    console.log(`Process ${process.pid} started`)
  }


