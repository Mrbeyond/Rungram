	 var boot=document.getElementById("run");
     var des =boot.getContext("2d");
	var w=boot.width, h=boot.height;
	function rec(a,b,c,d){
 		a= Math.round(Math.random()*(w-c));
		b= Math.round(Math.random()*(h-d));		
	  if (a>180) {des.strokeStyle="cyan"; des.strokeRect(a,b,c,d);
		}else{ des.strokeStyle="#yellow"; des.strokeRect(a,b,c,d);} }
 
 	function lin(a,b,c,d){
 		a= Math.round(Math.random()*(w));
		b= Math.round(Math.random()*(h));
		c= Math.round(Math.random()*(w));
		d= Math.round(Math.random()*(h));
		 des.moveTo(a,b);
		 des.lineTo(c,d);
		 des.stroke();	}

	function cyc(a,b,c){
		a= c+ Math.ceil(Math.random()*(w-a));
		if (a>(w-c)) {a=w-c-Math.floor(Math.random()*(c)+20);}
		b= c+ Math.ceil(Math.random()*(300-b));
		if (b>(h-c)) {b=h-c-Math.floor(Math.random()*(c)+20);}	 	
		des.beginPath();		
		 des.arc(a,b,c,0,2*Math.PI)
		 des.stroke();  	}

	setInterval(action, 203);

	function action(){
	des.clearRect(0,0,300,300);
	rec(100,40,100,100);
	lin(20,80,120,130);
	cyc(10,20,50);
	}
  