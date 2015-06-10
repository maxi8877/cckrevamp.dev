function calendar(month, year, links) {

  var padding = "";
  var topper = "";
  var totalFeb = "";
  var i = 1;
  var testing = "";
  var current = new Date();
  var cmonth = current.getMonth();
  var day = current.getDate();
  if (!year) {
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
  var monthNamesShort = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  var dayNames = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  var totalDays = ["31", "" + totalFeb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
  //console.log(  tempMonth + '-01-' + year);
  var dattt = parseDate(tempMonth + '.01.' + year, 'mm.dd.yyyy');

  var tempDate = new Date(dattt);
  //console.log(tempDate);
  var tempweekday = tempDate.getDay();
  var tempweekday2 = tempweekday;
  var dayAmount = totalDays[month];

  while (tempweekday > 0) {
    padding += "<td class='premonth'></td>";
  //  topper += "<li class='premonth'></li>";
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
      if (i < 10) {
        topper += "<li class='currentday'>0" + i+ '<span class="month">de ' + monthNames[month] + "<span></li>";
      } else {
        topper += "<li class='currentday'>" + i + '<span class="month">de ' + monthNames[month] + "<span></li>";

      }
    } else {
      padding += "<td class='currentmonth'>" + i + "</td>";
      if (i < 10) {

        topper += "<li class='currentmonth'>0" + i + '<span class="month">de ' + monthNames[month] + "<span></li>";
      } else {
        topper += "<li class='currentmonth'>" + i + '<span class="month">de ' + monthNames[month] + "<span></li>";
      }

    }
    tempweekday2++;
    i++;
  }
  var calendarTable = '';
  if (links) {
    calendarTable = "<div class='calendar-header'>  <a  href='#' data-currentmonth='" + month + "'><i class='fa fa-arrow-left'></i></a><span class='calendar-header-month'> " + monthNames[month] + "</span> <span class='calendar-header-year'>" + year + "</span><a href='#' data-currentmonth='" + month + "'><i class='fa fa-arrow-right'></i></a></div><table class='calendar'> </tr>";

  } else {
    calendarTable = "<div class='calendar-header'>  <a class='calendar-prev' data-currentmonth='" + month + "' data-currentyear='" + year + "'><i class='fa fa-arrow-left'></i></a><span class='calendar-header-month'> " + monthNames[month] + "</span> <span class='calendar-header-year'>" + year + "</span> <a class='calendar-next' data-currentmonth='" + month + "' data-currentyear='" + year + "'><i class='fa fa-arrow-right'></i></a></div><table class='calendar'> </tr>";
    calendarDiv = "<div class='calendar-2'> <ul>";

  }

  calendarTable += "<tr class='weekdays'>  <td>Dom</td>  <td>Lun</td> <td>Mar</td> <td>Mie</td> <td>Jue</td> <td>Vie</td> <td>Sab</td> </tr>";
  calendarTable += "<tr>";
  calendarTable += padding;
  calendarDiv += topper;
  calendarTable += "</tr></table>";
  calendarDiv += "</ul><div class='calendar-header'>  <a class='calendar-prev' data-currentmonth='" + month + "' data-currentyear='" + year + "'><i class='fa fa-arrow-left'></i></a><span class='calendar-header-month'> " + monthNamesShort[month] + "</span> <span class='calendar-header-year'>" + year + "</span> <a class='calendar-next' data-currentmonth='" + month + "' data-currentyear='" + year + "'><i class='fa fa-arrow-right'></i></a></div></div>";
  document.getElementById("calendar").innerHTML += calendarTable;
  setTimeout(function(){
    document.getElementById("calendar-2").innerHTML += calendarDiv;

  },0);
}


function parseDate(input, format) {
  format = format || 'yyyy-mm-dd'; // default format
  var parts = input.match(/(\d+)/g),
    i = 0,
    fmt = {};
  // extract date-part indexes from the format
  format.replace(/(yyyy|dd|mm)/g, function(part) {
    fmt[part] = i++;
  });

  return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
}

// parseDate('06.21.2010', 'mm.dd.yyyy');
// parseDate('21.06.2010', 'dd.mm.yyyy');
// parseDate('2010/06/21', 'yyyy/mm/dd');
// parseDate('2010-06-21');

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
