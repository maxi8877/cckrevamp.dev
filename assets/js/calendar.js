function calendar(month,year,links) {

    var padding = "";
    var totalFeb = "";
    var i = 1;
    var testing = "";
    var current = new Date();
    var cmonth = current.getMonth();
    var day = current.getDate();
    if(!year){
      var year = current.getFullYear();

    }
    var tempMonth = month + 1;
    var prevMonth = month - 1;

    if (month == 1) {
        if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
            totalFeb = 29;
        } else {
            totalFeb = 28;
        }
    }
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dayNames = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    var totalDays = ["31", "" + totalFeb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

    var tempDate = new Date(tempMonth + 1 , + year);
    var tempweekday = tempDate.getDay();
    var tempweekday2 = tempweekday;
    var dayAmount = totalDays[month];

    while (tempweekday > 0) {
        padding += "<td class='premonth'></td>";
        //preAmount++;
        tempweekday--;
    }
    while (i <= dayAmount) {

        if (tempweekday2 > 6) {
            tempweekday2 = 0;
            padding += "</tr><tr>";
        }

        if (i == day && month == cmonth) {
            padding += "<td class='currentday'>" + i + "</td>";
        } else {
            padding += "<td class='currentmonth'>" + i + "</td>";
        }
        tempweekday2++;
        i++;
    }
      var calendarTable='';
    if(links){
      calendarTable = "<div class='calendar-header'>  <a  href='#' data-currentmonth='"+month+"'><i class='fa fa-arrow-left'></i></a><span class='calendar-header-month'> "+ monthNames[month] + "</span> <span class='calendar-header-year'>" + year + "</span><a href='#' data-currentmonth='"+month+"'><i class='fa fa-arrow-right'></i></a></div><table class='calendar'> </tr>";

    }else{
      calendarTable = "<div class='calendar-header'>  <a class='calendar-prev' data-currentmonth='"+month+"' data-currentyear='"+year+"'><i class='fa fa-arrow-left'></i></a><span class='calendar-header-month'> "+ monthNames[month] + "</span> <span class='calendar-header-year'>" + year + "</span> <a class='calendar-next' data-currentmonth='"+month+"' data-currentyear='"+year+"'><i class='fa fa-arrow-right'></i></a></div><table class='calendar'> </tr>";

    }

    calendarTable += "<tr class='weekdays'>  <td>Dom</td>  <td>Lun</td> <td>Mar</td> <td>Mie</td> <td>Jue</td> <td>Vie</td> <td>Sab</td> </tr>";
    calendarTable += "<tr>";
    calendarTable += padding;
    calendarTable += "</tr></table>";
    document.getElementById("calendar").innerHTML += calendarTable;
}


//calendar(6);
// function go12() {
//     for (i = 0; i < 12; i++) {
//         calendar(i);
//     }
// }
//
// if (window.addEventListener) {
//     window.addEventListener('load', go12, false);
// } else if (window.attachEvent) {
//     window.attachEvent('onload', go12);
// }
