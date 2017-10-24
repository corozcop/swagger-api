'use strict';

exports.groupPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Body_4)
  **/
    var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.group_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.group_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  * body (Body_5)
  **/
  // no response value expected for this operation
  res.end();
}

exports.groupsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

