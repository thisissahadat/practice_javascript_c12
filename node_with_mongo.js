var MongoClient=require('mongodb').MongoClient;
var URL="mongodb+srv://thisissahadat:thisissahadat@cluster0.gujpvnv.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL,function (error,MyMongoClient) {

    if(error){
        console.log("Connection Failed");
    }else {
        console.log("Connected Successfully");
        //InsertData(MyMongoClient);
        //DeleteOneItem(MyMongoClient);
        //DeleteAllItem(MyMongoClient);
        //findOneWithoutCondition(MyMongoClient);
        //findOneWithCondition(MyMongoClient);
        //FindAllData(MyMongoClient);
        //FindDataByProjection(MyMongoClient);
        //FindDataByQuery(MyMongoClient);
        //FindDataByLimit(MyMongoClient);
        //FindDataBySort(MyMongoClient);
        //UpdateOneData(MyMongoClient);
        //CreateCollection(MyMongoClient);
        DeleteCollection(MyMongoClient);
    }

});

function InsertData(MyMongoClient) {
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var MyData={Name:"Shahadat",Roll:"06",Class:"B.S.C",City:"Munshiganj"};
    MyCollection.insertOne(MyData,function (error) {

        if(error){
            console.log("Data Insert Failed");
        }else {
            console.log("Data insert Successful");
        }

    })
}

function DeleteOneItem(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var deleteItem={Roll:"05"}
    MyCollection.deleteOne(deleteItem,function (error) {

        if(error){
            console.log("Data Delete Failed");
        }else {
            console.log("Data Delete Successful");
        }

    })

}

function DeleteAllItem(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    MyCollection.deleteMany(function (error) {
        if(error){
            console.log("Data Delete Failed");
        }else {
            console.log("All items deleted");
        }
        
    })
        
    
}

function findOneWithoutCondition(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var FindObj={}
    MyCollection.findOne(FindObj,function (error,result) {
        if(error){
            console.log("Data finding Unsuccessful")
        }else {
            console.log(result);
        }


    })
}

function findOneWithCondition(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var FindObj={"Roll": "06"}
    MyCollection.findOne(FindObj,function (error,result) {
        if(error){
            console.log("Data finding Unsuccessful")
        }else {
            console.log(result);
        }


    })
}

function FindAllData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    MyCollection.find().toArray(function (error, result) {
        if(error){
            console.log("Data finding Unsuccessful")
        }else {
            console.log(result);
        }
    })
}

function FindDataByProjection(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var Itemobj={}
    var ItemProjection={projection:{Roll:""}}

    MyCollection.find(Itemobj,ItemProjection).toArray(function (error, result) {

            console.log(result);

    })
}

function FindDataByQuery(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var Query={City :"Dhaka"}

    MyCollection.find(Query).toArray(function (error, result) {

        console.log(result);

    })
}

function FindDataByLimit(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');

    MyCollection.find().limit(3).toArray(function (error, result) {

        console.log(result);

    })
}

function FindDataBySort(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var SortPattern={Roll:-1}//-1 == reverse Sort 1=regular sort. applicable for number and alphabet also.

    MyCollection.find().sort(SortPattern).toArray(function (error, result) {

        console.log(result);

    })
}

function UpdateOneData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection('Students');
    var MyQuery={Roll:"9"};
    var NewValues={$set: {Name:"Sabiqun Nahar"}};
    MyCollection.updateOne(MyQuery,NewValues,function (error, result) {
        console.log(result);
    })
}

function CreateCollection(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    MyDataBase.createCollection("Parents",function(error, result) {
        console.log(result);
    })
}

function DeleteCollection(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    MyDataBase.dropCollection("Parents",function (error, result) {
        console.log(result);
    })
}









