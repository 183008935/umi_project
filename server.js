// server.js

// 基础设置
// =============================================================================

// 引用需要的package
var express    = require('express');        // 引用 express
var app        = express();                 // 定义我们的app
var bodyParser = require('body-parser');
// 添加bodyParse配置
// 这个设置方便我们在处理Post请求时获取body里面的内容
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // 设置端口

// api中需要的Route
// =============================================================================
var router = express.Router(); 

// 测试服务是否正常运行
router.get('/', function(req, res) {
    res.json({ message: 'nice，服务器来了!' });   
});

// 这里将会创建更多的路由

// 注册路由 -------------------------------
// 我们所有的接口将以 /api 开头
app.use('/api', router);

// 启动服务
// =============================================================================


// 启动服务
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/app', function (err) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');

    app.listen(port, function (err) {
        if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at localhost:27017`)
        }
    });
});
console.log('服务正常运行在端口： port ' + port);
var Schema = mongoose.Schema;
var MemberSchema = new Schema({
    name: String,
    key: String,
    title: String,
    enable: String,
    status:String,
})
var apps = mongoose.model('app', MemberSchema);
export default  {
    '/api/users':app.get((req,res,next)=>{
        apps.find({},(err,data)=>{
            if (err)
            res.send(err);
            res.json(data);
        })

    })
  }