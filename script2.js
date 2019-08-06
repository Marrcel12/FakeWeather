function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
temp = getQueryVariable('temp')
loc = getQueryVariable('loc')
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd = String(weekday[today.getDay()])
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.getElementsByClassName('date')[0].innerHTML = today
document.getElementsByClassName('city')[0].innerText = loc
document.getElementsByClassName('temp')[0].innerText = temp
tabOfTempMax = document.getElementsByClassName('max');
tabOfTempMin = document.getElementsByClassName('min');
console.log(tabOfTempMax)
for (var item of tabOfTempMax) {
    item.innerText += String(parseInt(temp) +Math.round(Math.random()) * 8 - 6) 
};
for (let i = 0; i < tabOfTempMin.length; i++) {
    tabOfTempMin[i].innerText += String(parseInt(tabOfTempMax[i].innerText) - Math.round(Math.random()) * 3);

}
for (var item of tabOfTempMax) {
    item.innerHTML+= '&#176;'
}
for (var item of tabOfTempMin) {
    item.innerHTML+= '&#176;'
}