(function(){
	
	var canvas = document.getElementById("MyCanvas");
	c = canvas.getContext("2d");

	var dampening = 0.97;
	var spaceToRect = 30;	
	var gravity = 1.2;
	var left = false;
	var right = false;
	var point = 0;

	var circle = {x: 290,
				  y: 100,
				  vx : 5,
				  vy : 1,
				  radius: 20
				  }	


	var rect = {x:320,
				y:canvas.height -50,
				vx:0,
				width:150,
				spaceToRect: 30
				}
				

	
	function reset()
	{
		circle.x = 290;
		circle.y = 100;
		circle.vx = 2;
		circle.vy = 1;	
		circle.radius = 20;
		rect.x = 320;
		rect.y = canvas.height -spaceToRect;
		rect.vx = 0;
		rect.width = 150;
		point = 0;		
		left = false;
		right = false;
		clearInterval(start);
					menu();

	}

menu();

function menu()
{
// 	reset();
	c.clearRect(0,0,canvas.width, canvas.height);
	c.font = 'italic bold 30px sans-serif';
	c.textBaseLine = 'buttom';
	c.fillText("Welcome press play", 30, 20);
	canvas.addEventListener("mousedown", function(e)
	{
		 if(e.pageX > 0 && e.pageY > 0)
			start();
	});

}
		
	function start()
	{	
	
				
		c.clearRect(0,0,canvas.width, canvas.height);

		circle.x += circle.vx;
		circle.y += circle.vy;
	
		circle.vy += gravity;				
		circle.vx *= dampening +0.02;
		circle.vy *= dampening;

			//angle 
		if(left == true)
			rect.x -= 18;
		else if(right == true)
			rect.x += 18;
			
			//The hit
		if((circle.y + circle.radius > rect.y) && 
		    (circle.x > rect.x - circle.radius) &&
		    (circle.x < rect.x + rect.width + circle.radius))

			onHit();

		if((circle.y + circle.radius) > canvas.height) 
		{	
								
			reset();

// 			clearInterval(Game);

			
			
			
		}
		
		if(circle.x + circle.radius > canvas.width)
		{
			circle.x = canvas.width - circle.radius;
			circle.vx = -Math.abs(circle.vx);
		}
		
		if(circle.x - circle.radius < 0)
		{
			circle.x = 0 + circle.radius;
			circle.vx = Math.abs(circle.vx);
		}
		
		if(circle.y - circle.radius < 0)
		{
			circle.y = 0 + circle.radius; 
			circle.vy = Math.abs(circle.vy); 
			point += 1; 
			console.log(point);
		}

		
			c.beginPath();
			c.arc(circle.x, circle.y, circle.radius, 0,  2*Math.PI);
			c.closePath();	
			c.fill();	
			
						
			c.font = 'italic bold 30px sans-serif';
			c.textBaseLine = 'buttom';
			c.fillText("Point - " + point, 30, 20); 
			
		
			c.fillRect(rect.x,rect.y,rect.width,10);
			requestAnimFrame(start);
	}

	function onHit()
	{
		
				if(circle.x < (rect.x + (rect.width/2)))
		    	{
		    		if(left == true)
		    			circle.vx -= 6;
					circle.vx -= 3;
					console.log("sidepush 5")
				}
				
				if(circle.x > (rect.x + (rect.width/2)))
		    	{
		    		if(right == true)
		    			circle.vx += 6;
					circle.vx += 3;
					console.log("sidepush 5")
				}
		    

				if(circle.x < rect.x)
					circle.vx -= 10; 
				if(circle.x > rect.x + rect.width)
					circle.vx += 10; 									

				if(left == true)
					circle.vx = -8;
				if(right == true)
					circle.vx = 8;
			
			circle.vy = -Math.abs(circle.vy);
	}
	
	
	
					
	canvas.addEventListener("mousedown", function(e)
	{
		circle.vx = (e.pageX - circle.x)/30;
		circle.vy = -5;
		circle.x = e.pageX;
		circle.y = e.pageY;			
	});

			
		window.addEventListener('keydown', function(e)
		{
			if(e.keyCode == 37)
			{
				left = true;
				right = false;
			}	
			
			if(e.keyCode == 39)
			{
				left = false; 
				right = true;
			}
			
			if(e.keyCode == 32)
			{



				if((circle.y + circle.radius > (canvas.height - 100)) && 
		    		(circle.x > rect.x) &&
		    		(circle.x < rect.x + 100))
		    	{
					circle.vy = - 60;
					console.log("tilfælde 1")
				}
				else if((circle.y + 50 > (canvas.height - 120)) && 
		    		(circle.x > rect.x) &&
		    		(circle.x < rect.x + 100))
		    	{
		    		circle.vy = - 25;
		    		console.log("tilfælde 2")
				}
				
				rect.y = canvas.height - 100;
				if(circle.y + circle.radius >= rect.y)
				circle.y = rect.y + circle.radius;	
			

			}
			console.log(e.keyCode);
		}, true);
	
			//right
		window.addEventListener('keyup', function(e)
		{
		if(e.keyCode == 39)
			right = false;
		if(e.keyCode == 37)
			left = false;
		if(e.keyCode == 32)
			rect.y = canvas.height - 50;

		}, true);
		




})();



		
	

			
