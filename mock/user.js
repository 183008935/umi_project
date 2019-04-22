















var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var app = express();
var url = "mongodb://localhost:27017/app";

export default  {
  '/api/users': app.get('/api/users',(req,res)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("app");
      dbo.collection("app"). find({}).toArray(function(err, result) { // 返回集合中所有数据
         if(!err){
          res.json({
          result: result})
         }else{
          res.json({success:false})
         }
          db.close();
      })});
}),
'/api/users/delete/:id':app.get('/api/users/delete/:key',(req,res)=>{
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("app");
        dbo.collection("app").deleteOne(req.params, function(err, result) {
            if (err){
              res.json({success:false})
            }
            res.json({success:true})
            db.close();
        });
    });
    })
}





















// let express = require('express')
// let mongoose = require('mongoose');
// let app = express();
// mongoose.connect('mongodb://localhost:27017/app',{useNewUrlParser: true});
// const con = mongoose.connection;
// con.on('error', console.error.bind(console, '连接数据库失败'));
// con.once('open',()=>{
//     //成功连接
//     console.log('连接成功')
// })
// let User = new mongoose.Schema({
//   key:{
//      type: String,
//      required: true},
//   name:{
//      type: String,
//      required: true
//   },
//   title:{
//      type: String,
//      required: true
//   },
//   enable:{
//      type: String,
//      required: true
//   },
//   status:{
//      type: String,
//      required: true
//   },   
// })

// // var express = require('express')
// // var MongoClient = require('mongodb').MongoClient;
// // var app = express();
// // var url = "mongodb://localhost:27017/app";
// // let data = [
// //     {
// //       key: '1',
// //       name: 'John Brown',
// //       age: 32,
// //       enable: 'true',
// //     },
// //     {
// //       key: '2',
// //       name: 'Jim Green',
// //       age: 42,
// //       enable: 'true',
// //     },
// //     {
// //       key: '3',
// //       name: 'Joe Black',
// //       age: 32,
// //       enable: 'false',
// //     },
// //   ]
// app.get('/api/users',(req,res,next)=>{
//   User.find({},(err,doc)=>{
//     res.json(doc)
//     console.log(doc)
//   })
// })
// export default {
//     // 'get /api/users': app.get('/api/users',(req,res,next)=>{

//     // })
    
//     // // function (req, res, next) {
//     // //   res.json({
//     // //     result: data,
//     // //   })
//     // //   },
//   };



// // // 代码中会兼容本地 service mock 以及部署站点的静态数据
// // const data = [
// //     {
// //       key: '1',
// //       name: 'John Brown',
// //       age: 32,
// //       enable: 'true',
// //     },
// //     {
// //       key: '2',
// //       name: 'Jim Green',
// //       age: 42,
// //       enable: 'true',
// //     },
// //     {
// //       key: '3',
// //       name: 'Joe Black',
// //       age: 32,
// //       enable: 'false',
// //     },
// //   ],
// // export default {
// //     // 支持值为 Object 和 Arra
// //     // GET POST 可省略
// //     'GET /api/users': data,
// //     'POST /api/login/account': (req, res) => {
// //       const { password, userName, type } = req.body;
// //       if (password === 'ant.design' && userName === 'admin') {
// //         res.send({
// //           status: 'ok',
// //           type,
// //           currentAuthority: 'admin',
// //         });
// //         return;
// //       }
// //       if (password === 'ant.design' && userName === 'user') {
// //         res.send({
// //           status: 'ok',
// //           type,
// //           currentAuthority: 'user',
// //         });
// //         return;
// //       }
// //       res.send({
// //         status: 'error',
// //         type,
// //         currentAuthority: 'guest',
// //       });
// //     },
// //     'POST /api/register': (req, res) => {
// //       res.send({ status: 'ok', currentAuthority: 'user' });
// //     },
// //     'GET /api/500': (req, res) => {
// //       res.status(500).send({
// //         timestamp: 1513932555104,
// //         status: 500,
// //         error: 'error',
// //         message: 'error',
// //         path: '/base/category/list',
// //       });
// //     },
// //     'GET /api/404': (req, res) => {
// //       res.status(404).send({
// //         timestamp: 1513932643431,
// //         status: 404,
// //         error: 'Not Found',
// //         message: 'No message available',
// //         path: '/base/category/list/2121212',
// //       });
// //     },
// //     'GET /api/403': (req, res) => {
// //       res.status(403).send({
// //         timestamp: 1513932555104,
// //         status: 403,
// //         error: 'Unauthorized',
// //         message: 'Unauthorized',
// //         path: '/base/category/list',
// //       });
// //     },
// //     'GET /api/401': (req, res) => {
// //       res.status(401).send({
// //         timestamp: 1513932555104,
// //         status: 401,
// //         error: 'Unauthorized',
// //         message: 'Unauthorized',
// //         path: '/base/category/list',
// //       });
// //     },
// //   };


// // export default {
// //     'get /dev/random_joke': function (req, res) {
// //       res.status(500);
// //       res.json({});
// //     },
// //   };