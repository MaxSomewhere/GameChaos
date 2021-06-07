interface baseArmor {
    name:string;
    lvl:number;
    hp: number;
    mp: number;
}

interface phisicalArmor extends baseArmor {
}

interface magicArmor extends baseArmor {
}

class heavyArmor implements phisicalArmor {
    name: string = 'noob heavy armor'
    lvl: number = 1;
    hp: number = 90;
    mp: number = 10;
}

class Robe implements magicArmor {
    name:string = 'noob robe';
    lvl:number = 1;
    hp: number = 50;
    mp: number = 40;
}

class lightArmor implements phisicalArmor {
    name:string = 'noob light armor';
    lvl:number = 1;
    hp: number = 60;
    mp: number = 25;
}

export {baseArmor, phisicalArmor, magicArmor, heavyArmor, Robe, lightArmor}