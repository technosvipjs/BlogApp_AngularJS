// required modules
var express = require("express");
var Post = require("../models/post");
var postUtil = require("../utils/post");

// create posts router
var router = express.Router();

router.route("/posts")
    // get all posts
    .get(function(req, res) {
        Post.find({}, function(err, posts) {
            if(err) {
                return res.json(err);
            }

            res.json(posts);
        });
    })
    // create a new post
    .post(function(req, res) {
        var post = postUtil.create(Post, req.body);

        post.save(function(err, post) {
            if(err) {
                return res.json(err);
            }

            res.json(post);
        });
    });

router.route("/posts/:id")
    // get post by its id
    .get(function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if(err) {
                return res.json(err);
            }

            res.json(post);
        });
    })
    // update the particular post
    .put(function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if(err) {
                return res.json(err);
            }

            post = postUtil.update(post, req.body);

            post.save(function(err, post) {
                if(err) {
                    return res.json(err);
                }

                res.json(post);
            });
        })
    })
    // delete the particular post
    .delete(function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if(err) {
                return res.json(err);
            }

            post.remove(function(err, post) {
                if(err) {
                    return res.json(err);
                }

                res.json(post);
            });
        });
    });

module.exports = router;