import {domElements} from './main1.js';

export class Init {
    // count = this.countData23;
    constructor(data, countCar, newData) {
        this.countCar = countCar;
        this.data = data;
        this.countAddingElement = 0;
        this.newData = newData

    }
    imgsForTemplate() {
// console.log(count.innerHTML);
// this.countCar = this.countCar + 1;
        if (this.countCar === this.newData.length + 1) {
            // console.log(this.data);
            // console.log(this.data.length);
            // console.log(this.countCar)
            alert('больше нет елементов');
            this.countCar = this.countCar - 1;
            // return this.imgsForTemplateSubFn.apply(this);
        } else {
           // console.log(this.data);
            // console.log(`this ${this.data}`);
            return this.imgsForTemplateSubFn.apply(this);
           
        }
    };
    imgsForTemplateSubFn() {

        
           if(this.data){
            var dataCurrent = [...this.data]
            dataCurrent.splice(this.countCar);
            // this.sortImgs(dataCurrent, this.valueResult)
            return dataCurrent;
           }else{
               return undefined
           }
       
     
    }
    resultTemplate() {
        var resultHTML = "";

       // this.countAddingElement = this.imgsForTemplate().length
        // domElements.countAddingElement.innerHTML = this.imgsForTemplate().length
        // domElements.countAddingElement.innerHTML = 4
        const that = this;
      if(this.imgsForTemplateSubFn()){
        this.imgsForTemplateSubFn().forEach(function (item, array) {
            resultHTML = resultHTML + that.resultTemplateSbFn(item, array);
        })
        return resultHTML;
      }
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

}