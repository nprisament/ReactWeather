var express = require("express");
var app = express();
app.use(express.static("main"));
app.listen(3000, function() {
	console.log("express server running on port 3000");
});