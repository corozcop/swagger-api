'use strict';

var url = require('url');


var Group = require('./GroupService');


module.exports.groupPOST = function groupPOST (req, res, next) {
  Group.groupPOST(req.swagger.params, res, next);
};

module.exports.group_idGET = function group_idGET (req, res, next) {
  Group.group_idGET(req.swagger.params, res, next);
};

module.exports.group_idPUT = function group_idPUT (req, res, next) {
  Group.group_idPUT(req.swagger.params, res, next);
};

module.exports.groupsGET = function groupsGET (req, res, next) {
  Group.groupsGET(req.swagger.params, res, next);
};
