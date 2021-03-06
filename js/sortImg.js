var sortImgBlock = (function () {
    function compare1234(a, b) {
        if (a.dateNoFormatted < b.dateNoFormatted) return -1;
        if (a.dateNoFormatted > b.dateNoFormatted) return 1;
        if (a === b) return 0;
    }

    function compare4321(a, b) {
        if (a.dateNoFormatted < b.dateNoFormatted) return 1;
        if (a.dateNoFormatted > b.dateNoFormatted) return -1;
        if (a === b) return 0;
    }

    function compareABCD(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        if (a === b) return 0;
    }

    function compareDCBA(a, b) {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        if (a === b) return 0;
    }

    var sortUp = (data, typeSorting) => {
        if (typeSorting === true) data.sort(compareABCD);
        if (typeSorting === false) data.sort(compare1234);
    }
    var sortDown = (data, typeSorting) => {
        if (typeSorting === true) data.sort(compareDCBA);
        if (typeSorting === false) data.sort(compare4321);
    }
    var sortImg = (arr, volueResult) => {
        if (volueResult === "0" || volueResult === "1") {
            return sortUp(arr, true)
            // return data.sort(compareABCD);
        } else {
            if (volueResult === "2") {
                return sortDown(arr, true);
            } else {
                if (volueResult === "3") {
                    return sortUp(arr, false);

                } else {
                    if (volueResult === "4") {
                        return sortDown(arr, false);
                    }
                }
            }
        }
    }
    return {
        sortImg: sortImg
    }
})();