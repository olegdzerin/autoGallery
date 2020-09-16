import {data2} from './transformData.js';
import {resultTempMethods} from './resultTempl.js';
import {sortImgBlock} from './sortImg.js';
// import {delate} from './delate.js'
// (function () {
    var data = [...data2];
    var dataAfterDelay =[...data2]
    var addImage = document.getElementById('add'),
        result = document.querySelector("#result"),
        selectSortingElement = document.getElementById("type-selector"),
        countCarElement = document.getElementById("countCar-element"),
        countAddingElement = document.getElementById("count"),
        //змінні які будуть змінюватися в процесі виконання  
        volueResult = "0",
     //   newData1 = [...data],
        countCar = 0;
    var countCarBuildInDom = () => {
        countCarElement.value = countCar;
    };
    var removeImageSbFn = (name) => {
       return dataAfterDelay.filter((item, index) => {
            if (!(item.name === name)) {
                return true;
            } else {
                return false;
            }
            
        });
    }
  
    var removeImage = (event) => {
         if(event.target.tagName === "BUTTON"){
            var element = event.target.parentElement.parentElement.parentElement;
            var img = element.getElementsByTagName("img");
            var name = img[0]["alt"];
          //  const data5 = [...data];
          dataAfterDelay = removeImageSbFn(name)
            countCar = countCar - 1;
       
            init(dataAfterDelay, countCar, volueResult);
           
        }
     
    };
    var initDelate = () => {
        result.addEventListener('click', removeImage);
        
    };
    var selectSort = (e) => {
        volueResult = e.target.value;
        init(dataAfterDelay,countCar, volueResult);
    };
    var initAdd = () => {
        countCar = countCar + 1;
  
        init(dataAfterDelay,countCar,volueResult);
    };
    var init = (list, num, select) => {
       const obj = resultTempMethods().imgsForTemplate(list , num);
       const sortData = sortImgBlock.sortImg(obj.spliceData, select);
      // countCar = obj.countCar
       countCarElement.value = obj.countCar;
        result.innerHTML = resultTempMethods().methodTemplateResult(sortData);
        initDelate();
    }
    addImage.addEventListener("click", initAdd);
    selectSortingElement.addEventListener('click', selectSort)
// })()