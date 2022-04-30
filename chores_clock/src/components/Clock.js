import React, { useRef, useEffect, useState } from 'react'
import useWindowDimensions from './WSHook'

const Clock = props => {
  
  const canvasRef = useRef(null)
  const { height, width } = useWindowDimensions();

  var halfHeightOfCanvas;
  var halfWidthOfCanvas;
  var varx;
  var vary;
  var rangeColor;

  
  function circle(ctx, x, y, radio, sa, ea, p) {
    ctx.beginPath();
    ctx.arc(x, y, radio, sa, ea * Math.PI/p, true);
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function line(ctx, x1, y1, x2, y2, w) {
    ctx.beginPath(); 
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = w;
    ctx.stroke();
  }

  function clock_lines (ctx, n, radio, cx, cy, w, l) {//It draws a series of lines around a given point. n is the number of lines, radio is the distance between the start of the lines and the center point, cx and cy are the cordinates of the center, l is the length of the lines and w is the thickness of the lines.

    var f = Math.PI / n * 2;

    for (var i = 0; i < n; i++){                
        var x1 = radio * Math.cos(i * f) + cx;
        var y1 = radio * Math.sin(i * f) + cy;
        var x2 = (radio + l) * Math.cos(i * f) + cx;
        var y2 = (radio + l) * Math.sin(i * f) + cy;

        line(ctx, x1, y1, x2, y2, w);
    };  
  };

  function numbers(ctx, number, x, y){//It draws a number. "number" is the number to draw, and x and y are the coordinates.
    ctx.fillStyle = "black";
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

  function draw_clock(ctx) {
    clock_lines(ctx, 24, vary, halfWidthOfCanvas, halfHeightOfCanvas, 2, varx/32);
    clock_lines(ctx, 8, vary, halfWidthOfCanvas, halfHeightOfCanvas, 3, varx/10.5);
    circle (ctx, halfWidthOfCanvas, halfHeightOfCanvas, vary/1.5, 0, 2, 1);
    circle (ctx, halfWidthOfCanvas, halfHeightOfCanvas, vary, 0, 2, 1);
    clock_numbers(ctx, varx/1.2, halfWidthOfCanvas-8, halfHeightOfCanvas+8);
  }

  function range (ctx, h1, h2) {//It fills a given area in the clock with a given color.
    var tonotgrade = Math.PI/720;
    var notgrade1 = (h1 + 360) * tonotgrade;
    var notgrade2 = (h2 + 360) * tonotgrade;

    ctx.beginPath();    
    ctx.arc(halfWidthOfCanvas, halfHeightOfCanvas,  (vary/1.5)+1, notgrade1, notgrade2, false);
    ctx.arc(halfWidthOfCanvas, halfHeightOfCanvas, vary-1, notgrade2, notgrade1, true);
    ctx.fillStyle = rangeColor;
    ctx.fill();

  };

  useEffect(() => {
    
    const canvas = canvasRef.current
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
    
    console.log(varx, vary, width, height);

    draw_clock(context);
    range(context, 0, 120)
    }, [draw_clock, range])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Clock