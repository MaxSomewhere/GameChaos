import * as chars from './classes/chars';
import * as weapon  from './classes/weapons';
import * as armors from './classes/armors'
import { Fight } from './classes/fight';

let mage1 = new chars.Mage('Wave', 5);
mage1.setWeapon(new weapon.magicStuff());
mage1.setArmor(new armors.Robe())



let warrior1 = new chars.Warrior('Pain', 5);
warrior1.setWeapon(new weapon.Axe());

let archer1 = new chars.Archer('Hurrican', 5);
archer1.setWeapon(new weapon.Bow());


let fight = new Fight(mage1, archer1);
fight.start(); // 123