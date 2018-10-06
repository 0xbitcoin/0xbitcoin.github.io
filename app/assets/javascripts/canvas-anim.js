export default class CanvasAnim {



    init()
    {
      var self = this;

      console.log('canvas anim');

      var miningCanvas  = document.getElementById("mining-canvas");



      window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();




      if (miningCanvas.getContext) {
         var context = miningCanvas.getContext('2d');

          // drawing code here
        var pickimage = document.getElementById('miningpick');

      //  ctx.drawImage(pickimage, 11, 12);



      // wait one second before starting animation
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        self.animate(pickimage, miningCanvas, context, startTime);
      }, 1000);


      } else {

         // canvas-unsupported code here
      }



    }




     animate(img, canvas, context, startTime) {
       var self = this;
       console.log('anim', img.borderWidth)


        // update
        var time = (new Date()).getTime() - startTime;

        var linearSpeed = 100;
        // pixels / second
        var newX = linearSpeed * time / 1000;

        if(newX < canvas.width - img.width - img.borderWidth / 2) {
          img.x = newX;
        }

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);


        context.drawImage(img, newX, 12);



      //  drawRectangle(myRectangle, context);

        // request new frame .. loop forever
        requestAnimFrame(function() {
          self.animate(img, canvas, context, startTime);
        });
      }


    /*  var myRectangle = {
        x: 0,
        y: 75,
        width: 100,
        height: 50,
        borderWidth: 5
      };

      drawRectangle(myRectangle, context);*/

      // wait one second before starting animat

}
