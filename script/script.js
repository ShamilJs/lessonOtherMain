'use strict';

let rightSum = 0,
	downSum = 0;

const DomElement = function(selector, height, width, bg, fontSize, position, right, top) {
	this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
    this.right = right;
    this.top = top;   
};

DomElement.prototype.createElement = function() {
	document.body.textContent = '';
	let newElement;
	if (this.selector[0] === '.') {
		newElement = document.createElement('div');
		this.selector = this.selector.slice(1);
		newElement.classList.add(`${this.selector}`);
	} else if (this.selector[0] === '#') {
	 	newElement = document.createElement('p');
	 	newElement.id = this.selector.slice(1); 
	}
	newElement.style.cssText=`
				height: ${this.height}px;
	 			width: ${this.width}px;
				background: ${this.bg};
    				font-size: ${this.fontSize}px;
    				position:${this.position};
    				right:${this.right}px;
    				top: ${this.top}px;
    				`;
	newElement.innerHTML = `Привет мир!`; 
	document.body.append(newElement);
};

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

const divHundred = new DomElement('.hundred', 100, 100, 'black', 20, 'absolute');
divHundred.createElement();

const keydown = function() {
	this.selector = '.hundred';
    this.height = 100;
    this.width = 100;
    this.bg = 'black';
    this.fontSize = 20;
    this.position = 'relative';

	const left = function() {
		rightSum +=10;
		if (rightSum > 0) {
			rightSum = 0;
		}
		return rightSum;
	};
	const right = function() {
		rightSum -=10;
		if (rightSum < -900) {
			rightSum = -900;
		}
		return rightSum;
	};
	const top = function() {
		downSum +=10;
		if (downSum > 500) {
			downSum = 500;
		}
		return downSum;
	};
	const up = function() {
		downSum -=10;
		if (downSum < 0) {
			downSum = 0;
		}
		return downSum;
	};
	switch(event.key) {
		case 'ArrowLeft':
			this.right = left();

			divHundred.createElement();
			break;
		case 'ArrowRight':
			this.right = right();
			divHundred.createElement();
			break;
		case 'ArrowDown':
			this.top = top();
			divHundred.createElement();
			break;
		case 'ArrowUp':
			this.top = up();
			divHundred.createElement();
			break;	
	}
};

document.addEventListener('keydown', keydown.bind(divHundred));





