 import {domElements} from './main1.js';
 console.log(domElements);
// import {inputData} from './main1.js';
 
//  const secondItemTemplate = domElements.
  export const resultTempMethods = function () {
     var methodTemplateResult = (array) => {
         var resultHTML = "";
         array.forEach(function (item) {
             resultHTML = resultHTML + methodTemplate(item, array);
         });
         return resultHTML;
     };
     var methodTemplate = (item, array) => {
         return   `<div class="col-md-3  col-sm-4 col-xl-2"> \
            <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
            <div class="info-wrapper">\ 
            <div class="text-muted">${array.indexOf(item) + 1} ${item.name}</div>\
            <div class="text-muted top-padding">${item.description}</div>\
            <div class="text-muted">${item.date}</div>\
            <div class="col-lg-12 col-md-12 text-center ">\
            <button class="btn btn-default delate" id="btn-delate" data-toggle="tooltip" data-placement="left" title="Удалить">Удалить</button>\
            </div>\
            </div>\
            </div>`;
     };
     var imgsForTemplateSubFn = (array, count) => {
const array1 = [...array]
        array1.splice(1);
        return {
            spliceData: array1,
            countCar: count
        }
     };
     var imgsForTemplate = (array, count) => {
         if (count > 10) {
            alert('больше нет елементов');
            count = count - 1;
          return  imgsForTemplateSubFn(array, count);
         } else {
           return imgsForTemplateSubFn(array, count);
         }
     }
     return {
         methodTemplateResult: methodTemplateResult,
         imgsForTemplate: imgsForTemplate
     }
 }