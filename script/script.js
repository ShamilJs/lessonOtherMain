// document.addEventListener("DOMContentLoaded", function(event) {
	'use strict';


	class DomElement  {

		constructor(selector, height, width, bg, fontSize, position){
			this.selector = selector;
		    this.height = height;
		    this.width = width;
		    this.bg = bg;
		    this.fontSize = fontSize;
		    this.position = position;
		};

		createElement () {
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
		    						`;
			newElement.innerHTML = `Привет мир!`; 
			document.body.append(newElement);
		};

		keydown() {
			let right = 0,
				top = 0;
			const hundred = document.querySelector('.hundred');
			hundred.style.position = 'relative';
			document.addEventListener('keydown', () => {
				switch(event.key) {
					case 'ArrowLeft':
						right += 10;
						hundred.style.right = `${right}px`
						break;
					case 'ArrowRight':
						right -= 10;
						hundred.style.right = `${right}px`
						break;
					case 'ArrowDown':
						top += 10;
						hundred.style.top = `${top}px`
						break;
					case 'ArrowUp':
						top -= 10;
						hundred.style.top = `${top}px`
						break;	
				};
			});
		};
	};
	const divHundred = new DomElement('.hundred', 100, 100, 'black', 20, 'absolute');
	divHundred.createElement();
	divHundred.keydown();
// });

