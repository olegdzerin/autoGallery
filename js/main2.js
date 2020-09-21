import {domElements} from './main1.js';
// import {InputData} from './main1';
import {newData1} from './transformData.js';
// import {sortImgBlock} from './sortImg.js'
import {Init} from './initClass.js';
var newData = newData1;
var countCar = 0;
var valueResult = "0";
var dataCurrent = [];


var initAdd = () => {
    countCar = countCar + 1;
   
    var init = new Init(newData, countCar, newData);
  //  console.log(init.data);
    dataCurrent = init.imgsForTemplate();
    sortImgBlock.sortImg(dataCurrent, domElements.selectSortingElement.value);
    console.log(dataCurrent);
    // setTimeout(() => {
    //     var init1 = new Init(dataCurrent, countCar);
    //  domElements.result.innerHTML = init1.resultTemplate()
    // domElements.countAddingElement.innerHTML = init.countCar;
    // }, 3000)
    var init1 = new Init(dataCurrent, countCar, newData);
    if(init1.resultTemplate()){
        domElements.result.innerHTML = init1.resultTemplate();
        domElements.countAddingElement.innerHTML = init1.imgsForTemplateSubFn().length;
      }
    
};
var initAfterSelection = () => {
  
     sortImgBlock.sortImg(dataCurrent, domElements.selectSortingElement.value);
    var init1 = new Init(dataCurrent, countCar, newData);
    if(init1.resultTemplate()){
        domElements.result.innerHTML = init1.resultTemplate();
      }
    // domElements.countAddingElement.innerHTML = init1.countAddingElement;
    domElements.countAddingElement.innerHTML = count.innerHTML;

}
var initDelay = (event) => {

    if (event.target.tagName === "BUTTON") {
        var element = event.target.parentElement.parentElement.parentElement;
        var img = element.getElementsByTagName("img");
        var name = img[0]["alt"];
       
        var dataRemate = newData.filter((item, index) => {
            if (!(item.name === name)) {
                return true;
            } else {
                return false;
            }
        });
        newData = [...dataRemate];
     //   console.log(newData);
        countCar = countCar - 1;
        var init1 = new Init(newData, countCar);
    //   if(init1.resultTemplate()){
    //     domElements.result.innerHTML = init1.resultTemplate();
    //   }
      domElements.result.innerHTML = init1.resultTemplate();
        domElements.countAddingElement.innerHTML = count.innerHTML - 1

    }
}







domElements.addImage.addEventListener("click", initAdd);
domElements.selectSortingElement.addEventListener('click', initAfterSelection)
domElements.result.addEventListener('click', initDelay)











// class Sorting extends Init {
//     constructor(data, countCar, selectSorting) {
//         super(data, countCar);
//         this.selectSorting = selectSorting;
//         this.typeSorting = true;
//         this.sortImgs = function(arr) {
//             if (this.selectSorting === "0" || this.selectSorting === "1") {
//                 this.sortUp(arr, true);
//         };
//         this.sortUp = function(data, typeSorting){
//             if (typeSorting === true) data.sort(compareABCD);
//             if (typeSorting === false) data.sort(compare1234);
//             }
//             this.compareABCD = function(a, b) {
//                 if (a.name < b.name) return -1;
//                 if (a.name > b.name) return 1;
//                 if (a === b) return 0;
//             }
//     }
//         sortUp(typeSorting) {
//             if (typeSorting === true) this.data.sort(this.compareABCD);
//             if (typeSorting === false) this.data.sort(this.compare1234);
//         }
//         compare1234(a, b) {
//             if (a.dateNoFormatted < b.dateNoFormatted) return -1;
//             if (a.dateNoFormatted > b.dateNoFormatted) return 1;
//             if (a === b) return 0;
//         }
//         compareABCD(a, b) {
//             if (a.name < b.name) return -1;
//             if (a.name > b.name) return 1;
//             if (a === b) return 0;
//         }