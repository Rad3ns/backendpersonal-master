const express = require('express')
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://rama:UhsMMnL9U4y1oBOB@cluster0.ol6pzyb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'backend';
const app = express()
const port = process.env.PORT || 5000

app.get('/', async(req, res) => {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('web');
  const data = await collection.find({}).toArray();
res.json({data})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})