import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import useWindowDimensions from './WSHook'

function Clock() {
  const canvasRef = useRef(null)
  const { height, width } = useWindowDimensions();
  const [hours2, sethours2] = useState("");
  const [minutes2, setminutes2] = useState("");
  const [dateDay2, setdateDay2] = useState("");
  const [dateMonth2, setdateMonth2] = useState("");
  const [dateYear2, setdateYear2] = useState("");
  const [dayName, setdayName] = useState("");

  const Clockc = props => {
  
    var halfHeightOfCanvas;
    var halfWidthOfCanvas;
    var varx;
    var vary;
    var rangeColor;
    var tonotgrade = Math.PI/720;
    var hours;
    var minutes;
    var hour;
    var day;
    var dateDay;
    var dateMonth;
    var dateYear
    
    function circle(ctx, x, y, radio, sa, ea, p, color) {
      ctx.beginPath();
      ctx.arc(x, y, radio, sa, ea * Math.PI/p, true);
      ctx.lineWidth = 2;
      ctx.strokeStyle=color;
      ctx.stroke();
  
    }
  
    function line(ctx, x1, y1, x2, y2, w, color) {
      ctx.beginPath(); 
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = w;
      ctx.strokeStyle=color;
      ctx.stroke();
    }
  
    function clock_lines (ctx, n, radio, cx, cy, w, l, color) {//It draws a series of lines around a given point. n is the number of lines, radio is the distance between the start of the lines and the center point, cx and cy are the cordinates of the center, l is the length of the lines and w is the thickness of the lines.
  
      var f = Math.PI / n * 2;
  
      for (var i = 0; i < n; i++){                
          var x1 = radio * Math.cos(i * f) + cx;
          var y1 = radio * Math.sin(i * f) + cy;
          var x2 = (radio + l) * Math.cos(i * f) + cx;
          var y2 = (radio + l) * Math.sin(i * f) + cy;
  
          line(ctx, x1, y1, x2, y2, w, color);
      };  
    };
  
    function numbers(ctx, number, x, y){//It draws a number. "number" is the number to draw, and x and y are the coordinates.
      ctx.fillStyle = "lightgray";
      ctx.fillText(number , x, y);
    }
  
    function clock_numbers (ctx, radio, cx, cy) {//It draws numbres around a given point. radio is the distance between the point and the numbers and cx and cy are the coordinates of the center
  
      var f = Math.PI / 8 * 2;
  
      for (var i = 1; i < 5; i++){   
          var x1 = radio * Math.cos((i+i+1) * f) + cx;
          var y1 = radio * Math.sin((i+i+1) * f) + cy;
          var number1 = 3 * (i+(0+i-1));
          ctx.font = "20px Arial";
          numbers(ctx, number1, x1, y1);
  
          var x1 = radio * Math.cos((i*2) * f) + cx;
          var y1 = radio * Math.sin((i*2) * f) + cy;
          var number2 = 6 * (0+i-1);
          ctx.font = "20px Arial";
          numbers(ctx, number2, x1, y1);
  
      };  
    };
  
    function tickLine(ctx, hour, w, color) {
      var f = Math.PI/2;
  
      var hour2 = (hour / 360) + 1
  
      var x1 = vary/2 * Math.cos(hour2 * f) + halfWidthOfCanvas;
      var y1 = vary/2 * Math.sin(hour2 * f) + halfHeightOfCanvas;
      var x2 = vary * Math.cos(hour2 * f) + halfWidthOfCanvas;
      var y2 = vary * Math.sin(hour2 * f) + halfHeightOfCanvas;
  
      line(ctx, x1, y1, x2, y2, w, color);
    }
  
    function Choose(){
      if (day == 1){
        setdayName("Monday");
      }
      if (day == 2){
        setdayName("Tuesday");
      }
      if (day == 3){
        setdayName("Wednesday");
      }
      if (day == 4){
        setdayName("Thursday");
      }
      if (day == 5){
        setdayName("Friday");
      }
      if (day == 6){
        setdayName("Saturday");
      }
      if (day == 9){
        setdayName("Sunday");
      }

    }
    
    function draw_clock(ctx) {
      clock_lines(ctx, 24, vary, halfWidthOfCanvas, halfHeightOfCanvas, 2, varx/32, "gray");
      clock_lines(ctx, 8, vary, halfWidthOfCanvas, halfHeightOfCanvas, 3, varx/10.5, "gray");
      circle (ctx, halfWidthOfCanvas, halfHeightOfCanvas, vary/1.5, 0, 2, 1, "gray");
      circle (ctx, halfWidthOfCanvas, halfHeightOfCanvas, vary, 0, 2, 1, "gray");
      tickLine(ctx, hour, 2, "red");
      //clock_numbers(ctx, varx/1.2, halfWidthOfCanvas-8, halfHeightOfCanvas+8);
    }
  
    function range (ctx, h1, h2) {//It fills a given area in the clock with a given color.
      var notgrade1 = (h1 + 360) * tonotgrade;
      var notgrade2 = (h2 + 360) * tonotgrade;
  
      ctx.beginPath();    
      ctx.arc(halfWidthOfCanvas, halfHeightOfCanvas,  (vary/1.5)+1, notgrade1, notgrade2, false);
      ctx.arc(halfWidthOfCanvas, halfHeightOfCanvas, vary-1, notgrade2, notgrade1, true);
      ctx.fillStyle = rangeColor;
      ctx.fill();
  
    };
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      rangeColor = "red";

      if (height > width) {
        canvas.width = width;
        canvas.height = height/2;    
      } else {
          canvas.width = width/2;
          canvas.height = height;    
      };
  
      halfHeightOfCanvas = canvas.height /  2;
      halfWidthOfCanvas = canvas.width / 2;
  
      if(halfWidthOfCanvas > halfHeightOfCanvas){
        varx = halfHeightOfCanvas;
      }
      else{
          varx = halfWidthOfCanvas;
      }
      vary = varx / 1.5;

      hours = new Date().getHours();
      minutes = new Date().getMinutes();
      hour = (hours*60) + minutes;
      day = new Date().getDay();
      dateDay = new Date().getDate();
      dateMonth = (new Date().getMonth()) + 1;
      dateYear = new Date().getFullYear();
      Choose();
      setdateYear2(dateYear);

      if (dateDay < 10){
        setdateDay2("0" + dateDay)
      } else{
        setdateDay2(dateDay)
      }

      if (dateMonth < 10){
        setdateMonth2("0" + dateMonth)
      } else{
        setdateMonth2(dateMonth)
      }

      if (hours < 10){
        sethours2("0" + hours)
      } else{
        sethours2(hours)
      }

      if (minutes < 10){
        setminutes2("0" + minutes) 
      } else{
        setminutes2(minutes)
      }
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      draw_clock(context);
      range(context, 0, 120);

      const timer = setInterval(() => {
        
        hours = new Date().getHours();
        minutes = new Date().getMinutes();
        hour = (hours*60) + minutes;
        day = new Date().getDay();
        dateDay = new Date().getDate();
        dateMonth = (new Date().getMonth()) + 1;
        dateYear = new Date().getFullYear();
        Choose();
        setdateYear2(dateYear);

        if (dateDay < 10){
          setdateDay2("0" + dateDay)
        } else{
          setdateDay2(dateDay)
        }
  
        if (dateMonth < 10){
          setdateMonth2("0" + dateMonth)
        } else{
          setdateMonth2(dateMonth)
        }
  
        if (hours < 10){
          sethours2("0" + hours)
        } else{
          sethours2(hours)
        }
  
        if (minutes < 10){
          setminutes2("0" + minutes) 
        } else{
          setminutes2(minutes)
        }
  
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw_clock(context);
        range(context, 0, 120);
      }, 1000);
      return () => {clearInterval(timer);}

      })
    
      return <canvas ref={canvasRef} {...props}/>
  }

  const ClockInfo = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    margin: 0%;
    padding: 0%;

    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    align-items: center;

    z-index: 1;
  `;

  const ClockHour = styled.div`
  font-size: 200%;
  margin: auto;
  padding: 0%;
  text-align: center;
  `;

  const ClockDay = styled.div`
  font-size: 100%;
  margin: auto;
  padding: 0%;
  text-align: center;
  `;

  const ClockDate = styled.div`
  font-size: 100%;
  margin: auto;
  padding: 0%;
  text-align: center;
  `;

  return (
    <React.Fragment>
      <Clockc/>
      <ClockInfo>
        <ClockHour>{hours2}:{minutes2}</ClockHour>
        <ClockDay>{dayName}</ClockDay>
        <ClockDate>{dateDay2}/{dateMonth2}/{dateYear2}</ClockDate>
      </ClockInfo>
    </React.Fragment>

  )

}

export default Clock