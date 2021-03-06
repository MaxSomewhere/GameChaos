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
exports.Priest = exports.Archer = exports.Warrior = exports.Mage = exports.baseChar = void 0;
var weapons = require("./weapons");
var armors = require("./armors");
var baseChar = (function () {
    function baseChar(name, lvl) {
        this.name = name;
        this.lvl = lvl;
    }
    baseChar.prototype.setWeapon = function (weapon) {
        this.weapon = weapon;
    };
    baseChar.prototype.setArmor = function (armor) {
        this.armor = armor;
    };
    baseChar.prototype.setBuff = function (buff) {
        this.buff = buff;
    };
    baseChar.prototype.hit = function (enemy) {
        console.log(this.name + " \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u043B " + enemy.name + ". \u041D\u0430\u043D\u0435\u0441\u0435\u043D\u043E " + this.weapon.damage + " \u0443\u0440\u043E\u043D\u0430. \u0423 " + enemy.name + " \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C " + enemy.hp + " \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u0438 " + enemy.mp + " \u043C\u0430\u043D\u044B.");
    };
    return baseChar;
}());
exports.baseChar = baseChar;
var Mage = (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 61 + (_this.lvl * 2);
        _this.mp = 50 + (_this.lvl * 2);
        return _this;
    }
    Mage.prototype.setWeapon = function (weapon) {
        if (!(weapon instanceof weapons.magicStuff)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon;
    };
    Mage.prototype.setArmor = function (armor) {
        if (!(armor instanceof armors.Robe)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    };
    Mage.prototype.setBuff = function (buff) {
        this.buff = buff;
        if (buff.damage > 0) {
            this.buff.damage += this.weapon.damage;
        }
    };
    Mage.prototype.hit = function (enemy) {
        if (this.mp > 0) {
            if (this.hp > 0) {
                enemy.hp -= this.weapon.damage;
                _super.prototype.hit.call(this, enemy);
            }
        }
        this.mp -= 5;
    };
    return Mage;
}(baseChar));
exports.Mage = Mage;
var Warrior = (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 100 + (_this.lvl * 2);
        _this.mp = 12 + (_this.lvl * 2);
        return _this;
    }
    Warrior.prototype.setWeapon = function (weapon) {
        if (!(weapon instanceof weapons.Axe)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon;
    };
    Warrior.prototype.setArmor = function (armor) {
        if (!(armor instanceof armors.heavyArmor)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    };
    Warrior.prototype.setBuff = function (buff) {
        this.buff = buff;
        if (buff.damage > 0) {
            this.buff.damage += this.weapon.damage;
        }
    };
    Warrior.prototype.hit = function (enemy) {
        if (this.hp > 0) {
            enemy.hp -= this.weapon.damage;
            _super.prototype.hit.call(this, enemy);
        }
    };
    return Warrior;
}(baseChar));
exports.Warrior = Warrior;
var Archer = (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 70 + (_this.lvl * 2);
        _this.mp = 20 + (_this.lvl * 2);
        return _this;
    }
    Archer.prototype.setWeapon = function (weapon) {
        if (!(weapon instanceof weapons.Bow)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon;
    };
    Archer.prototype.setArmor = function (armor) {
        if (!(armor instanceof armors.lightArmor)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    };
    Archer.prototype.setBuff = function (buff) {
        this.buff = buff;
        if (buff.damage > 0) {
            this.buff.damage += this.weapon.damage;
        }
    };
    Archer.prototype.hit = function (enemy) {
        if (this.mp > 0) {
            if (this.hp > 0) {
                enemy.hp -= this.weapon.damage;
                _super.prototype.hit.call(this, enemy);
            }
        }
        this.mp -= 3;
    };
    return Archer;
}(baseChar));
exports.Archer = Archer;
var Priest = (function (_super) {
    __extends(Priest, _super);
    function Priest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 78 + (_this.lvl * 2);
        _this.mp = 50 + (_this.lvl * 2);
        return _this;
    }
    Priest.prototype.setWeapon = function (weapon) {
        if (!(weapon instanceof weapons.priestSoul)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon;
    };
    Priest.prototype.setArmor = function (armor) {
        if (!(armor instanceof armors.Robe)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    };
    Priest.prototype.setBuff = function (buff) {
        this.buff = buff;
        if (buff.damage > 0) {
            this.buff.damage += this.weapon.damage;
        }
    };
    Priest.prototype.hit = function (enemy) {
        if (this.mp > 0) {
            if (this.hp > 0 || this.mp > 0) {
                enemy.hp -= this.weapon.damage;
                _super.prototype.hit.call(this, enemy);
            }
        }
        this.mp -= 5;
        this.hp += this.lvl;
        console.log(this.name + " \u043E\u0442\u0445\u0438\u043B\u0438\u043B " + this.lvl + " \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F.");
    };
    return Priest;
}(baseChar));
exports.Priest = Priest;
