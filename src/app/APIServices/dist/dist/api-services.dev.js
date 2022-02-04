"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.APIServices = void 0;

var core_1 = require("@angular/core");

var http_1 = require("@angular/common/http");

var httpOptions = {
  headers: new http_1.HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

var APIServices =
/** @class */
function () {
  function APIServices(httpClient) {
    this.httpClient = httpClient;
    this.units = [{
      code: "bag(s)",
      name: "Bag(s)"
    }, {
      code: "kilo(s)",
      name: "Kilo(s)"
    }, {
      code: "litro(s)",
      name: "Litro(s)"
    }, {
      code: "box(s)",
      name: "Box(s)"
    }, {
      code: "unit(s)",
      name: "Unit(s)"
    }];
  }

  APIServices.prototype.url = function (path) {
    //var url = 'https://us-central1-syra-sharafa.cloudfunctions.net/api'
    //var url = 'http://localhost:5001/syra-sharafa/us-central1/api'
    var url = 'https://syra-sharafa.herokuapp.com'; //  var url = 'http://localhost:8080'

    url = "" + url + path;
    return url;
  };

  APIServices.prototype.admin_login = function (data) {
    return this.httpClient.post(this.url("/admin/login"), data);
  };

  APIServices.prototype.get_admin_details_by_id = function (admindetails) {
    return this.httpClient.post(this.url("/admin/get_admin_details"), admindetails);
  };

  APIServices.prototype.logout = function (log_out) {
    return this.httpClient.post(this.url("/admin/logout"), log_out);
  };

  APIServices.prototype.update_admin_details = function (adminupdate) {
    return this.httpClient.post(this.url("/admin/update_admin_details"), adminupdate);
  };

  APIServices.prototype.get_branch = function (branchlist) {
    return this.httpClient.post(this.url("/branches/get_branches"), branchlist);
  };

  APIServices.prototype.update_branch = function (branch) {
    return this.httpClient.post(this.url("/branches/update_branch"), branch);
  };

  APIServices.prototype.add_branch = function (branch) {
    return this.httpClient.post(this.url("/branches/add_branch"), branch);
  };

  APIServices.prototype.get_all_barista = function () {
    return this.httpClient.post(this.url("/barista/get_all_barista"), {});
  };

  APIServices.prototype.addBarista = function (barista) {
    return this.httpClient.post(this.url("/barista/add_barista"), barista);
  };

  APIServices.prototype.update_barista_password = function (barista) {
    return this.httpClient.post(this.url("/barista/update_password"), barista);
  };

  APIServices.prototype.get_settings = function () {
    return this.httpClient.post(this.url("/settings/get_settings"), null);
  };

  APIServices.prototype.update_admin_message = function (id, admin_message) {
    return this.httpClient.post(this.url("/admin/update_admin_details"), {
      id: id,
      admin_recipt_message: admin_message
    });
  };

  APIServices.prototype.update_settings = function (settings) {
    return this.httpClient.post(this.url("/settings/update_settings"), {
      request_array: settings
    });
  };

  APIServices.prototype.upload_logo = function (files) {
    var formData = new FormData();
    formData.append("file", files, files.name);
    return this.upload(formData, null);
  };

  APIServices.prototype.get_logo = function () {
    return this.httpClient.post(this.url("/settings/get_logo"), null);
  };

  APIServices.prototype.upload = function (formData, params) {
    formData.append('params', JSON.stringify(params));
    var url = this.url("/settings/upload_logo");
    return this.httpClient.post(url, formData, httpOptions);
  };

  APIServices.prototype.addCategory = function (category) {
    return this.httpClient.post(this.url("/categories/add_category"), category);
  };

  APIServices.prototype.updateCategory = function (category) {
    return this.httpClient.post(this.url("/categories/update_category"), category);
  };

  APIServices.prototype.getCategories = function (data) {
    if (data === void 0) {
      data = null;
    }

    return this.httpClient.post(this.url("/categories/get_categories"), data);
  };

  APIServices.prototype.deleteCategory = function (req) {
    return this.httpClient.post(this.url("/categories/delete_category"), req);
  };

  APIServices.prototype.update_category_order = function (orders) {
    return this.httpClient.post(this.url("/categories/update_order"), orders);
  };

  APIServices.prototype.addCatelouge = function (category) {
    return this.httpClient.post(this.url("/catelouge/add_catelouge"), category);
  };

  APIServices.prototype.updateCatelouge = function (category) {
    return this.httpClient.post(this.url("/catelouge/update_catelouge"), category);
  };

  APIServices.prototype.getCatelouge = function (data) {
    if (data === void 0) {
      data = null;
    }

    return this.httpClient.post(this.url("/catelouge/get_catelouge"), data);
  };

  APIServices.prototype.deleteCatelouge = function (req) {
    return this.httpClient.post(this.url("/catelouge/delete_catelouge"), req);
  };

  APIServices.prototype.searchCatelouge = function (req) {
    return this.httpClient.post(this.url("/catelouge/search_catelouge"), req);
  };

  APIServices.prototype.addIVA = function (iva) {
    return this.httpClient.post(this.url("/setup/add_iva"), iva);
  };

  APIServices.prototype.getIVA = function (iva) {
    if (iva === void 0) {
      iva = null;
    }

    return this.httpClient.post(this.url("/setup/get_iva"), iva);
  };

  APIServices.prototype.deleteIVA = function (iva) {
    return this.httpClient.post(this.url("/setup/delete_iva"), iva);
  };

  APIServices.prototype.addExpense = function (expense) {
    return this.httpClient.post(this.url("/setup/add_expense"), expense);
  };

  APIServices.prototype.getExpense = function (expense) {
    if (expense === void 0) {
      expense = null;
    }

    return this.httpClient.post(this.url("/setup/get_expense"), expense);
  };

  APIServices.prototype.deleteExpense = function (expense) {
    return this.httpClient.post(this.url("/setup/delete_expense"), expense);
  };

  APIServices.prototype.addDiscount = function (discount) {
    return this.httpClient.post(this.url("/setup/add_discount"), discount);
  };

  APIServices.prototype.getDiscount = function (discount) {
    if (discount === void 0) {
      discount = null;
    }

    return this.httpClient.post(this.url("/setup/get_discount"), discount);
  };

  APIServices.prototype.deleteDiscount = function (discount) {
    return this.httpClient.post(this.url("/setup/delete_discount"), discount);
  };

  APIServices.prototype.addProduct = function (product) {
    return this.httpClient.post(this.url("/products/add_product"), product);
  };

  APIServices.prototype.updateProduct = function (product) {
    return this.httpClient.post(this.url("/products/update_product"), product);
  };

  APIServices.prototype.getProducts = function (product) {
    if (product === void 0) {
      product = null;
    }

    return this.httpClient.post(this.url("/products/get_products"), product);
  };

  APIServices.prototype.deleteproduct = function (product) {
    return this.httpClient.post(this.url("/products/delete_product"), product);
  };

  APIServices.prototype.update_product_order = function (orders) {
    return this.httpClient.post(this.url("/products/update_order"), orders);
  };

  APIServices.prototype.get_branch_products = function (category) {
    return this.httpClient.post(this.url("/products/branch_products"), category);
  };

  APIServices.prototype.get_branch_category = function (category) {
    return this.httpClient.post(this.url("/categories/branch_category"), category);
  };

  APIServices.prototype.createInventoryOrder = function (order) {
    return this.httpClient.post(this.url("/inventory-order/create_order"), order);
  };

  APIServices.prototype.updateInventoryOrder = function (order) {
    return this.httpClient.post(this.url("/inventory-order/update_order"), order);
  };

  APIServices.prototype.getInventoryOrders = function (order) {
    return this.httpClient.post(this.url("/inventory-order/get_orders"), order);
  };

  APIServices.prototype.get_branch_inventory_orders = function (order) {
    return this.httpClient.post(this.url("/inventory-order/branch_orders"), order);
  };

  APIServices.prototype.get_out_transactions = function (order) {
    return this.httpClient.post(this.url("/transactionOut/get_txns"), order);
  };

  APIServices.prototype.filter_transactions = function (request) {
    return this.httpClient.post(this.url("/transactionOut/filter"), request);
  };

  APIServices.prototype.get_inventory_reports = function (request) {
    return this.httpClient.post(this.url("/inventory-report/get_reports"), request);
  };

  APIServices.prototype.ger_inventory_reports_filtered = function (req) {
    return this.httpClient.post(this.url("/inventory-report/filter_reports"), req);
  };

  APIServices.prototype.getTxnIn = function (req) {
    return this.httpClient.post(this.url("/orders/transactionIn"), req);
  };

  APIServices.prototype.filter_in_transactions = function (request) {
    return this.httpClient.post(this.url("/orders/filter"), request);
  };

  APIServices.prototype.get_vat_reports = function (request) {
    return this.httpClient.post(this.url("/orders/get_vat_report"), request);
  };

  APIServices.prototype.get_payment_mode_based_report = function (request) {
    return this.httpClient.post(this.url("/orders/get_report_with_payment_mode"), request);
  };

  APIServices.prototype.get_discount_comparison = function (request) {
    return this.httpClient.post(this.url("/orders/get_discount_comparsion"), request);
  };

  APIServices.prototype.get_discount_report_user_coupon = function (request) {
    return this.httpClient.post(this.url("/orders/get_discount_report"), request);
  };

  APIServices.prototype.get_discount_report_user = function (request) {
    return this.httpClient.post(this.url("/orders/get_barista_grouped_discount"), request);
  };

  APIServices.prototype.get_discount_report_coupon = function (request) {
    return this.httpClient.post(this.url("/orders/get_applied_discounts_grouped"), request);
  }; //report Generation
  //1.Accounting Report PDF


  APIServices.prototype.generate_accounting_report = function (request) {
    return this.httpClient.post(this.url("/orders/accounting-report"), request);
  };

  APIServices.prototype.generateGlobalsalesReport = function (request) {
    return this.httpClient.post(this.url("/orders/global-sales"), request);
  };

  APIServices.prototype.generateCategorysalesReport = function (request) {
    return this.httpClient.post(this.url("/orders/category-sales"), request);
  };

  APIServices.prototype.generateProductSalesReport = function (request) {
    return this.httpClient.post(this.url("/orders/product-sales"), request);
  };

  APIServices.prototype.getDashBoard = function (request) {
    return this.httpClient.post(this.url("/orders/get-dashboard"), request);
  };

  APIServices.prototype.downloadInventoryOrder = function (request) {
    return this.httpClient.post(this.url("/inventory-order/print"), request);
  };

  APIServices.prototype.getAttendance_report = function (request) {
    return this.httpClient.post(this.url("/barista/get_report"), request);
  };

  APIServices = __decorate([core_1.Injectable()], APIServices);
  return APIServices;
}();

exports.APIServices = APIServices;