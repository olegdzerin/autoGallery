import {
    domElements
} from './main1.js';
// import {InputData} from './main1';
import {
    data2
} from './transformData.js';
import {sortImgBlock} from './sortImg.js'
var countCar = 0;
var valueResult = 0;

var initAdd = () => {
    countCar = countCar + 1;
    //var sorting = new Sorting(data2, countCar, domElements.selectSortingElement.value);
    var data9 =  sortImgBlock().sortImg(data2,valueResult);
    console.log(data9)
  
  
     var init = new Init(data2, countCar);
   
    domElements.result.innerHTML = init.resultTemplate()
    domElements.countAddingElement.innerHTML = init.countAddingElement;
};



class Init {
    constructor(data, countCar) {
        this.countCar = countCar;
        this.data = data;
        this.countAddingElement = 0;

    }
    imgsForTemplate() {

        if (this.countCar > 10) {
            alert('больше нет елементов');
            this.countCar = this.countCar - 1;
            this.imgsForTemplateSubFn.apply(this);
        } else {
            // console.log(`this ${this.data}`);
            return this.imgsForTemplateSubFn.apply(this);
        }
    };
    imgsForTemplateSubFn() {

        var num = this.countCar
        var dataCurrent = [...this.data]
        dataCurrent.splice(this.countCar);
        // this.sortImgs(dataCurrent, this.valueResult)
        return dataCurrent;
    }
    resultTemplate() {
        var resultHTML = "";
        // console.log(this.imgsForTemplate());
        this.countAddingElement = this.imgsForTemplate().length
        const that = this;
        this.imgsForTemplate().forEach(function (item, array) {
            resultHTML = resultHTML + that.resultTemplateSbFn(item, array);
        })
        return resultHTML;
    }
    resultTemplateSbFn(item, array) {
        return `<div class="col-md-3  col-sm-4 col-xl-2"> \
        <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
        <div class="info-wrapper">\ 
         <div class="text-muted"> ${item.name}</div>\
        <div class="text-muted top-padding">${item.description}</div>\
        <div class="text-muted">${item.date}</div>\
        <div class="col-lg-12 col-md-12 text-center ">\
        <button class="btn btn-default delate" id="btn-delate" data-toggle="tooltip" data-placement="left" title="Удалить">Удалить</button>\
        </div>\
        </div>\
        </div>`;
    }
    exp() {
        console.log(this.selectSorting)
    }


    
    

}

domElements.addImage.addEventListener("click", initAdd);
// domElements.selectSortingElement.addEventListener('click', selectSort)












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