export class DomElements {
    constructor(){
        this.addImage = document.getElementById('add');
        this.selectSortingElement = document.getElementById("type-selector");
       // this.countCarElement = document.getElementById("countCar-element");
        this.countAddingElement = document.getElementById("count");
     this.result = document.querySelector("#result");
     
    }
}
export const domElements = new DomElements();
console.log(domElements);

//const domElement = new DomElements(volueResult, data, 0);
// export const a = function(){
//     console.log('a');
// }
export class InputData {
    constructor(volueResult, data, countCar){
        this.volueResult = volueResult;
        this.newData1 = [...data],
        this.countCar = countCar
    }
}
export const a = 3
