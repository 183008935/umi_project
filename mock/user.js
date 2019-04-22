let data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      enable: 'true',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      enable: 'true',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      enable: 'false',
    },
  ]
export default {
    'get /api/users': function (req, res, next) {
          res.json({
            result: data,
          })
      },
  };



// // 代码中会兼容本地 service mock 以及部署站点的静态数据
// const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       enable: 'true',
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       enable: 'true',
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       enable: 'false',
//     },
//   ],
// export default {
//     // 支持值为 Object 和 Arra
//     // GET POST 可省略
//     'GET /api/users': data,
//     'POST /api/login/account': (req, res) => {
//       const { password, userName, type } = req.body;
//       if (password === 'ant.design' && userName === 'admin') {
//         res.send({
//           status: 'ok',
//           type,
//           currentAuthority: 'admin',
//         });
//         return;
//       }
//       if (password === 'ant.design' && userName === 'user') {
//         res.send({
//           status: 'ok',
//           type,
//           currentAuthority: 'user',
//         });
//         return;
//       }
//       res.send({
//         status: 'error',
//         type,
//         currentAuthority: 'guest',
//       });
//     },
//     'POST /api/register': (req, res) => {
//       res.send({ status: 'ok', currentAuthority: 'user' });
//     },
//     'GET /api/500': (req, res) => {
//       res.status(500).send({
//         timestamp: 1513932555104,
//         status: 500,
//         error: 'error',
//         message: 'error',
//         path: '/base/category/list',
//       });
//     },
//     'GET /api/404': (req, res) => {
//       res.status(404).send({
//         timestamp: 1513932643431,
//         status: 404,
//         error: 'Not Found',
//         message: 'No message available',
//         path: '/base/category/list/2121212',
//       });
//     },
//     'GET /api/403': (req, res) => {
//       res.status(403).send({
//         timestamp: 1513932555104,
//         status: 403,
//         error: 'Unauthorized',
//         message: 'Unauthorized',
//         path: '/base/category/list',
//       });
//     },
//     'GET /api/401': (req, res) => {
//       res.status(401).send({
//         timestamp: 1513932555104,
//         status: 401,
//         error: 'Unauthorized',
//         message: 'Unauthorized',
//         path: '/base/category/list',
//       });
//     },
//   };


// export default {
//     'get /dev/random_joke': function (req, res) {
//       res.status(500);
//       res.json({});
//     },
//   };