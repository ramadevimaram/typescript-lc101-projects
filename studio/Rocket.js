"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    //constructor:
    function Rocket(name, totalCapacityKg) {
        //CargoItems should be an array of cargo objects.
        this.cargoItems = [];
        //CargoItems should be an array of cargo objects.
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //methods
    //sumMass
    Rocket.prototype.sumMass = function (items) {
        //return the sum of all items using each items massKg property
        //declare accumlator
        var sum = 0;
        for (var index = 0; index < items.length; index++) {
            sum += items[index].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        //Uses this.canAdd() to see if another item can be added.
        if (this.canAdd(cargo)) {
            //If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        //If false, returns false.
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another astronaut can be added.
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
            // If false, returns false
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
