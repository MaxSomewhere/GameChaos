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
    lvl:number = 6;
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

export {baseWeapon, phisicalWeapon, magicWeapon, magicStuff, priestStuff, Axe, Bow};