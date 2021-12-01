import {useRef,useEffect} from 'react'

export default function Canvas({fillStyle}) {

  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const brushRadius= (canvas.width/100) * 5
    const img = new Image();
      context.fillStyle='rgba(255,255,255,.1)';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    //img.src= 'https://res.cloudinary.com/dof2dcqoe/image/upload/v1637374693/sample.jpg'
    //img.onload= ()=>{
      //context.drawImage(img,0,0)
    //}
    //si agarra eventos asi
    function detectLeftButton(event) {
      if ('buttons' in event) {
          return event.buttons === 1;
      } else if ('which' in event) {
          return event.which === 1;
      } else {
          return event.button === 1;
      }
    }

    function getBrushPos(xRef, yRef) {
      var canvasRect = canvas.getBoundingClientRect();
        return {
        x: Math.floor((xRef-canvasRect.left)/(canvasRect.right-canvasRect.left)*canvas.width),
        y: Math.floor((yRef-canvasRect.top)/(canvasRect.bottom-canvasRect.top)*canvas.height)
        };
    }
    //dobujar el punto 
    function drawDot(mouseX,mouseY){
      context.beginPath();
        context.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
        context.fillStyle = '#000';
        context.globalCompositeOperation = "destination-out";
        context.fill();
    }
    //evento para dibujar el punto 
    canvas.addEventListener("mousemove", function(e) {
      var brushPos = getBrushPos(e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);

    canvas.addEventListener("touchmove", function(e) {
      e.preventDefault();
      var touch = e.targetTouches[0];
      if (touch) {
      var brushPos = getBrushPos(touch.pageX, touch.pageY);
          drawDot(brushPos.x, brushPos.y);
      }
    }, false);
    console.log(context)
  }, [])
  

  return (
    <canvas 
    
    style={{width:"500px",height:"500px"}}  ref={canvasRef} >
      
    </canvas>
  )
}
