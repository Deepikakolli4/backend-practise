const express = require('express');

const app = express();
app.use(express.json());

const authRouters = require('./Routers/authRouter');
const dbConnect = require('./db');


app.get('/', (req, res) => {
   res.send("welcome");
})
app.listen(8000, () => {
   console.log("your app is running at port : " + 8000);
});
app.use('/user', authRouters);
dbConnect();
