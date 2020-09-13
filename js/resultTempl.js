 var resTempMethods = function () {
     var methodTemplateResult = (array) => {
         var resultHTML = "";
         array.forEach(function (item) {
             resultHTML = resultHTML + methodTemplate(item, array);
         });
         return resultHTML;
     };
     var methodTemplate = (item, array) => {
         return secondItemTemplate = `<div class="col-md-3  col-sm-4 col-xl-2"> \
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
        array.splice(count);
        return {
            newData1: array,
            countCar: count
        }
     };
     var imgsForTemplate = (array, count) => {
         if (count > array.length) {
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