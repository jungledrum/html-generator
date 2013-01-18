      var R = parseInt(Math.random() * 255);
      var G = parseInt(Math.random() * 255);
      var B = parseInt(Math.random() * 255);
      var RGB = "#" + R.toString(16) + G.toString(16) + B.toString(16)
      var color1 = RGB;
      var color2 = "white";
      $(function(){
        $("a").css("color",color1);
        $("a").hover(
          function () {
            $(this).css("color",color2);
            $(this).css("background-color",color1);
          }, 
          function () {
            $(this).css("color",color1);
            $(this).css("background-color",color2);
          }
        );
      })