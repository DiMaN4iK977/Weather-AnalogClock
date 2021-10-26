let month = document.querySelector('.date__month');
let day = document.querySelector('.date_day');
let date = document.querySelector('.date__date');

let d = new Date();

date.innerHTML = d.getDate();

let days = d.getDay();
switch (days) {
    case 1: day.innerHTML = 'Mon';
        break;
    case 2: day.innerHTML = 'Tue';
        break;
    case 3: day.innerHTML = 'Wed';
        break;
    case 4: day.innerHTML = 'Thu';
        break;
    case 5: day.innerHTML = 'Fri';
        break;
    case 6: day.innerHTML = 'Sat';
        break;
    case 0: day.innerHTML = 'Sun';
}

let months = d.getMonth();
switch (months) {
    case 0: month.innerHTML = 'Jan';
        break;
    case 1: month.innerHTML = 'Feb';
        break;
    case 2: month.innerHTML = 'Mar';
        break;
    case 3: month.innerHTML = 'Apr';
        break;
    case 4: month.innerHTML = 'May';
        break;
    case 5: month.innerHTML = 'Jun';
        break;
    case 6: month.innerHTML = 'Jul';
        break;
    case 7: month.innerHTML = 'Aug';
        break;
    case 8: month.innerHTML = 'Sep';
        break;
    case 9: month.innerHTML = 'Oct';
        break;
    case 10: month.innerHTML = 'Nov';
        break;
    case 11: month.innerHTML = 'Dec';
}