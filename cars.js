const express=require('express')
const app=express();
let car=[
    {id:"123",make:"20th",year:2020,model:"BMW"},
    {id:"456",make:"456", year:2019,model:"toyota"},
    {id:"57",make:"134",year:2024,model:"tesla"},

]
app.post("/add",(req,res)=>
{ 
 res.send("add successfully")
})
app.get("/list",(req,res)=>
{ 
  res.send(JSON.stringify(car))
  console.log("read successfully")
})
app.put("/update",(req,res)=>
 { 
   
    res.send("update successfully")
})

app.delete("/delete",(req,res)=>
    { 
      
       res.send("delete successfully")
   })

app.listen(3000,()=>{
    console.log("listoning port is 3000");   
});