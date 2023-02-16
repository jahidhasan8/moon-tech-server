require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5001;

const cors = require("cors");

app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://moon-tech:DhgYzmdEBZQSzD2c@cluster0.q66zrl2.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });


const uri = "mongodb+srv://moon-tech:DhgYzmdEBZQSzD2c@cluster0.wcc8pjf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





// const run = async () => {
//   try {
//     const db = client.db("moon");
//     const productCollection = db.collection("product");
//     // console.log("database")

//     app.get("/products", async (req, res) => {
//       const cursor =await productCollection.find({});
//       console.log(cursor)
//       const product = await cursor.toArray();

//       res.send({ status: true, data: product });
//     });

//     app.post("/product", async (req, res) => {
//       const product = req.body;

//       const result = await productCollection.insertOne(product);

//       res.send(result);
//     });

//     app.delete("/product/:id", async (req, res) => {
//       const id = req.params.id;

//       const result = await productCollection.deleteOne({ _id: ObjectId(id) });
//       res.send(result);
//     });
//   } finally {
//   }
// };

// run().catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

const products = client.db("moon").collection("product");

app.get("/products", async(req,res)=>{
    const product=await products.find({}).toArray()
    // console.log(product)
    res.json({data:product})
})

app.get("/", (req, res) => {
      res.send("Hello World!");
    });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


