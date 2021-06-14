"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.berserk = exports.baseBuff = void 0;
var baseBuff = (function () {
    function baseBuff() {
    }
    baseBuff.prototype.setCharHP = function (charHP) {
        this.charHP = charHP;
    };
    return baseBuff;
}());
exports.baseBuff = baseBuff;
var berserk = (function (_super) {
    __extends(berserk, _super);
    function berserk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = _this.charHP.weapon.damage;
        return _this;
    }
    berserk.prototype.setCharHP = function (charHP) {
        this.charHP = charHP;
        if (charHP.hp < charHP.hp / 2) {
            this.damage += this.damage;
        }
    };
    return berserk;
}(baseBuff));
exports.berserk = berserk;
