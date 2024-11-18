// Ex-1
$(document).ready(function() {
    $('#text').on('click', function(){
    $('#p_1').hide();
    })

});
// Ex-2
$(document).ready(function() {
    $('#Ex2').on('click', function(){
    $('h2').show('slow');
    })

});
// Ex-3
$(document).ready(function() {
    $( "#d_1" ).add( "#d_2" ).css( "background", "yellow" );

});
// Ex-4
$(document).ready(function() {
    $( "#d_3" ).after( "<b>How are you???<b>" );

});
// Ex-5
$(document).ready(function() {
    $( "#d_4" ).before( "<b>Hey....<b>" );

});
// Ex-6
$(document).ready(function() {
    $('#t_1').on('click', function(){
    $('#d_5').empty();
    })
})
// Ex-7
$(document).ready(function() {
    $( "input:enabled" ).val( "I am active" );

})
// Ex-8
$(document).ready(function() {
    $( "#d_6" )
  .find( "span" )
  .end()
  .css( "border", "2px red solid" );

})
// Ex-9
$(document).ready(function() {
    $("#flip").on('click', function(){
    $("#panel").slideDown(1000);
    })
     $("#stop").on('click', function(){
     $("#panel").stop();
     })
});
// Ex-10
$(document).ready(function() {
    $("#bt1").on('click', function(){
    $("box").animate({
    left: '700px',
    opacity: '0.8',
    height: '100px',
    width: '100px'
     })
})
})
// Ex-11
$(document).ready(function() {
    $("#b_t").on('click', function(){
    $("#d_7").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
})
})
// Ex-12
$(document).ready(function() {
    $('#bt2').on('click',function() {
    $("#d_8").css("color", "green").slideUp(1000).slideDown(1000);
    })
})
// Ex-13
$(document).ready(function(){
  $("#btn1").on('click',function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").on('click',function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").on('click',function(){
    $("#test3").val("Dolly Duck");
  });
});
// Ex-14
$(document).ready(function(){
  $("#bt3").on('click',function(){
    alert("Background color = " + $("p").css("background-color"));
  });
});
// Ex-15
$(document).ready(function(){
  $("#p1").on('mouseup',function(){
    alert("Mouse up over p1!");
  });
});
// Ex-16
$(document).ready(function(){
  $("#p2").hover(function(){
    alert("You entered p1!");
    },
  function(){
    alert("Bye! You now leave p1!");
  });
})
// Ex-17
$(document).ready(function(){
  $("#p3").on('mouseleave',function(){
    alert("You will go to next Page");
  });
});
