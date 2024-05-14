function getTimePeriod() {
    let teacherName = document.getElementById("teacherName").value;
    let timePeriod = "";
  
    switch (teacherName.toLowerCase()) {
      case "mubeen sir":
        timePeriod = "8:00 to 8:50 or 11:40 to 12:20";
        break;
      case "ikram sir":
        timePeriod = "8:50 to 9:30 or 12:20 to 1:00";
        break;
      case "haider sir":
        timePeriod = "9:30 to 10:10";
        break;
      case "irfan sir":
        timePeriod = "11:00 to 11:40";
        break;
      default:
        timePeriod = "Teacher not found";
    }
  
    document.getElementById("timePeriod").innerText = timePeriod;
  }
  
