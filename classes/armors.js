"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.lightArmor = exports.Robe = exports.heavyArmor = exports.magicArmor = exports.phisicalArmor = exports.baseArmor = void 0;
var baseArmor = /** @class */ (function () {
    function baseArmor() {
    }
    return baseArmor;
}());
exports.baseArmor = baseArmor;
var phisicalArmor = /** @class */ (function (_super) {
    __extends(phisicalArmor, _super);
    function phisicalArmor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return phisicalArmor;
}(baseArmor));
exports.phisicalArmor = phisicalArmor;
var magicArmor = /** @class */ (function (_super) {
    __extends(magicArmor, _super);
    function magicArmor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return magicArmor;
}(baseArmor));
exports.magicArmor = magicArmor;
var heavyArmor = /** @class */ (function (_super) {
    __extends(heavyArmor, _super);
    function heavyArmor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'noob heavy armor';
        _this.lvl = 1;
        _this.hp = 90;
        _this.mp = 10;
        return _this;
    }
    return heavyArmor;
}(phisicalArmor));
exports.heavyArmor = heavyArmor;
var Robe = /** @class */ (function (_super) {
    __extends(Robe, _super);
    function Robe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'noob robe';
        _this.lvl = 1;
        _this.hp = 50;
        _this.mp = 40;
        return _this;
    }
    return Robe;
}(magicArmor));
exports.Robe = Robe;
var lightArmor = /** @class */ (function (_super) {
    __extends(lightArmor, _super);
    function lightArmor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'noob light armor';
        _this.lvl = 1;
        _this.hp = 60;
        _this.mp = 25;
        return _this;
    }
    return lightArmor;
}(phisicalArmor));
exports.lightArmor = lightArmor;
