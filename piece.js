function piece(panel, row , col, digit) {
	var pnl = document.createElement("div");
	pnl.image = document.createElement("img");
	pnl.digit = digit;

	pnl.image.width = "100"
	pnl.image.height = "100"

	pnl.col = col;
	pnl.row = row;
	pnl.panel = panel;

	pnl.style.left = pnl.col * widthImg + x0 + "px";
	pnl.style.top = pnl.row * heightImg + y0 + "px";
	pnl.style.position = "absolute";
	pnl.appendChild(pnl.image);

	pnl.setBorder = function(digit, color) {
		pnl.image.border = digit;
		pnl.image.style.borderColor = color;
	}

	pnl.setImage = function(digit) {
		pnl.image.src = st_start + addDigit(digit) + st_end;
		//alert(pnl.image.src);
	}

	pnl.onmousedown = function() {

		pnl.panel.onClickPiece(pnl.row, pnl.col);
	}

	pnl.setNomal = function() {
		pnl.image.border = 0;
	}

	pnl.setImage(pnl.digit);
	return pnl;
}
