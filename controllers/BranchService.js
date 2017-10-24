'use strict';

exports.branchPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Body_6)
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

exports.branch_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idbranch" : "",
  "branch_name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.branch_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  * body (Body_7)
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

exports.branchesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "idbranch" : "",
  "branch_name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

