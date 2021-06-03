import {Mage, Warrior}  from './classes/chars';
import {magicStuff, Axe}  from './classes/weapons';
import { Fight } from './classes/fight';

let mage1 = new Mage('Вася', 5);
mage1.setWeapon(new magicStuff());


let warrior1 = new Warrior('Жорик', 5);
warrior1.setWeapon(new Axe());


let fight = new Fight(mage1, warrior1);
fight.start(); // 123