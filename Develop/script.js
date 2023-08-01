// var definitions 
var currentDayEl = dayjs();
var saveBtn = $(".saveBtn");
$("#currentDay").text(currentDayEl.format('MMM D, YYYY'));

// Save button function  
  saveBtn.on("click", function() {
  var text = $(this).siblings(".description").val();
  var time = $(this).siblings(".hour").text();
  localStorage.setItem(time, text);
})

// Time tracking function
function timeTracker(){
var currentTimeEl = dayjs().format('hh:mm:ss');
$(".time-block").each(function(){
  var blockTime = parseInt($(this).attr("id"));
  if (blockTime < currentTimeEl) {
    $(this).addClass("future");
  }else if (blockTime === currentTimeEl){
    $(this).addClass("present");
  }else {
    $(this).addClass("past");
  }
})
};

// Function to save text to storage after refresh
function saveTime() {
  $(".hour").each(function() {
    var currentTime2 = $(this).text();
    var textEl = localStorage.getItem(currentTime2);
    if (textEl !== null) {
      $(this).siblings(".description").val(textEl);
    }
  })
}
// Get items from local storage
$("hour-9 .description").val(localStorage.getItem("hour-9"));
$("hour-10 .description").val(localStorage.getItem("hour-10"));
$("hour-11 .description").val(localStorage.getItem("hour-11"));
$("hour-12 .description").val(localStorage.getItem("hour-12"));
$("hour-1 .description").val(localStorage.getItem("hour-1"));
$("hour-2 .description").val(localStorage.getItem("hour-2"));
$("hour-3 .description").val(localStorage.getItem("hour-3"));
$("hour-4 .description").val(localStorage.getItem("hour-4"));
$("hour-5 .description").val(localStorage.getItem("hour-5"));

// Calling functions 
timeTracker();
saveTime();

