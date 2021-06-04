"use strict";
exports.__esModule = true;
var chars = require("./classes/chars");
var weapon = require("./classes/weapons");
var fight_1 = require("./classes/fight");
var mage1 = new chars.Mage('Wave', 5);
mage1.setWeapon(new weapon.magicStuff());
var warrior1 = new chars.Warrior('Pain', 5);
warrior1.setWeapon(new weapon.Axe());
var archer1 = new chars.Archer('Hurrican', 5);
archer1.setWeapon(new weapon.Bow());
var fight = new fight_1.Fight(mage1, archer1);
fight.start(); // 123
