//Animating navbar elements on hover
$("nav ul li a")
  .mouseover(function () {
    $(this).animate({ fontSize: "1.2rem" }, 200);
  })
  .mouseout(function () {
    $(this).animate({ fontSize: "1rem" }, 200);
  });

//Temporary variables to store dimensions
let originalWidth;
let originalHeight;
$(".connect img")
  .mouseover(function () {
    originalWidth = $(this).width();
    originalHeight = $(this).height();
    $(this)
      .stop()
      .animate(
        {
          width: $(this).width() * 1.2,
          height: $(this).height() * 1.2,
        },
        200
      );
  })
  .mouseout(function () {
    $(this).stop().animate(
      {
        width: originalWidth,
        height: originalHeight,
      },
      200
    );
  });
