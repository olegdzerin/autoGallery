var init = () => {
    var addImage = document.getElementById('add'),
        result = document.querySelector("#result"),
        selectSortingElement = document.getElementById("type-selector"),
        countCarElement = document.getElementById("countCar-element"),
        countAddingElement = document.getElementById("count"),
        //змінні які будуть змінюватися в процесі виконання  
        volueResult = "0",
        newData1 = [...data],
        countCar = 0;
    var removeImage = (event) => {
        var elementTarget = event.target;
        var elementCurrentTarget = event.currentTarget;
        var element = event.target.parentElement.parentElement.parentElement;
        var img = element.getElementsByTagName("img");
        var name = img[0]["alt"];
        newData = newData.filter((item, index) => {
            if (!(item.name === name)) {
                return true;
            } else {
                return false;
            }
        });
        countCar = countCar - 1;
        init();
    };
    var initDelate = () => {
        result.addEventListener('click', removeImage);
    };
    var selectSort = (e) => {
        volueResult = e.target.value;
        init();
    };
    var initAdd = () => {
        countCar = countCar + 1;
        
        init();
    };
    var init = () => {
        newData1 = [...newData];
        var obj = resTempMethods().imgsForTemplate(newData1, countCar);
        sortImgBlock.sortImg(obj.newData1, volueResult);
        result.innerHTML = resTempMethods().methodTemplateResult(obj.newData1);
        initDelate();
        countCarElement.value = countCar;
        countAddingElement.innerHTML = countCar;
    }
    addImage.addEventListener("click", initAdd);
    selectSortingElement.addEventListener('click', selectSort)
}