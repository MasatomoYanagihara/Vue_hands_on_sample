// Node.js上で動作する為、importではなくrequireを使用する。
const delay = require('mocker-api/lib/delay');

const proxy = {
  // プロフィール取得API
  'GET /api/profile': (req, res) => {
    return res.status(200).json({
      userId: '66006b29-727e-4ed8-a3c8-95d4438f66d4',
      userName: 'naminamiaaaaaaaaa',
      nickname: '波平',
      themeColor: '#4caf50',
      hasAvatar: false,
      mailAddress: 'namihei@example.com',
    });
  },
  // プロフィール更新API
  'PATCH /api/profile': (req, res) => {
    if (req.body.userName === 'fune') {
      return res.status(422).json({
        title: 'このユーザー名は既に使われています。',
      });
    }
    return res.status(200).json();
  },
};

// 1秒遅延させる
module.exports = delay(proxy, 1000);
