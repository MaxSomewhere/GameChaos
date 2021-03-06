import * as chars from './classes/chars';
import * as weapon  from './classes/weapons';
import * as armors from './classes/armors'
import { Fight } from './classes/fight';
import * as buffs from './buffs/buffs'

let mage1 = new chars.Mage('MagicWave', 7);
mage1.setWeapon(new weapon.magicStuff());
mage1.setArmor(new armors.Robe());


let warrior1 = new chars.Warrior('DarkKnight', 5);
warrior1.setWeapon(new weapon.Axe());
warrior1.setArmor(new armors.heavyArmor());

let archer1 = new chars.Archer('ArrowHurrican', 5);
archer1.setWeapon(new weapon.Bow());
archer1.setArmor(new armors.lightArmor());
archer1.setBuff(new buffs.berserk());

let priest1 = new chars.Priest('Saint', 11);
priest1.setWeapon(new weapon.priestSoul());
priest1.setArmor(new armors.Robe());


let fight = new Fight(warrior1, archer1);
//let fight = new Fight(mage1, priest1);
fight.start();