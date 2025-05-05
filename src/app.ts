
import express from "express"
import cluster from "cluster"
import os from 'os'
const numsOfCpu=os.cpus().length


const app = express()
const PORT =8000

type User1={
    name:string,
    age:number
}
interface User{
    name:string,
    age:number
}
const user:User1={
    name:"Tester",
    age:20
}
console.log(user)

type Status='Yes' | 'No'

const isActive:Status='Yes'
console.log(isActive)

if(cluster.isPrimary){
    console.log('primary ',process.pid)
    for (let i=0;i<numsOfCpu;i++){
        cluster.fork()

    }
   
}else{
    app.listen(8000, () => {
        console.log(`server is running on port ${PORT} in process ${process.pid}`)
    })
}
