abstract class baseWeapon {
    name:string;
    lvl:number;
    damage: number;
}

abstract class phisicalWeapon extends baseWeapon {
}

abstract class magicWeapon extends baseWeapon {
}

class Axe extends phisicalWeapon {
    name: string = 'noob axe'
    lvl: number = 1;
    damage: number = 15;
}

class magicStuff extends magicWeapon {
    name:string = 'noob stuff';
    lvl:number = 1;
    damage: number = 10;
}

export {baseWeapon, phisicalWeapon, magicWeapon, magicStuff, Axe};