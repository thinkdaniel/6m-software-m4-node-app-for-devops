
// This is the only function that will be called by the endpoint.
function print(req, res){
    // const unused = 42;
    res.send("Hello world! It's a great day!");
}

module.exports = print;