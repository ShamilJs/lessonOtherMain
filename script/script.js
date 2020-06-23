'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
	this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement = function() {
	let newElement;
	if (this.selector[0] === '.') {
		newElement = document.createElement('div');
		this.selector = this.selector.slice(1);
		newElement.classList.add(`'${selector}'`);
	} else if (this.selector[0] === '#') {
	 	newElement = document.createElement('p');
	 	newElement.id = this.selector.slice(1); 
	}
	newElement.style.cssText=`
							height: ${this.height}px;
	 						width: ${this.width}px;
							background: ${this.bg};
    						font-size: ${this.fontSize}px;
    						`;
	newElement.innerHTML = `Привет мир!`; 
	document.body.append(newElement);
};

const appData = new DomElement('#qqqqq', 200, 300, 'red', 35);


appData.createElement();
