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

        var imgCoordinates = {x: miningCanvas.width/2 - 20 , y: -40};

        var particleimage = document.getElementById('minedtoken');
        var particleData = [];

      // wait one second before starting animation
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        self.animateMining(pickimage, imgCoordinates, particleimage, particleData, miningCanvas, context, startTime);
      }, 1000);


      } else {

         // canvas-unsupported code here
      }



    }




     animateMining(img, imgCoordinates, particleimage, particleData, canvas, context, startTime) {
       var self = this;


        // update
        var time = (new Date()).getTime() - startTime;

        var rotateSpeed = 150;
        // pixels / second
        var rotateDegrees = Math.abs(30 - ( rotateSpeed * time /1000 ) % 60 );


        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);
        //context.rotate(0*Math.PI/180);

        var rotateOffsets = {x: img.width/2, y:  img.height/2}
        //context.translate( -rotateOffsets.x,-rotateOffsets.y );
        context.rotate(rotateDegrees*Math.PI/180);

        context.drawImage(img, imgCoordinates.x, imgCoordinates.y, img.width, img.height );
        context.translate( rotateOffsets.x,rotateOffsets.y );

         context.restore();
         context.resetTransform();

         self.renderParticles(particleData,particleimage,imgCoordinates,canvas,context,time)


      //  drawRectangle(myRectangle, context);

        // request new frame .. loop forever
        requestAnimFrame(function() {
          self.animateMining(img, imgCoordinates, particleimage, particleData, canvas, context, startTime);
        });
      }


      renderParticles(particleData,particleimage,imgCoordinates,canvas,context,time){

          var floatSpeed = Math.random() * 2;

          if((time / 2000) > particleData.length   && particleData.length < 8)
          {
            //create new particle
            particleData.push({x: 25+ Math.random() * 60, y: canvas.height - 20})
          }

          for(var i=0;i<particleData.length;i++)
          {

            context.drawImage(particleimage, imgCoordinates.x+particleData[i].x,imgCoordinates.y+particleData[i].y,20,20 );

            particleData[i].y -= floatSpeed;

            if( particleData[i].y <= 0 ) particleData[i].y = canvas.height- 20;
          }



      }



}
