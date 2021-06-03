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
exports.Axe = exports.magicStuff = exports.magicWeapon = exports.phisicalWeapon = exports.baseWeapon = void 0;
var baseWeapon = /** @class */ (function () {
    function baseWeapon() {
    }
    return baseWeapon;
}());
exports.baseWeapon = baseWeapon;
var phisicalWeapon = /** @class */ (function (_super) {
    __extends(phisicalWeapon, _super);
    function phisicalWeapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return phisicalWeapon;
}(baseWeapon));
exports.phisicalWeapon = phisicalWeapon;
var magicWeapon = /** @class */ (function (_super) {
    __extends(magicWeapon, _super);
    function magicWeapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return magicWeapon;
}(baseWeapon));
exports.magicWeapon = magicWeapon;
var Axe = /** @class */ (function (_super) {
    __extends(Axe, _super);
    function Axe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'noob axe';
        _this.lvl = 1;
        _this.damage = 15;
        return _this;
    }
    return Axe;
}(phisicalWeapon));
exports.Axe = Axe;
var magicStuff = /** @class */ (function (_super) {
    __extends(magicStuff, _super);
    function magicStuff() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'noob stuff';
        _this.lvl = 1;
        _this.damage = 10;
        return _this;
    }
    return magicStuff;
}(magicWeapon));
exports.magicStuff = magicStuff;
