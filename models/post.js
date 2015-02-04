// required modules
var mongoose = require("mongoose");
var appSettings = require("../appSettings");

// post schema
var postSchema = mongoose.Schema({
    title : String,
    content : String,
    tags : String,
    keywords : String,
    author : String,
    datePublished : { type : Date, default : Date.now },
    permalink : String,
    comments : [
        {
            content : String,
            author : String,
            datePublished : { type : Date, default : Date.now }
        }
    ]
});

// post model
var Post = mongoose.model("Post", postSchema);

// connect to database
mongoose.connect(appSettings.dbConnectionString);

module.exports = Post;