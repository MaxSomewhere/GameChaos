import {phisicalWeapon, magicWeapon, baseWeapon} from "./weapons"

abstract class baseChar {
    hp: number;
    mp: number;          
    weapon: baseWeapon

    constructor (public name: string, public lvl: number){
    }

    setWeapon(weapon: baseWeapon) {
        this.weapon = weapon
    }

    hit(enemy: baseChar) {
        console.log(`${this.name} атаковал ${enemy.name}. Нанесено ${this.weapon.damage} урона. У ${enemy.name} осталось ${enemy.hp} здоровья.`)
    }

}

class Mage extends baseChar {
    hp: number = 50;
    mp: number = 100;
    weapon: magicWeapon;

    setWeapon(weapon: magicWeapon) {
        this.weapon = weapon
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
    mp: number = 50;
    weapon: phisicalWeapon;

    setWeapon(weapon: phisicalWeapon) {
        this.weapon = weapon
    }

    hit(enemy: baseChar) {

            enemy.hp -= this.weapon.damage;
            super.hit(enemy);

    }
}

export {baseChar, Mage, Warrior}