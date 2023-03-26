import { MongoClient } from 'mongodb' 

export default function getChats(req, res) {

  // catching the variables
 

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://root:example@0.0.0.0:6666";

// create mongo connection client
const client = new MongoClient(uri);



async function run() {
  try {
    const database = client.db("courses");
    const col = database.collection("chats");
    const query = {};
    const options = {};

    const cursor = col.find(query, options);

    let buffer = '';

    

    cursor.forEach(element => {
        console.log(element);
        buffer = buffer + element;

        res.status(200).json(element);
    });
        
    

    res.status(200).json(buffer);

    // create a document to insert

  } finally {
    await client.close();
  }
}


run().catch(console.dir);
   

   



    // return back the records
    res.status(200).json(username+""+comment);

}