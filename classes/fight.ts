import * as chars from './chars';

class Fight {
    constructor(public fighter1: chars.baseChar, public fighter2: chars.baseChar) {

    }
        start() {
            let round = 1;
            do {
                console.log(`Раунд #${round}`);
                round++;
                this.fighter1.hit(this.fighter2);
                this.fighter2.hit(this.fighter1);
            } while (this.fighter1.hp > 0 && this.fighter2.hp > 0)

            let winner = this.fighter1.hp > 0 ? this.fighter1 : this.fighter2;
            console.log(`Победил ${winner.name}!`);
        }
}



// class massFight {
//     constructor (public )

// }

export {Fight};


