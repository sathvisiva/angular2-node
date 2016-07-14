var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '168643720142372',
        clientSecret: '96495948f5f64c4cf855bf6e26d37bfe',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    },
    twitter: {
        clientID: '6CHHC3ARPmmsDNxhUW8cb6sp3',
        clientSecret: 'K8vBevcDnFaMzuoNXTcUqWArjj8l0Jg7ROQxc5Qn4JnwWt5ZL9',
        callbackURL: 'http://localhost:1337/oauth/twitter/callback'
    },
  instagram: {
    clientID: 'c704cf97b48f498b8c5443d013fe9a72',
    clientSecret: '030ab37c3b474773ab8ffe27e28a89c2',
    callbackURL: 'http://127.0.0.1:3000/auth/instagram/callback'
  }
};