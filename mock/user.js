var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId 
var app = express();
var url = "mongodb://localhost:27017/app";

export default  {
//查询
  '/api/users': app.get('/api/users',(req,res)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("app");
      dbo.collection("app"). find({}).sort({_id:-1}).toArray(function(err, result) { // 返回集合中所有数据
         if(!err){
          res.json({
          result: result})
         }else{
          res.json({success:false})
         }
          db.close();
      })});
}),
//新增
'post /api/users/addUser':app.post('/api/users/addUser',(req,res)=>{
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("app");
    dbo.collection("app").insertOne(req.body, function(err, result) {
        if (err){
        res.json({success:false})
        }
        res.json({success:true})
        db.close();
    });
});
}),
//删除
'post /api/users/delete':app.post('/api/users/delete',(req,res)=>{
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("app");
        var id = {_id:ObjectId(req.body)};
        dbo.collection("app").remove(id, function(err, result) {
            if (err){
              res.json({success:false})
            }
            res.json({success:true})
            db.close();
        });
    });
    })
}
