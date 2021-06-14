"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
var Fight = (function () {
    function Fight(fighter1, fighter2) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
    }
    Fight.prototype.start = function () {
        var round = 1;
        do {
            console.log("\u0420\u0430\u0443\u043D\u0434 #" + round);
            round++;
            this.fighter1.hit(this.fighter2);
            this.fighter2.hit(this.fighter1);
        } while (this.fighter1.hp > 0 && this.fighter2.hp > 0);
        var winner = this.fighter1.hp > 0 ? this.fighter1 : this.fighter2;
        console.log("\u041F\u043E\u0431\u0435\u0434\u0438\u043B " + winner.name + "!");
    };
    return Fight;
}());
exports.Fight = Fight;
