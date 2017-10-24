'use strict';

exports.authPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * password (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "access_token" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.registerPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Body_1)
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

exports.user_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.user_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  * body (Body)
  **/
  // no response value expected for this operation
  res.end();
}

exports.usersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "salt" : "aeiou",
  "activation_code" : "aeiou",
  "last_login" : "2000-01-23T04:56:07.000+00:00",
  "last_name" : "aeiou",
  "active" : "",
  "photo" : "aeiou",
  "groups" : {
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : ""
  },
  "ip_address" : "aeiou",
  "warehouse" : {
    "idwhs" : "",
    "whs_dtsstatus" : "",
    "whs_name" : "aeiou",
    "whs_status" : ""
  },
  "branch" : {
    "idbranch" : "",
    "branch_name" : "aeiou"
  },
  "password" : "aeiou",
  "forgotten_password_time" : "2000-01-23T04:56:07.000+00:00",
  "created_on" : "2000-01-23T04:56:07.000+00:00",
  "phone" : "aeiou",
  "remember_code" : "aeiou",
  "company" : "aeiou",
  "id" : "",
  "first_name" : "aeiou",
  "email" : "aeiou",
  "forgotten_password_code" : "aeiou",
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

