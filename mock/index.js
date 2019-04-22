const data = [
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
    'GET /api/users': (req,res)=>{
        res.send(data)
    }
  };