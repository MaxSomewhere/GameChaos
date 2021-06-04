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
    hp: number = 60;
    mp: number = 50;
    weapon: weapons.magicWeapon;

    setWeapon(weapon: weapons.magicWeapon) {
        this.weapon = weapon
    }

    setArmor(armor: armors.Robe) {
        this.armor = armor
    }

    hit(enemy: baseChar) {
        this.mp -= 5;
        if (this.mp > 0) {
            enemy.hp -= this.weapon.damage;
            super.hit(enemy);
        }
    }

}


class Warrior extends baseChar {
    hp: number = 100;
    mp: number = 12;
    weapon: weapons.phisicalWeapon;

    setWeapon(weapon: weapons.phisicalWeapon) {
        this.weapon = weapon
    }

    setArmor(armor: armors.heavyArmor) {
        this.armor = armor
    }

    hit(enemy: baseChar) {

            enemy.hp -= this.weapon.damage;
            super.hit(enemy);

    }
}

class Archer extends baseChar {
    hp: number = 70;
    mp: number = 20;
    weapon: weapons.phisicalWeapon;

    setWeapon(weapon: weapons.phisicalWeapon) {
        this.weapon = weapon
    }

    setArmor(armor: armors.lightArmor) {
        this.armor = armor
    }

    hit(enemy: baseChar) {
        this.mp -= 3;
        if (this.mp > 0) {
            enemy.hp -= this.weapon.damage;
            super.hit(enemy);
        }

    }
}

export {baseChar, Mage, Warrior, Archer}