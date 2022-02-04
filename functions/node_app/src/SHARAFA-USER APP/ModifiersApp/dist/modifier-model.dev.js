"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = require("sequelize"),
    Model = _require.Model,
    DataTypes = _require.DataTypes,
    UUIDV4 = _require.UUIDV4;

var _require2 = require('../../db'),
    sequelize = _require2.sequelize;

sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});

var Modifiers =
/*#__PURE__*/
function (_Model) {
  _inherits(Modifiers, _Model);

  function Modifiers() {
    _classCallCheck(this, Modifiers);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modifiers).apply(this, arguments));
  }

  return Modifiers;
}(Model);

Modifiers.init({
  _id: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  modifier_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    get: function get() {
      return Number(this.getDataValue('price')).toFixed(2);
    }
  },
  iva: {
    type: DataTypes.STRING,
    allowNull: false
  },
  iva_value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  beans_value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_Active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  price_without_tax: {
    type: DataTypes.VIRTUAL,
    allowNull: true,
    get: function get() {
      if (this.getDataValue('iva_value')) {
        return Number(this.getDataValue('price')) - Number(this.getDataValue('price')) * Number(this.getDataValue('iva_value').replace("%", "")) / 100; // return (Number(this.getDataValue('price')) - (Number(this.getDataValue('price')) * Number(this.getDataValue('iva_value').replace("%", "")) / 100)).toFixed(2)
      }
    }
  }
}, {
  sequelize: sequelize,
  freezeTableName: true
});
Modifiers.sync(true);
module.exports.ModifiersModel = Modifiers;