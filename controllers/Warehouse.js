'use strict';

var url = require('url');


var Warehouse = require('./WarehouseService');


module.exports.warehousePOST = function warehousePOST (req, res, next) {
  Warehouse.warehousePOST(req.swagger.params, res, next);
};

module.exports.warehouse_idGET = function warehouse_idGET (req, res, next) {
  Warehouse.warehouse_idGET(req.swagger.params, res, next);
};

module.exports.warehouse_idPUT = function warehouse_idPUT (req, res, next) {
  Warehouse.warehouse_idPUT(req.swagger.params, res, next);
};

module.exports.warehousesGET = function warehousesGET (req, res, next) {
  Warehouse.warehousesGET(req.swagger.params, res, next);
};
