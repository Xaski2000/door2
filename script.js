const caseApartList = [{
		name: 'М1',
		desc: 'Корпус 1',
		place: 'apartment',
		overPanel: true,
		price: 2200
	},
	{
		name: 'М2',
		desc: 'Корпус 1',
		place: 'apartment',
		overPanel: false,
		price: 2200
	},
	{
		name: 'М7',
		desc: 'Корпус 1',
		place: 'apartment',
		overPanel: true,
		price: 2200
	},
	{
		name: 'Мерседес 2',
		desc: 'Корпус 1',
		place: 'apartment',
		overPanel: false,
		price: 2200
	}
];

const caseHouseList = [{
		name: 'М5',
		desc: 'Корпус 1',
		place: 'house',
		overPanel: true,
		price: 2200
	},
	{
		name: 'М10',
		desc: 'Корпус 1',
		place: 'house',
		overPanel: false,
		price: 2200
	}
];

const outPanelList = [
	{
		name: 'Бетон коричневый',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Бетон',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Венге серый',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Круг',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Ливерпуль',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Лиственница темная',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'М1',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'М5',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'М7',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Мадрид',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Штукатурка',
		place: 'apartment',
		price: 2200
	}
];

const inPanelList = [
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Кардинал',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Круг светлая',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Круг темная',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Патрисия',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Софи',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Цветок',
		place: 'apartment',
		price: 2200
	}
];

const knobList = [
	{
		name: 'FUARO Top XL (сатинированный хром)',
		price: 2200
	},
	{
		name: 'FUARO Top XL (хром)',
		price: 2200
	},
	{
		name: 'FUARO Top XL (черный)',
		price: 2200
	},
	{
		name: 'Palidore 75',
		price: 2200
	}
];

const caseApart = document.querySelector('.case-apartment'),
		caseHouse = document.querySelector('.case-house'),
		outPanel = document.querySelector('.outPanel-box'),
		inPanel = document.querySelector('.inPanel-box'),
		knob = document.querySelector('.knob-box'),
		outPanelText = document.querySelector('.outPanel-box__text'),
		inPanelText = document.querySelector('.inPanel-box__text'),
		knobText = document.querySelector('.knob-box__text'),
		resultOut = document.querySelector('.resultOut'),
		resultIn = document.querySelector('.resultIn');

const apartBut = document.querySelector('.apartment'),
		houseBut = document.querySelector('.house'),
		outBut = document.querySelector('.button-out'),
		inBut = document.querySelector('.button-in'),
		knobBut = document.querySelector('.button-knob');

const caseInside = document.querySelector('.case-inside'),
		under = document.querySelector('.underlay'),
		underText = document.querySelector('.underlay__text');



apartBut.addEventListener('click', e => {
	apartBut.classList.add('border');
	houseBut.classList.remove('border');

	caseApart.classList.add('flex');
	caseHouse.classList.remove('flex');
});

houseBut.addEventListener('click', e => {
	houseBut.classList.add('border');
	apartBut.classList.remove('border');

	caseHouse.classList.add('flex');
	caseApart.classList.remove('flex');
});

function hideAll() {
	outPanel.style.display = 'none';
	inPanel.style.display = 'none';
	knob.style.display = 'none';
	outPanelText.style.display = 'none';
	inPanelText.style.display = 'none';
	knobText.style.display = 'none';
}

function outButEvent() {
	hideAll();
	outBut.parentNode.style.justifyContent = 'end';

	outPanel.style.display = 'block';
	outPanelText.style.display = 'block';

	inBut.style.display = 'block';
	outBut.style.display = 'none';
	knobBut.style.display = 'none';
}

function inButEvent() {
	hideAll();
	inPanel.style.display = 'block';
	inPanelText.style.display = 'block';

	knobBut.style.display = 'block';
	outBut.style.display = 'block';
	inBut.style.display = 'none';
}

function knobButEvent() {
	hideAll();
	knobBut.parentNode.style.justifyContent = 'start';

	knob.style.display = 'block';
	knobText.style.display = 'block';

	inBut.style.display = 'block';
	outBut.style.display = 'none';
	knobBut.style.display = 'none';
}

outBut.addEventListener('click', e => {
	outButEvent();
});

inBut.addEventListener('click', e => {
	inButEvent();
});

knobBut.addEventListener('click', e => {
	knobButEvent();
});


function showCase() {
	caseApartList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'case__item';
			div.setAttribute('data-src', i);
			div.innerHTML = `	<p class="case__item-name">${item.name}</p>
									<p class="case__item-desc">${item.desc}</p>`;
			caseApart.append(div);
	});

	caseHouseList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'case__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <p class="case__item-name">${item.name}</p>
									<p class="case__item-desc">${item.desc}</p>`;
			caseHouse.append(div);
	});
}

// function showCaseHouse() {
// 	caseList.forEach((item, i) => {
// 		if (item.place == 'house') {
// 			let div = document.createElement('div');
// 			div.className = 'case__item';
// 			div.setAttribute('data-src', i);
// 			div.innerHTML = ` <p class="case__item-name">${item.name}</p>
// 									<p class="case__item-desc">${item.desc}</p>`;
// 			caseHouse.append(div);
// 		}
// 	});
// }

