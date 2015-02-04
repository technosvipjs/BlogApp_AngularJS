// set permalink
exports.setLink = function(body) {
    return body.title.toLowerCase().split(" ").join("-");
};