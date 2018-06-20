"use strict";
 const MongoClient = require("mongodb").MongoClient;
 const MONGODB_URI = "mongodb://localhost:27017/tweeter";

 MongoClient.connect(MONGODB_URI, (err, db) => {
    if(err){
        console.err(`Failed to onnect: ${MONGODB_URI}`);
        throw err;
    }

    console.log(`Connected to mongodb: ${MONGODB_URI}`);
    
    db.collection("tweets").find({}, (err, results) => {
        if(err) throw err;
        // console.log("find result: ", result);
        // console.log("type of find result: ", typeof result);
        // db.close;
            // ==> So we Read The Fantastic Manual, right?

        // ==> We can iterate on the cursor to get results, one at a time:
        console.log("for each item yielded by the cursor:");
        results.each((err, item) => console.log("  ", item));

        console.log("results.toArray: ", results);

        // This is the end...
        db.close();
    });


 });