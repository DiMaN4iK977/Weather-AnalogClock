let canvasHTML = document.getElementById('myCanvas');
let ctx = canvasHTML.getContext("2d");

function displayCanvas() {
    ctx.strokeRect(0, 0, canvasHTML.width, canvasHTML.height);
    ctx.clearRect(0, 0, canvasHTML.width, canvasHTML.height);

    let radius = canvasHTML.width/2 - 10;
    let centerX = canvasHTML.width/2;
    let centerY = canvasHTML.height/2;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'LightSteelBlue';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle =  "#808000";
    ctx.arc(centerX, centerY, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    let radiusNum = radius - 15;
    let radiusPoint;
    ctx.strokeStyle = '#B8860B';
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        if (i % 5 === 0) {
            radiusPoint = 5;
        } else {
            radiusPoint = 3;
        } //для выделения часовых рисочек
        let xPoint = centerX + radiusNum * Math.cos(-6 * i * (Math.PI / 180) + Math.PI / 2);
        let yPoint = centerY - radiusNum * Math.sin(-6 * i * (Math.PI / 180) + Math.PI / 2);
        ctx.arc(xPoint, yPoint, radiusPoint, 0, 2 * Math.PI);
        ctx.stroke();
    }


    for(let th = 1; th <= 12; th++){
        ctx.beginPath();
        ctx.strokeStyle = '#DC143C';
        ctx.font = 'bold 25px sans-serif';
        let xText = centerX + (radiusNum - 30) * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);
        let yText = centerY - (radiusNum - 30) * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
        if(th <= 9){
            ctx.strokeText(th, xText - 5 , yText + 10);
        }else{
            ctx.strokeText(th, xText - 15 , yText + 10);
        }
        ctx.stroke();
        ctx.closePath();
    }

    let lengthSeconds = radiusNum - 10;
    let lengthMinutes = radiusNum - 30;
    let lengthHour = lengthMinutes / 1.6;
    let d = new Date();
    let t_sec = 6*d.getSeconds();
    let t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
    let t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());

    ctx.beginPath();
    ctx.strokeStyle =  "#FF0000";
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
        centerY - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle =  "#000000";
    ctx.lineWidth = 3;
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
        centerY - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 5;

    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
        centerY - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
    ctx.stroke();

    ctx.closePath();

return;
}

window.onload = function(){
    window.setInterval(
        function(){
            let d = new Date();
            document.getElementById("clock").innerHTML = d.toLocaleTimeString();
            displayCanvas();
        }
        , 1000);
}