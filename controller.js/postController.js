const Post = require("../models/post");

module.exports.addPost = async (req, res) => {
    console.log(req.body, req.file);

    const name = req.body.name;
    const location = req.body.location;
    const likes = req.body.likes;
    const description = req.body.description;
    const date = req.body.date;
    const imageURL = req.file.path;

    if (!name || !location || !description || !imageURL) {
        res.send({ status: 400, msg: "Bad Request" })
    }

    const post = new Post({
        name: name,
        location: location,
        likes: likes,
        description: description,
        postImage: imageURL,
        date: date
    })

    const success = await post.save();
    if(success){
        return res.send({code:200, message : "add success"})
    }else{
        return res.send({code : 500, message : "service error"})
    }
}

module.exports.getPosts = async (req,res) => {
    const _data = await Post.find({}).sort({ _id: -1 });
    if(_data){
        return res.send({code:200, message: "success", data : _data})
    }else{
        return res.send({code : 500, message : "service error"})
    }
    
}