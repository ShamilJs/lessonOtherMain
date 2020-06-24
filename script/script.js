'use strict';

class First {
	hello() {
		console.log('Я метод родителя');
	}
};

const metodFirst = new First();
metodFirst.hello();

class Second extends First {
	hello() {
		super.hello()
		console.log('А я наследуемый метод!');
	}
};

const metodSecond = new Second();

metodSecond.hello();




