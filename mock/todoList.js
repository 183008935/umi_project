var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId 
var app = express();
var url = "mongodb://localhost:27017/app";

export default  {
//查询
  '/api/TodoList': app.get('/api/TodoList',(req,res)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("app");
      dbo.collection("todoList"). find({}).sort({_id:-1}).toArray(function(err, result) { // 返回集合中所有数据
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
'post /api/todoList/addTodo':app.post('/api/todoList/addTodo',(req,res)=>{
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("app");
    dbo.collection("todoList").insertOne(req.body, function(err, result) {
        if (err){
        res.json({success:false})
        }
        res.json({success:true})
        db.close();
    });
});
}),
//删除
'post /api/todoList/deleteTodo':app.post('/api/todoList/deleteTodo',(req,res)=>{
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("app");
        var id = {_id:ObjectId(req.body)};
        dbo.collection("todoList").remove(id, function(err, result) {
            if (err){
              res.json({success:false})
            }
            res.json({success:true})
            db.close();
        });
    });
    }),
    //更新
'post /api/todoList/editStatus':app.post('/api/todoList/editStatus',(req,res)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("app");
      var id = {_id:ObjectId(req.body._id)};
      var updateStr = {$set: { has: !req.body.has }};
      dbo.collection("todoList").updateOne(id, updateStr,function(err, result) {
          if (err){
            res.json({success:false})
          }
          res.json({success:true})
          db.close();
      });
  });
  }),
  'post /api/todoList/editTodoValue':app.post('/api/todoList/editTodoValue',(req,res)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("app");
      var id = {_id:ObjectId(req.body._id)};
      var updateStr = {$set: { value: req.body.value }};
      dbo.collection("todoList").updateOne(id, updateStr,function(err, result) {
          if (err){
            res.json({success:false})
          }
          res.json({success:true})
          db.close();
      });
  });
  }),
}