function showOutPanel() {
	outPanelList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'outPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
			outPanel.append(div);
	});
}

function showInPanel() {
	inPanelList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'inPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
			inPanel.append(div);
	});
}

function showKnob() {
	knobList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'knob__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Фурнитура/${item.name}.png" class="knob__item-img">`;
			knob.append(div);
	});
}

function caseBorder() {
	const item = document.querySelectorAll('.case__item');
		item.forEach( e => {
			e.classList.remove('border');
		});
}

function inPanelBorder() {
	const item = document.querySelectorAll('.inPanel__item-img');
		item.forEach( e => {
			e.classList.remove('border');
		});
}

function outPanelBorder() {
	const item = document.querySelectorAll('.outPanel__item-img');
		item.forEach( e => {
			e.classList.remove('border');
		});
}

function knobBorder() {
	const item = document.querySelectorAll('.knob__item-img');
		item.forEach( e => {
			e.classList.remove('border');
		});
}

function caseApartResult(a) {
	under.style.display = 'none';
	underText.style.display = 'none';

	let b = '';

	for (let key in caseApartList[a]) {
		if (key == 'name') {
			// console.log(caseApartList[a][key]);
			b = caseApartList[a][key];
		}

		if (key == 'price') {
			price.case = caseApartList[a][key];
			considerPrice();
		}

		if (key == 'overPanel' && caseApartList[a][key] === true) {
			// console.log(caseApartList[a][key]);
			under.style.display = 'block';
			underText.style.display = 'block';

			oldPrice.outPanel = price.outPanel;
			price.outPanel = 0;
		}

		if (key == 'overPanel' && caseApartList[a][key] === false) {
			price.outPanel = oldPrice.outPanel;
		}
	}

	// console.log(b);

	document.querySelector('.case-result').remove();
	let img = document.createElement('img');
	img.className = 'resultOut__item case-result';
	img.setAttribute('src', `./img/result/Корпуса/В квартиру/${b}.png`);
	resultOut.append(img);

	caseInside.style.display = 'block';
}

function caseHouseResult(a) {
	under.style.display = 'none';
	underText.style.display = 'none';

	let b = '';

	for (let key in caseHouseList[a]) {
		if (key == 'name') {
			// console.log(caseHouseList[a][key]);
			b = caseHouseList[a][key];
		}

		if (key == 'price') {
			price.case = caseHouseList[a][key];
			considerPrice();
		}

		if (key == 'overPanel' && caseHouseList[a][key] === true) {
			// console.log(caseHouseList[a][key]);
			under.style.display = 'block';
			underText.style.display = 'block';

			oldPrice.outPanel = price.outPanel;
			price.outPanel = 0;
		}

		if (key == 'overPanel' && caseHouseList[a][key] === false) {
			price.outPanel = oldPrice.outPanel;
		}
	}
	// console.log(b);

	document.querySelector('.case-result').remove();
	let img = document.createElement('img');
	img.className = 'resultOut__item case-result';
	img.setAttribute('src', `./img/result/Корпуса/В дом/${b}.png`);
	resultOut.append(img);

	caseInside.style.display = 'block';
}

function outPanelResult(a) {
	let b = '';

	for (let key in outPanelList[a]) {
		if (key == 'name') {
			// console.log(caseList[a][key]);
			b = outPanelList[a][key];
		}

		if (key == 'price') {
			price.outPanel = outPanelList[a][key];
			considerPrice();
		}
	}
	// console.log(b);


	document.querySelector('.facingOut-result').remove();
	let img = document.createElement('img');
	img.className = 'resultOut__item facingOut-result';
	img.setAttribute('src', `./img/result/Внешние панели/${b}.png`);
	// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
	resultOut.append(img);

	// inPanel.style.display = 'flex';
}

function inPanelResult(a) {
	let b = '';

	for (let key in inPanelList[a]) {
		if (key == 'name') {
			// console.log(caseList[a][key]);
			b = inPanelList[a][key];
		}

		if (key == 'price') {
			price.inPanel = inPanelList[a][key];
			considerPrice();
		}
	}
	// console.log(b);

	document.querySelector('.facingIn-result').remove();
	let img = document.createElement('img');
	img.className = 'resultIn__item facingIn-result';
	img.setAttribute('src', `./img/result/Внутренние панели/3Д фрезерованные 16мм/${b}.png`);
	// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
	resultIn.append(img);


	// knob.style.display = 'flex';
}

