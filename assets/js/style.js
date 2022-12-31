$(document).ready(function(){

    $('.switcher-btn').click(function(){
          $('.theme-buttons-container').fadeToggle();
     });
  
     $('.switcher-btn').click(function(){
      $('.sel-text').fadeToggle();
  });
  
     $('.theme-buttons').click(function(){
      $(":root ").css("--mainColor", "red")
    });
    $('.theme-button').click(function(){
      $(":root ").css("--mainColor", "#ffac1b")
    });
    $('.theme-buttom').click(function(){
      $(":root ").css("--mainColor", "#19bb0e")
    });
    $('.theme-color').click(function(){
      $(":root ").css("--mainColor", "#f05af5")
    });
    $('.theme-f-color').click(function(){
      $(":root ").css("--mainColor", "#00FF99")
    });
    $('.theme-font-color').click(function(){
      $(":root ").css("--mainColor", "#ff7100")
    });
    $('.theme-text-color').click(function(){
      $(":root ").css("--mainColor", "#468fd8")
    });
    $('.theme-txt-color').click(function(){
      $(":root ").css("--mainColor", "#B1ED7C")
    });
  
  });