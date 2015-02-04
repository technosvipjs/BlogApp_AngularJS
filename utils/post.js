// required modules
var permaLink = require("./permaLink");
var appSettings = require("../appSettings");

// create post model
exports.create = function(model, body) {
    var post = new model({
        title : body.title,
        content : body.content,
        tags : body.tags,
        keywords : body.keywords,
        author : appSettings.defaultAuthorName,
        datePublished : Date.now(),
        permalink : permaLink.setLink(body)
    });

    return post;
};

// update post model
exports.update = function(post, body) {
    for(var prop in body) {
        if(body.hasOwnProperty(prop)) {
            post[prop] = body[prop];
        }
    }

    post.datePublished = Date.now();
    post.permalink = permaLink.setLink(body);

    return post;
};