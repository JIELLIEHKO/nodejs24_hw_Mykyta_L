const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://root:example@localhost:27017";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to the database!");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);