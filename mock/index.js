export default {
    /*'POST /api/login': {
        username: 'admin',
        name: 'aaa',
        phone: '1234'
    },*/
    'POST /api/department/find': [
        {
            id: 1,
            departName: '药房',
            departCode: 'yf'
        }, {
            id: 2,
            departName: '仓库',
            departCode: 'ck'
        }, {
            id: 3,
            departName: '财务科',
            departCode: 'cwk'
        }
    ],
    'POST /api/employee/save': function (req, res) {
        return res.json({
            status: 'success',
            username:req.body.username
        })
    },
   /* 'POST /api/employee/find':function (req,res) {
        let allData = [{
            id: '1',
            username: 'zhangsan',
            password: '1234',
            phone: '4444',
            name: '张三',
            department: {
                id: 1,
                departName: '药房',
                departCode: 'yf'
            }
        }, {
            id: '2',
            username: 'lisi',
            password: '1234',
            phone: '5678',
            name: '李四',
            department: {
                id: 2,
                departName: '仓库',
                departCode: 'ck'
            }
        }, {
            id: '3',
            username: 'wangwu',
            password: '1234',
            phone: '98989',
            name: '王五',
            department: {
                id: 1,
                departName: '药房',
                departCode: 'yf'
            }
        }];
        if(req.query.username){
            return res.json(allData.filter(item=>item.username===req.query.username))
        }
        return res.json(allData)
    }*/
    // 'GET /api/list': function (req, res) {
    //     let query = req.query || {};
    //     return res.json({
    //         limit: query.limit,
    //         offset: query.offset,
    //         list: [{
    //             username: 'admin1',
    //             sex: 1,
    //         }, {
    //             username: 'admin2',
    //             sex: 0,
    //         }]
    //     })
    // },
    // 'GET /api/userinfo/:id': (req, res) => {
    //     return res.json({
    //         id: req.params.id,
    //         username: 'kenny',
    //     });
    // },
    // 'POST /api/login/account': (req, res) => {
    //     const { password, username } = req.body;
    //     if (password === '888888' && username === 'admin') {
    //         return res.json({
    //             status: 'ok',
    //             token: 'sdfsdfsdfdsf',
    //         });
    //     } else {
    //         return res.json({
    //             status: 'error',
    //             code: 403,
    //         });
    //     }
    // },
    // 'DELETE /api/user/:id': (req, res) => {
    //     // console.log(req.params.id);
    //     res.send({ status: 'ok', message: '删除成功！' });
    // },
    // 'PUT /api/user/:id': (req, res) => {
    //     // console.log(req.params.id);
    //     // console.log(req.body);
    //     res.send({ status: 'ok', message: '修改成功！' });
    // },
}
