var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get("/", (req, res) => res.json({message: "Hooray! Welcome to our API!"}));
router.get("/hello", (req, res) => res.json({message: "Hello world!"}));
router.get("/goodbye/:name", (req, res) => res.json({message: "Goodbye " + req.params.name}));
router.post("/sum", (req, res) => res.json({message: req.body.num1 + req.body.num2}));

app.use("/api", router);
app.listen(port);

console.log("Magic happens on port " + port);