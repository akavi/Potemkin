var db = require('mongodb');
var express = require('express');
var app = express();
app.use(express.bodyParser());

var collRegex = /^\/(\w+)\/$/;
var memberRegex = /^\/(\w+)\/(\w+)$/;

app.get("/", function(req, res){
  res.send("Potemkin's running!");
});

//list
app.get(collRegex, function(req, res){
  collectionName = req.params[1]

  coll = db[collectionName].find()

  collJson = JSON.stringify(coll);
  res.send(collJson);
});

//create
app.post(collRegex, function(req, res){
  collectionName = req.params[1]
  // HOW DO I GET THE POST BODY?
  member = req.body

  coll.insert(member);

  memberJson = JSON.stringify(member);
  res.send(memberJSON);
});

//show
app.get(memberRegex, function(req, res){
  coll = db.get(req.coll);
  member = coll.find(req.id);

  memberJson = JSON.stringify(member);
  res.send(memberJSON);
});

//update
app.put(memberRegex, function(req, res){
  coll = db.get(req.coll);
  member = coll.find(req.id);

  member.merge(req.params);
  member.save;

  memberJson = JSON.stringify(member);
  res.send(memberJSON);
});

//destroy
app.delete(memberRegex, function(req, res){
  coll = db.get(req.coll);
  member = coll.find(req.id);

  res.send(JSON.stringify({}));
});

app.listen(3000);
