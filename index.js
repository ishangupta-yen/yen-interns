const express=require("express");

const app = express();
app.use(express.json())
var productMast=[
    {id:1,name:"Marker",price:10,stock:100,type:"Stationary"},
    {id:2,name:"Mouse",price:1000,stock:50,type:"Electronics"},
    {id:3,name:"Laptop",price:50000,stock:50,type:"Electronics"}
]



app.get("/",(req,res)=>
{
    res.send("Welcome to Mystore");
})

app.get("/products",(req,res)=>
{
    res.send(productMast);
})

app.get("/product/:name",(req,res)=>
{
   let product= productMast.find(c=>c.name==req.params.name)
   res.status(200).send(product)
})

app.get("/product/:id",(req,res)=>
{
   let product= productMast.find(c=>c.id==req.params.id)
   res.status(200).send(product)
})

app.post("/product",(req,res)=>
{
    var id = productMast.length+1
    console.log(req.body)
   ///let product= productMast.find(c=>c.name==req.params.name)
req.body.id=id;

productMast.push(req.body);
res.status(202).send(`Product created with Id ${id}`)

})



app.put("/product/:id",(req,res)=>
{

productMast.indexOf((x)=>{
    x.id==req.params.id;
    console.log(productMast[id])})
})






app.listen(3000)