function knobResult(a) {
	let b = '';

	for (let key in knobList[a]) {
		if (key == 'name') {
			// console.log(caseList[a][key]);
			b = knobList[a][key];
		}

		if (key == 'price') {
			price.knob = knobList[a][key];
			considerPrice();
		}
	}
	// console.log(b);

	document.querySelector('.knobOut-result').remove();
	let imgOut = document.createElement('img');
	imgOut.className = 'resultOut__item knobOut-result';
	imgOut.setAttribute('src', `./img/result/Внешняя Фурнитура/${b}.png`);
	// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
	resultOut.append(imgOut);

	document.querySelector('.knobIn-result').remove();
	let imgIn = document.createElement('img');
	imgIn.className = 'resultIn__item knobIn-result';
	imgIn.setAttribute('src', `./img/result/Внутренняя Фурнитура/${b}.png`);
	// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
	resultIn.append(imgIn);
}



caseApart.addEventListener('click', e => {
	let a = '';

	if (e.target && e.target.className == 'case__item')
	{
		a = e.target.getAttribute('data-src');
		caseBorder();
		e.target.classList.add('border');
	}

	if (e.target && e.target.className == 'case__item-name')
	{
		a = e.target.parentNode.getAttribute('data-src');
		caseBorder();
		e.target.parentNode.classList.add('border');
	}

	if (e.target && e.target.className == 'case__item-desc')
	{
		a = e.target.parentNode.getAttribute('data-src');
		caseBorder();
		e.target.parentNode.classList.add('border');
	}

	if (a != '')
	{
		caseApartResult(a);
	}

});

caseHouse.addEventListener('click', e => {
	let a = '';

	if (e.target && e.target.className == 'case__item')
	{
		a = e.target.getAttribute('data-src');

		caseBorder();
		e.target.classList.add('border');

	}

	if (e.target && e.target.className == 'case__item-name')
	{
		a = e.target.parentNode.getAttribute('data-src');

		caseBorder();
		e.target.parentNode.classList.add('border');
	}

	if (e.target && e.target.className == 'case__item-desc')
	{
		a = e.target.parentNode.getAttribute('data-src');

		caseBorder();
		e.target.parentNode.classList.add('border');
	}

	if (a != '')
	{
		caseHouseResult(a);
	}

});

outPanel.addEventListener('click', e => {
	let a = '';

	if (e.target && e.target.className == 'outPanel__item-img')
	{
		a = e.target.parentNode.getAttribute('data-src');

		outPanelBorder();
		e.target.classList.add('border');
	}

	if (a != '')
	{
		outPanelResult(a);
		inButEvent();
	}

});

inPanel.addEventListener('click', e => {
	let a = '';

	if (e.target && e.target.className == 'inPanel__item-img')
	{
		a = e.target.parentNode.getAttribute('data-src');

		inPanelBorder();
		e.target.classList.add('border');
	}

	if (a != '')
	{
		inPanelResult(a);

		knobButEvent();
	}

});

knob.addEventListener('click', e => {

	let a = '';

	if (e.target && e.target.className == 'knob__item-img')
	{
		a = e.target.parentNode.getAttribute('data-src');

		knobBorder();
		e.target.classList.add('border');
	}

	if (a != '')
	{
		knobResult(a);
	}

});

let price = {
	case: 0,
	outPanel: 0,
	inPanel: 0,
	knob: 0
};

let oldPrice = {
	case: 0,
	outPanel: 0,
	inPanel: 0,
	knob: 0
};

function considerPrice() {
	const totalPrice = price.case + price.outPanel + price.inPanel + price.knob;
	document.querySelector('.func__price').innerText = totalPrice;
}

const randomBut = document.querySelector('.random-btn');

randomBut.addEventListener('click', e => {

	function randomCaseApart() {
		const	itemParent = document.querySelector('.case-apartment'),
				item = itemParent.querySelectorAll('.case__item'),
				a = Math.floor(Math.random() * item.length);

		caseBorder();
		item[a].classList.add('border');

		caseApartResult(a);
	}

	function randomCaseHouse() {
		const	itemParent = document.querySelector('.case-house'),
				item = itemParent.querySelectorAll('.case__item'),
				a = Math.floor(Math.random() * item.length);

		caseBorder();
		item[a].classList.add('border');

		caseHouseResult(a);
	}

	function randomOutPanel() {
		const item = document.querySelectorAll('.outPanel__item-img'),
		a = Math.floor(Math.random() * item.length);

		item.forEach( e => {
			e.classList.remove('border');
		});
		item[a].classList.add('border');

		outPanelResult(a);
	}

	function randomInPanel() {
		const item = document.querySelectorAll('.inPanel__item-img'),
			a = Math.floor(Math.random() * item.length);


		item.forEach( e => {
			e.classList.remove('border');
		});
		item[a].classList.add('border');
		// console.log(a);

		inPanelResult(a);
	}

	function randomKnob() {
		const item = document.querySelectorAll('.knob__item-img'),
		a = Math.floor(Math.random() * item.length);

		item.forEach( e => {
			e.classList.remove('border');
		});
		item[a].classList.add('border');

		knobResult(a);
	}



	randomOutPanel();

	if (apartBut.classList.contains('border')) {
		randomCaseApart();
	} else {
		randomCaseHouse();
	}

	randomInPanel();
	randomKnob();
});

showCase();
showOutPanel();
showInPanel();
showKnob();

considerPrice();
