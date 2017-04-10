var timer = 0;		
function startclock() {
	timer.frame = 1;
	timer = setInterval("timer_tick()",1);
	s=0; m=0; h=0;	
}
var s = 0 ;
var m = 0;
var h = 0;

function timer_tick() {	
	s++ ;
	if(s == 100) {				
	s=0;
	m++;
		if(m==60) {
			m=0;
			h++;
		}
	}			
			
	draw("s",s);
	draw("m",m);
	draw("h",h);
}

function stopclock() {
	clearInterval(timer);		
}