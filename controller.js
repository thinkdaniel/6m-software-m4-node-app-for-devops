
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Goodbye world!!");
}

module.exports = print;