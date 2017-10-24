'use strict';

var url = require('url');


var Branch = require('./BranchService');


module.exports.branchPOST = function branchPOST (req, res, next) {
  Branch.branchPOST(req.swagger.params, res, next);
};

module.exports.branch_idGET = function branch_idGET (req, res, next) {
  Branch.branch_idGET(req.swagger.params, res, next);
};

module.exports.branch_idPUT = function branch_idPUT (req, res, next) {
  Branch.branch_idPUT(req.swagger.params, res, next);
};

module.exports.branchesGET = function branchesGET (req, res, next) {
  Branch.branchesGET(req.swagger.params, res, next);
};
