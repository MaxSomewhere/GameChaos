"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightArmor = exports.Robe = exports.heavyArmor = void 0;
var heavyArmor = (function () {
    function heavyArmor() {
        this.name = 'noob heavy armor';
        this.lvl = 1;
        this.hp = 90;
        this.mp = 10;
    }
    return heavyArmor;
}());
exports.heavyArmor = heavyArmor;
var Robe = (function () {
    function Robe() {
        this.name = 'noob robe';
        this.lvl = 1;
        this.hp = 50;
        this.mp = 40;
    }
    return Robe;
}());
exports.Robe = Robe;
var lightArmor = (function () {
    function lightArmor() {
        this.name = 'noob light armor';
        this.lvl = 1;
        this.hp = 60;
        this.mp = 25;
    }
    return lightArmor;
}());
exports.lightArmor = lightArmor;
