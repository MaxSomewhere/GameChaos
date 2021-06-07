import * as weapons from "./weapons"
import * as armors from "./armors"


abstract class baseChar {
    hp: number;
    mp: number;          
    weapon: weapons.baseWeapon
    armor: armors.baseArmor

    constructor (public name: string, public lvl: number){
    }

    setWeapon(weapon: weapons.baseWeapon) {
        this.weapon = weapon
    }

    setArmor(armor: armors.baseArmor) {
        this.armor = armor
    }

    hit(enemy: baseChar) {
        console.log(`${this.name} атаковал ${enemy.name}. Нанесено ${this.weapon.damage} урона. У ${enemy.name} осталось ${enemy.hp} здоровья.`)
    }

}




class Mage extends baseChar {
    hp: number = 61 + (this.lvl * 2);
    mp: number = 50 + (this.lvl * 2);
    weapon: weapons.magicWeapon;
    armor: armors.magicArmor
    

    setWeapon(weapon: weapons.magicWeapon) {
        if (!(weapon instanceof weapons.magicStuff)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon
    }

    setArmor(armor: armors.magicArmor) {
        if (!(armor instanceof armors.Robe)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    }


    hit(enemy: baseChar) {
        this.mp -= 5;
        if (this.hp > 0) {
            enemy.hp -= this.weapon.damage;
            super.hit(enemy);
        }
        
    }

}




class Warrior extends baseChar {
    hp: number = 100 + (this.lvl * 2);
    mp: number = 12 + (this.lvl * 2);
    weapon: weapons.phisicalWeapon;
    armor: armors.phisicalArmor;

    setWeapon(weapon: weapons.phisicalWeapon) {
        if (!(weapon instanceof weapons.Axe)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon
    }

    setArmor(armor: armors.phisicalArmor) {
        if (!(armor instanceof armors.heavyArmor)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    }

    hit(enemy: baseChar) {

            enemy.hp -= this.weapon.damage;
            super.hit(enemy);

    }
}




class Archer extends baseChar {
    hp: number = 70 + (this.lvl * 2);
    mp: number = 20 + (this.lvl * 2);
    weapon: weapons.phisicalWeapon;
    armor: armors.phisicalArmor;

    setWeapon(weapon: weapons.phisicalWeapon) {
        if (!(weapon instanceof weapons.Bow)) {
            throw new Error('This weapon does not belong to your class');
        }
        if (this.lvl < weapon.lvl) {
            throw new Error('Your level is too low for this weapon');
        }
        this.weapon = weapon
    }

    setArmor(armor: armors.phisicalArmor) {
        if (!(armor instanceof armors.lightArmor)) {
            throw new Error('This armor does not belong to your class');
        }
        if (this.lvl < armor.lvl) {
            throw new Error('Your level is too low for this armor');
        }
        this.armor = armor;
        this.hp += this.armor.hp;
    }

    hit(enemy: baseChar) {
        this.mp -= 3;
        if (this.hp > 0) {
            enemy.hp -= this.weapon.damage;
            super.hit(enemy);
        }

    }
}

export {baseChar, Mage, Warrior, Archer}