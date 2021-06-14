import * as weapon from '../classes/weapons'
import * as char from '../classes/chars'
import * as armor from '../classes/armors'

abstract class baseBuff {
   
  
hp?: number;
mp?: number;
damage?: number;
charHP: char.baseChar

setCharHP (charHP: char.baseChar){
    this.charHP = charHP
}

}



class berserk extends baseBuff {
    damage = this.charHP.weapon.damage;
    setCharHP (charHP: char.baseChar) {
        this.charHP = charHP
        if ( charHP.hp < charHP.hp /2 ) {
            this.damage += this.damage;
        }
        
    }
}

// activateBuff ()

// }

// class berserk implements baseBuff {
//     damage: number;
//     charHP: char.baseChar

//     activateBuff (){
//         if (this.)
//     }



export {baseBuff, berserk}