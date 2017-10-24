'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.authPOST = function authPOST (req, res, next) {
  Users.authPOST(req.swagger.params, res, next);
};

module.exports.registerPOST = function registerPOST (req, res, next) {
  Users.registerPOST(req.swagger.params, res, next);
};

module.exports.user_idGET = function user_idGET (req, res, next) {
  Users.user_idGET(req.swagger.params, res, next);
};

module.exports.user_idPUT = function user_idPUT (req, res, next) {
  Users.user_idPUT(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  Users.usersGET(req.swagger.params, res, next);
};
