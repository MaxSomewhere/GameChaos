abstract class baseArmor {
    name:string;
    lvl:number;
    hp: number;
    mp: number;
}

abstract class phisicalArmor extends baseArmor {
}

abstract class magicArmor extends baseArmor {
}

class heavyArmor extends phisicalArmor {
    name: string = 'noob heavy armor'
    lvl: number = 1;
    hp: number = 90;
    mp: number = 10;
}

class Robe extends magicArmor {
    name:string = 'noob robe';
    lvl:number = 1;
    hp: number = 50;
    mp: number = 40;
}

class lightArmor extends phisicalArmor {
    name:string = 'noob light armor';
    lvl:number = 1;
    hp: number = 60;
    mp: number = 25;
}

export {baseArmor, heavyArmor, Robe, lightArmor}