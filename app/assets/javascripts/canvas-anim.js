export default class CanvasAnim {



    init()
    {
      console.log('canvas anim');

      var miningCanvas  = document.getElementById("mining-canvas");


      if (miningCanvas.getContext) {
         var ctx = miningCanvas.getContext('2d');

          // drawing code here
        var pickimage = document.getElementById('miningpick');

        ctx.drawImage(pickimage, 33, 71);

      } else {

         // canvas-unsupported code here
      }



    }

}
