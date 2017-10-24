'use strict';

exports.warehousePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Body_3)
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

exports.warehouse_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idwhs" : "",
  "whs_dtsstatus" : "",
  "whs_name" : "aeiou",
  "whs_status" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.warehouse_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * _id (Integer)
  * body (Body_2)
  **/
  // no response value expected for this operation
  res.end();
}

exports.warehousesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "idwhs" : "",
  "whs_dtsstatus" : "",
  "whs_name" : "aeiou",
  "whs_status" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

