timeBlockArea = $(".timeBlockContainer");
timeBlockList = $("timeBlockLists");

function currentDate() {
  let date = moment();
  $("#currentDay").text("Today is : " + date.format("dddd"));
}

currentDate();

$(".timeBlockList").sortable();

timeOfDay = {
  0: 9,
  1: 10,
  2: 11,
  3: 12,
  4: 13,
  5: 14,
  6: 15,
  7: 16,
  8: 17,
};
function checkTime() {
  let listScheduleAr = document.querySelectorAll(".blockListItem");
  let currentTimeRaw = moment("14:00", "hh:mm");
  let currentTime = currentTimeRaw.format("HH");
  console.log(currentTime, Object.values(timeOfDay));
  Object.values(timeOfDay).forEach((hour, i) => {
    if (hour < currentTime) {
      let count = i + 1;
      $("ol li:nth-child(" + count + ")").css("background-color", "#a6a6a6");
      console.log(i);
    } else if (hour == currentTime) {
      let count = i + 1;
      $("ol li:nth-child(" + count + ")").css("background-color", "#f5b0ab");
      console.log(i);
    } else {
      let count = i + 1;
      $("ol li:nth-child(" + count + ")").css("background-color", "#b7f7bc");
      console.log(i);
    }
  });
}

checkTime();
let something = timeBlockList.eq(0);
