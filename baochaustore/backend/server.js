import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  console.log('============= req.params.id',req.params.id)
  const product  = data.products.find(p => 
    p.slug === req.params.id
  )
  if(product){
    res.status(200).json(product);
  }else{
    res.status(404).json({message: "Product not found"})
  }
  
});

app.get("/api/category", (req, res) => {
  res.json(data.category);
});

app.get("/api/slider", (req, res) => {
  res.json(data.sliderItems);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
