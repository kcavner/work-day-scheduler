// initial time to be compared to html element times
var time = dayjs().format('HH');

// local storage intial variables
var savedText9 = localStorage.getItem("text9")
var savedText10 = localStorage.getItem("text10")
var savedText11 = localStorage.getItem("text11")
var savedText12 = localStorage.getItem("text12")
var savedText13 = localStorage.getItem("text13")
var savedText14 = localStorage.getItem("text14")
var savedText15 = localStorage.getItem("text15")
var savedText16 = localStorage.getItem("text16")
var savedText17 = localStorage.getItem("text17")

// html element text content set to local storage variables
$(".t9").text(savedText9)
$(".t10").text(savedText10)
$(".t11").text(savedText11)
$(".t12").text(savedText12)
$(".t13").text(savedText13)
$(".t14").text(savedText14)
$(".t15").text(savedText15)
$(".t16").text(savedText16)
$(".t17").text(savedText17)

// once document is done this function runs,
// compares the schedule time to current time and gives appropriate element color red, green grey
$(document).ready(function boo(){
  // sets time to variable for header 
  var day = dayjs().format('MMM D, YYYY')
  $("#currentDay").text(day)
  // time comparison and appropriate element attribute configuration 
  $(".row").each(function(){
    console.log(time)
    if ($(this).attr("id") > time){
      console.log($(this).attr("id"))
      $(this).addClass("future")
     }
    if ($(this).attr("id") == time){
      console.log($(this).attr("id"))
      $(this).addClass("present")
     }
    if ($(this).attr("id") < time){
      console.log($(this).attr("id"))
      $(this).addClass("past")
     }
  })
}
)

// element click functionality that adds the text content to local storage
$('.b9').click(function(){
 localStorage.setItem("text9", $(".t9").val())
}) 
$('.b10').click(function(){
 localStorage.setItem("text10", $(".t10").val())
}) 
$('.b11').click(function(){
 localStorage.setItem("text11", $(".t11").val())
}) 
$('.b12').click(function(){
 localStorage.setItem("text12", $(".t12").val())
}) 
$('.b13').click(function(){
 localStorage.setItem("text13", $(".t13").val())
}) 
$('.b14').click(function(){
 localStorage.setItem("text14", $(".t14").val())
}) 
$('.b15').click(function(){
 localStorage.setItem("text15", $(".t15").val())
}) 
$('.b16').click(function(){
 localStorage.setItem("text16", $(".t16").val())
}) 
$('.b117').click(function(){
 localStorage.setItem("text17", $(".t17").val())
}) 
  
// button in header that clears local storage 
$("#clearBtn").click(function(){
  localStorage.clear()
  location.reload()
})