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
exports.Warrior = exports.Mage = exports.baseChar = void 0;
var baseChar = /** @class */ (function () {
    function baseChar(name, lvl) {
        this.name = name;
        this.lvl = lvl;
    }
    baseChar.prototype.setWeapon = function (weapon) {
        this.weapon = weapon;
    };
    baseChar.prototype.hit = function (enemy) {
        console.log(this.name + " \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043B " + enemy.name + ". \u041D\u0430\u043D\u0435\u0441\u0435\u043D\u043E " + this.weapon.damage + " \u0443\u0440\u043E\u043D\u0430. \u0423 " + enemy.name + " \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C " + enemy.hp + " \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F.");
    };
    return baseChar;
}());
exports.baseChar = baseChar;
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 50;
        _this.mp = 100;
        return _this;
    }
    Mage.prototype.setWeapon = function (weapon) {
        this.weapon = weapon;
    };
    Mage.prototype.hit = function (enemy) {
        this.mp -= 5;
        if (this.mp > 0) {
            enemy.hp -= this.weapon.damage;
            _super.prototype.hit.call(this, enemy);
        }
    };
    return Mage;
}(baseChar));
exports.Mage = Mage;
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 100;
        _this.mp = 50;
        return _this;
    }
    Warrior.prototype.setWeapon = function (weapon) {
        this.weapon = weapon;
    };
    Warrior.prototype.hit = function (enemy) {
        enemy.hp -= this.weapon.damage;
        _super.prototype.hit.call(this, enemy);
    };
    return Warrior;
}(baseChar));
exports.Warrior = Warrior;
