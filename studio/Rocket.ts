//Cargo class
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
import {Payload} from './Payload';
export class Rocket{
    //properties and methods
    name: string;
    totalCapacityKg :number;
    //CargoItems should be an array of cargo objects.
    cargoItems :Cargo[]=[];
    //CargoItems should be an array of cargo objects.
    astronauts :Astronaut[]=[];
    //constructor:
    constructor(name: string,totalCapacityKg : number){
        this.name =name;
        this.totalCapacityKg = totalCapacityKg;
        
    }
    //methods
    //sumMass
    sumMass( items: Payload[] ): number{
    //return the sum of all items using each items massKg property
    //declare accumlator
    let sum: number=0;
    for (let index = 0; index < items.length; index++) {
        sum+= items[index].massKg;
        
      }
      return sum;
    }
    currentMassKg(): number{
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    }
    canAdd(item: Payload): boolean{
        return (this.currentMassKg()+item.massKg)<=this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean{
        //Uses this.canAdd() to see if another item can be added.
        if(this.canAdd(cargo)){
        //If true, adds cargo to this.cargoItems and returns true.
        this.cargoItems.push(cargo);
        return true;
        }
        //If false, returns false.
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean{
        // Uses this.canAdd() to see if another astronaut can be added.
        if(this.canAdd(astronaut)){
        // If true, adds astronaut to this.astronauts and returns true.
         this.astronauts.push(astronaut);
         return true;
        // If false, returns false
        return false;
        }
    }

}