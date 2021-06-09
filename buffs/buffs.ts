import * as weapon from '../classes/weapons'
import * as char from '../classes/chars'
import * as armor from '../classes/armors'

interface baseBuff {
hp?: number;
mp?: number;
damage?: number;


}

class berserk implements baseBuff {

}


export {baseBuff, berserk}