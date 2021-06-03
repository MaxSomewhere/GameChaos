"use strict";
exports.__esModule = true;
var chars_1 = require("./classes/chars");
var weapons_1 = require("./classes/weapons");
var fight_1 = require("./classes/fight");
var mage1 = new chars_1.Mage('Вася', 5);
mage1.setWeapon(new weapons_1.magicStuff());
var warrior1 = new chars_1.Warrior('Жорик', 5);
warrior1.setWeapon(new weapons_1.Axe());
var mage2 = new chars_1.Mage('Бодя', 5);
mage2.setWeapon(new weapons_1.Axe());
var fight = new fight_1.Fight(mage1, warrior1);
fight.start(); // 123
