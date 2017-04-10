/*
*/

function panel() {
	var pnl = document.createElement("div");
	pnl.style.position = "relative";
	pnl.arrImg = Array2(8);
	pnl.iClicked = lenRow-1;
	pnl.jClicked = 0;
	var count = 1;
	for(var i=0; i< lenRow; i++) {
		for(var j=0; j<lenCol; j++) {
			pnl.arrImg[i][j] = piece(pnl, i,j,count);
			pnl.arrImg[i][j].ivalue = count++;
			pnl.appendChild(pnl.arrImg[i][j]);
		}
	}
	pnl.arrImg[lenRow -1][0].setImage(0);

	pnl.onClickPiece = function(a,b) {
		if(pnl.checkClick(a,b)) {
			swap(pnl.arrImg[a][b], pnl.arrImg[pnl.iClicked][pnl.jClicked],pnl)
			if(a== lenRow-1 && b==0) {
				if(checkEqual(pnl.arrImg,lenRow, lenCol)) {
					stopclock();
					alert("Congratulation! You win!");
					return;
				}
			}
		}
	}

	pnl.newGame = function() {
		stopclock();
		pnl.randImage();
		startclock();
	}

	pnl.randImage = function() {
		var i ;
		for(i = 1; i<300; i++) {
			var a= rand();
			var img = pnl.arrImg[pnl.iClicked][ pnl.jClicked];

			switch(a) {
			case 1: {

				if(img.row - 1 < 0) swap( pnl.arrImg[img.row + 1][img.col],img ,pnl);
				else swap(pnl.arrImg[img.row - 1][img.col],img, pnl);

				break; }
			case 2: {

				if(img.row + 1 > lenRow - 1) swap(pnl.arrImg[img.row - 1][img.col],img ,pnl);
				else swap(pnl.arrImg[img.row + 1][img.col],img,pnl);

				break; }
			case 3: {

				if(img.col - 1 < 0) swap(pnl.arrImg[img.row][img.col + 1] ,img ,pnl);
				else swap( pnl.arrImg[img.row][img.col - 1 ], img, pnl);

				break; }
			case 4: {

				if(img.col + 1 > lenCol - 1) swap(pnl.arrImg[img.row][img.col - 1] ,img,pnl);
				else swap( pnl.arrImg[img.row ][img.col + 1] ,img ,pnl);

				break;
				}
			default : {break;}
			}
		}
	}
	pnl.checkClick = function(i,j) {
			if((i!= pnl.iClicked) && (j!= pnl.jClicked)) return false;
			else
			{
				if(i == pnl.iClicked - 1) return true;
				if(i == pnl.iClicked + 1) return true;
				if(j == pnl.jClicked - 1) return true;
				if(j == pnl.jClicked + 1) return true;
			}
		return false;
	}
	return pnl;
}
