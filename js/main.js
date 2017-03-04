$(document).ready(function() {

  //Slide Practice
  $("#slideDown").click(function() {
    $("#slideDown").hide();
    $("#slideDown").slideDown('slow');
  });

  $("#slideUp").click(function() {
    $(this).slideUp('slow');
  });
  $("#slideUp").mouseleave(function() {
    $(this).slideDown();
  });

  $("#slideToggle").click(function() {
    $(this).slideToggle();
    $(this).delay(500);
    $(this).slideToggle();
  });

  $("#slideCrazy").click(function() {
    $(this).slideToggle();
    $(this).delay(500);
    $(this).slideToggle();
    $(this).slideToggle();
    $(this).delay(500);
    $(this).slideToggle();
    $(this).slideToggle();
    $(this).delay(500);
    $(this).slideToggle();
  });

  //Fade Practice
  $("#inFade").mouseenter(function() {
    $("#inFade").fadeIn(2000).addClass("notClear");
  });
  $("#inFade").mouseleave(function() {
    $("#inFade").removeClass("notClear");
  });

  $("#outFade").mouseenter(function() {
    $("#outFade").fadeOut(1000);
  });
  $("#outFade").mouseleave(function() {
    $("#outFade").fadeIn(1000);
  });

  $("#toFade").mouseenter(function() {
    $("#toFade").fadeTo(1000, 0.3);
  });
  $("#toFade").mouseleave(function() {
    $("#toFade").fadeTo(1000, 0.9);
  });

  $("#toggleFade").click(function() {
    $("#toggleFade").fadeToggle('slow', 'linear');
  });
  $("#toggleFade").click(function() {
    $("#toggleFade").fadeIn(2000);
  });

  //Animation jQuery
  $("#upDiv").click(function() {
    $("#upDiv").animate({top: "-=10px"});
  });
  $("#downDiv").click(function() {
    $("#downDiv").animate({top: "+=10px"});
  });
  $("#leftDiv").click(function() {
    $("#leftDiv").animate({left: "-=10px"});
  });
  $("#rightDiv").click(function() {
    $("#rightDiv").animate({left: "+=10px"});
  });

  //Nav jQuery
  $("li").hover(function() {
    $(this).fadeTo(500,0.25);
  });
  $("li").mouseleave(function() {
    $(this).fadeTo(500, 1);
  });

  $("li").click(function() {
    $(this).addClass("change");
    $(this).css("text-align", "center");
    $(this).css("padding-top", "15px");
    var $text = $(this).text();
    $(this).text("Clicked!");
  });
  $("li").mouseleave(function() {
    $(this).delay(1000).removeClass("change");
  });
});
