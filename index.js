const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });

var cors = require('cors');
const postController = require("./controller.js/postController")
const port = 8080;

const app = express();
app.use(cors());
app.use("/uploads", express.static('uploads'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const atls_url = process.env.MONGODB_URI;
console.log(atls_url);
mongoose.connect(atls_url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to Cloud MongoDB ATLAS");
})


app.post("/api/image", upload.single("postImage"), postController.addPost)


app.get("/api/image", postController.getPosts);

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
