interface baseWeapon {
    name:string;
    lvl:number;
    damage: number;
}

interface phisicalWeapon extends baseWeapon {
}

interface magicWeapon extends baseWeapon {
}

class magicStuff implements magicWeapon {
    name:string = 'noob stuff';
    lvl:number = 1;
    damage: number = 17;
}

class priestStuff implements magicWeapon {
    name:string = 'noob stuff';
    lvl:number = 1;
    damage: number = 10;
}

class Axe implements phisicalWeapon {
    name: string = 'noob axe'
    lvl: number = 1;
    damage: number = 11;
}


class Bow implements phisicalWeapon {
    name:string = 'noob bow';
    lvl:number = 1;
    damage: number = 15;
}

class arcaneStuff implements magicWeapon {
    name:string = 'arcane stuff';
    lvl:number = 10;
    damage: number = 38;
}

class priestSoul implements magicWeapon {
    name:string = 'priest soul';
    lvl:number = 10;
    damage: number = 22;
}

export {baseWeapon, phisicalWeapon, magicWeapon, magicStuff, priestStuff, Axe, Bow, arcaneStuff, priestSoul};