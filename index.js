const express = require("express")
const Pusher = require('pusher')
const channels_client = new Pusher({
  appId: '851965',
  key: '891f62a82a9ec4762787',
  secret: 'd17b62697f5cb1c602f1',
  cluster: 'eu',
  encrypted: true
});


const app = express()
app.get('/', (req,res)=> {
    res.send("ok")
})
app.get('/test', (req,res) => {
    console.log(req.query.message)
    channels_client.trigger('my-channel', 'my-event', {
  "message": req.query.message
});
    res.send(req.query.message)
})
app.listen(3000)