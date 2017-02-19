function rand() {
		var a = Math.round(Math.random() * 10);
		if(a > 4) a = 10 - a;
		if(a == 5) a--;
		if(a==0) a++;	
	return a;
}

// --------- Tham khao
Array.prototype.randdom = function() {
    if(this.length>0) {
        var rndVal = parseInt(Math.random() * Math.pow(10,parseInt(this.length/10)+1));
        var rndIndex = Math.floor(rndVal%this.length);
        return this[rndIndex];
    }
}

// ---------
function checkEqual(arr, a,b) {
	var arrStart =  startMatrix(lenRow,lenCol);
	for(var i =0; i< a; i++) {
		for(var j = 0; j< b; j++) {
			if(arr[i][j].ivalue != arrStart[i][j]) return false;
		}
	}
	return true;
}

function startMatrix(a,b) {
	var arr = Array2(6);
	var count = 1;
	for(var i =0; i< a; i++) {
		for(var j = 0; j< b; j++) {
			arr[i][j] = count++;
		}
	}	
	arr[0][lenCol] = 0;
	return arr;
}

function Array2(len) {
	var arr = new Array;
	for(var i=0; i<len; i++) {
		arr[i] = new Array;
	}
	return arr;
}

function swap(st1, st2, pnl) {		
		var st = new Image;
		st.src = st1.image.src;
		st1.image.src= st2.image.src;
		st2.image.src = st.src;	
		
		var tg = 0;
		tg = st1.ivalue;
		st1.ivalue = st2.ivalue;
		st2.ivalue = tg;	
		
		pnl.iClicked = st1.row;
		pnl.jClicked = st1.col;
}

function draw(id, val) {
	if(val < 10) val = "0" + val;
	
	var d = document.getElementById(id);
	if(d.hasChildNodes()) d.removeChild(d.firstChild);
	d.appendChild(document.createTextNode(val));
}

function addDigit(ivalue) {
	if(ivalue < 10) ivalue = "0" + ivalue;
	return ivalue;
}