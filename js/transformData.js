var transformUrl = str => (str.indexOf('http://') !== 0) ? ` http://${str}` : `${str}`;
var transformName = name => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
var transformDescrition = str => (str.length > 15) ? `${str.substring(0,15)}...` : str;
var getFormattedDate = date => {
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
        (tmpDate.getMonth() + 1) + "/" +
        tmpDate.getDate() + " " +
        tmpDate.getHours() + ":" +
        tmpDate.getMinutes();
}
var transformData = obj => obj = {
    url: transformUrl(obj.url),
    name: transformName(obj.name),
    description: transformDescrition(obj.description),
    dateNoFormatted: obj.date,
    date: getFormattedDate(obj.date)
};

var transformAllData = list => {
    for (let i = 0; i < list.length; i++) {
        list[i] = transformData(list[i]);
    };
    return list;
};
var newData = [...data];
transformAllData(newData);