const { MongoClient } = require("mongodb");



const client = new MongoClient("mongodb://127.0.0.1:27017/");


const run = async () => {

    try {
        await client.connect();

        const db = client.db("school");
        const res = await db.collection("student").deleteOne({Name:"Aman Singh"});
        console.log(res);

        console.log("pingged db");
    }
    finally {
        await client.close();
    }
}

run().catch((err)=>{
    console.log(err);
});