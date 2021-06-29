let Comment = require('../models/comment');
let AddNewPost = require('../models/AddPost');


module.exports= {
    comment : (req,res)=>{
        const comment= new Comment({
            content: req.body.content,
        });
         comment.save();
        AddNewPost.findByIdAndUpdate(req.body.postId,{
            $push: {
                comments: {
                  _id: comment._id,
                  content: comment.content
                }
        },
            new:true,
            useFindAndModfiy:false
        })
        .populate("comments","content -_id")
       // .populate("comment","content -_id")
        //.populate("postedBy","_id name")
        .exec((err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }else{
                res.json(result)
            }
        })
    }
};