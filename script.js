const caseApartList = [{
		name: 'М1 3к',
		desc: 'Одна панель',
		place: 'apartment',
		overPanel: true,
		price: 1900
	},
	{
		name: 'М2',
		desc: 'Две панели',
		place: 'apartment',
		overPanel: false,
		price: 2100
	},
	{
		name: 'М7',
		desc: 'Одна панель',
		place: 'apartment',
		overPanel: true,
		price: 2220
	},
	{
		name: 'М2 премиум',
		desc: 'Две панели',
		place: 'apartment',
		overPanel: false,
		price: 2090
	}
];

const caseHouseList = [{
		name: 'М5',
		desc: 'Одна панель',
		place: 'house',
		overPanel: true,
		price: 2100
	},
	{
		name: 'М10',
		desc: 'Две панели',
		place: 'house',
		overPanel: false,
		price: 2000
	}
];

const outPanelList = [
	{
		name: 'Бетон коричневый',
		place: 'apartment',
		price: 2100
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
		price: 2500
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
		name: 'Патрисия',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Круг темная',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Софи',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},



	{
		name: 'Версаль 3 патина',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Кардинал',
		place: 'apartment',
		price: 2500
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
		price: 2500
	},
	{
		name: 'FUARO Top XL (хром)',
		price: 2100
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
		inPanel = document.querySelector('.inPanel'),
		outPanel = document.querySelector('.outPanel'),
		knob = document.querySelector('.knob-box'),
		caseText = document.querySelector('.case-box__text'),
		outPanelText = document.querySelector('.outPanel-box__text'),
		inPanelText = document.querySelector('.inPanel-box__text'),
		knobText = document.querySelector('.knob-box__text'),
		resultOut = document.querySelector('.resultOut'),
		resultIn = document.querySelector('.resultIn'),
		panelMenu = document.querySelector('.panelMenu');

const apartBut = document.querySelector('.apartment'),
		houseBut = document.querySelector('.house'),
		outBut = document.querySelector('.button-out'),
		inBut = document.querySelector('.button-in'),
		knobBut = document.querySelector('.button-knob'),
		linkBtn = document.querySelector('.link-to-siteBtn'),
		randomBut = document.querySelector('.random-btn'),
		buttonBox = document.querySelector('.button-box');

const caseInside = document.querySelector('.case-inside'),
		under = document.querySelector('.underlay'),
		underText = document.querySelector('.underlay__text');

const inPanelWrapper = document.querySelector('.inPanel-wrapper'),
		inPanelTopBut = document.querySelector('.inPanel-topBut'),
		inPanelBotBut = document.querySelector('.inPanel-botBut'),
		outPanelWrapper = document.querySelector('.outPanel-wrapper'),
		outPanelTopBut = document.querySelector('.outPanel-topBut'),
		outPanelBotBut = document.querySelector('.outPanel-botBut');

function apartButFunc(){
	apartBut.classList.add('border');
	houseBut.classList.remove('border');

	caseText.style.display = 'flex';

	caseApart.classList.add('flex');
	caseHouse.classList.remove('flex');
}

apartBut.addEventListener('click', e => {
	apartButFunc();
});

function houseButFunc(){
	houseBut.classList.add('border');
	apartBut.classList.remove('border');

	caseText.style.display = 'flex';

	caseHouse.classList.add('flex');
	caseApart.classList.remove('flex');
}

houseBut.addEventListener('click', e => {
	houseButFunc();
});

function hideAll() {
	outPanel.style.display = 'none';
	inPanel.style.display = 'none';
	knob.style.display = 'none';
	outPanelText.style.display = 'none';
	inPanelText.style.display = 'none';
	knobText.style.display = 'none';
}

function inButEvent() {
	hideAll();
	outBut.parentNode.style.justifyContent = 'end';

	inPanel.style.display = 'flex';
	inPanelText.style.display = 'flex';

	knobBut.style.display = 'none';
	outBut.style.display = 'block';
	inBut.style.display = 'none';
}

function outButEvent() {
	hideAll();
	inBut.parentNode.style.justifyContent = 'space-between';

	outPanel.style.display = 'flex';
	outPanelText.style.display = 'flex';

	inBut.style.display = 'block';
	outBut.style.display = 'none';
	knobBut.style.display = 'block';
}

function knobButEvent() {
	hideAll();
	knobBut.parentNode.style.justifyContent = 'start';

	knob.style.display = 'flex';
	knobText.style.display = 'flex';

	inBut.style.display = 'none';
	outBut.style.display = 'block';
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

function createOutPanelBox1() {
	if(outPanelList.length >= 10) {
		const outPanelBox = document.querySelectorAll('.outPanel-box');
		let div = document.createElement('div');
		div.className = 'outPanel-box';
		outPanelBox[0].after(div);

		const outPanelDots = document.querySelectorAll('.outPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'outPanel-dots__item';
		outPanelDots[0].after(div1);
	}
}
function createOutPanelBox2() {
	if(outPanelList.length >= 19) {
		const outPanelBox = document.querySelectorAll('.outPanel-box');
		let div = document.createElement('div');
		div.className = 'outPanel-box';
		outPanelBox[1].after(div);

		const outPanelDots = document.querySelectorAll('.outPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'outPanel-dots__item';
		outPanelDots[1].after(div1);
	}
}
function createOutPanelBox3() {
	if(outPanelList.length >= 28) {
		const outPanelBox = document.querySelectorAll('.outPanel-box');
		let div = document.createElement('div');
		div.className = 'outPanel-box';
		outPanelBox[2].after(div);

		const outPanelDots = document.querySelectorAll('.outPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'outPanel-dots__item';
		outPanelDots[2].after(div1);
	}
}

function showOutPanel() {
	const outPanelBox = document.querySelectorAll('.outPanel-box');
	outPanelList.forEach((item, i) => {
		if(i < 8) {
			let div = document.createElement('div');
			div.className = 'outPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
			outPanelBox[0].append(div);
		}

		if(i > 7 && i < 16) {
			let div = document.createElement('div');
			div.className = 'outPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
			outPanelBox[1].append(div);
		}

		if(i > 15 && i < 24) {
			let div = document.createElement('div');
			div.className = 'outPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
			outPanelBox[2].append(div);
		}

		if(i > 23 && i < 32) {
			let div = document.createElement('div');
			div.className = 'outPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
			outPanelBox[3].append(div);
		}
	});
}

let outPanelBoxNum = 0;

function hideAllOutPanelBox() {
	document.querySelectorAll('.outPanel-box').forEach((item, i) => {
		item.style.display = 'none';
	});
	document.querySelectorAll('.outPanel-dots__item').forEach((item, i) => {
		item.classList.remove('outPanel-dots__itemActive');
	});
}

outPanelTopBut.addEventListener('click', e => {
	if(outPanelBoxNum > 0) {
		outPanelBoxNum = outPanelBoxNum - 1;
		hideAllOutPanelBox();

		document.querySelectorAll('.outPanel-box')[outPanelBoxNum].style.display = 'flex';
		document.querySelectorAll('.outPanel-dots__item')[outPanelBoxNum].classList.add('outPanel-dots__itemActive');
	}
});

outPanelBotBut.addEventListener('click', e => {
	if(outPanelBoxNum < document.querySelectorAll('.outPanel-box').length - 1) {
		outPanelBoxNum = outPanelBoxNum + 1;
		hideAllOutPanelBox();

		document.querySelectorAll('.outPanel-box')[outPanelBoxNum].style.display = 'flex';
		document.querySelectorAll('.outPanel-dots__item')[outPanelBoxNum].classList.add('outPanel-dots__itemActive');
	}
});

// function showInPanel() {
// 	inPanelList.forEach((item, i) => {
// 			let div = document.createElement('div');
// 			div.className = 'inPanel__item';
// 			div.setAttribute('data-src', i);
// 			div.innerHTML = ` <img src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
// 			inPanel.append(div);
// 	});
// }




function createInPanelBox1() {
	if(inPanelList.length >= 10) {
		const inPanelBox = document.querySelectorAll('.inPanel-box');
		let div = document.createElement('div');
		div.className = 'inPanel-box';
		inPanelBox[0].after(div);

		const inPanelDots = document.querySelectorAll('.inPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'inPanel-dots__item';
		inPanelDots[0].after(div1);
	}
}
function createInPanelBox2() {
	if(inPanelList.length >= 19) {
		const inPanelBox = document.querySelectorAll('.inPanel-box');
		let div = document.createElement('div');
		div.className = 'inPanel-box';
		inPanelBox[1].after(div);

		const inPanelDots = document.querySelectorAll('.inPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'inPanel-dots__item';
		inPanelDots[1].after(div1);
	}
}
function createInPanelBox3() {
	if(inPanelList.length >= 28) {
		const inPanelBox = document.querySelectorAll('.inPanel-box');
		let div = document.createElement('div');
		div.className = 'inPanel-box';
		inPanelBox[2].after(div);

		const inPanelDots = document.querySelectorAll('.inPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'inPanel-dots__item';
		inPanelDots[2].after(div1);
	}
}

let inPanelBoxNum = 0;

function hideAllInPanelBox() {
	document.querySelectorAll('.inPanel-box').forEach((item, i) => {
		item.style.display = 'none';
	});
	document.querySelectorAll('.inPanel-dots__item').forEach((item, i) => {
		item.classList.remove('inPanel-dots__itemActive');
	});
}

inPanelTopBut.addEventListener('click', e => {
	if(inPanelBoxNum > 0) {
		inPanelBoxNum = inPanelBoxNum - 1;
		hideAllInPanelBox();

		document.querySelectorAll('.inPanel-box')[inPanelBoxNum].style.display = 'flex';
		document.querySelectorAll('.inPanel-dots__item')[inPanelBoxNum].classList.add('inPanel-dots__itemActive');
	}
});

inPanelBotBut.addEventListener('click', e => {
	if(inPanelBoxNum < document.querySelectorAll('.inPanel-box').length - 1) {
		inPanelBoxNum = inPanelBoxNum + 1;
		hideAllInPanelBox();

		document.querySelectorAll('.inPanel-box')[inPanelBoxNum].style.display = 'flex';
		document.querySelectorAll('.inPanel-dots__item')[inPanelBoxNum].classList.add('inPanel-dots__itemActive');
	}
});


function showInPanel() {
	const inPanelBox = document.querySelectorAll('.inPanel-box');
	inPanelList.forEach((item, i) => {
		if(i < 8) {
			let div = document.createElement('div');
			div.className = 'inPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
			inPanelBox[0].append(div);
		}

		if(i > 7 && i < 16) {
			let div = document.createElement('div');
			div.className = 'inPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
			inPanelBox[1].append(div);
		}

		if(i > 15 && i < 24) {
			let div = document.createElement('div');
			div.className = 'inPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
			inPanelBox[2].append(div);
		}

		if(i > 23 && i < 32) {
			let div = document.createElement('div');
			div.className = 'inPanel__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <img src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
			inPanelBox[3].append(div);
		}
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

	panelMenu.style.display = 'block';
	buttonBox.style.display = 'flex';
	// inPanelText.style.display = 'flex';

	let b = '';


	for (let key in caseApartList[a]) {
		if (key == 'name') {
			// console.log(caseApartList[a][key]);
			b = caseApartList[a][key];
			linkToSite.case = caseApartList[a][key];
		}

		if (key == 'price') {
			price.case = caseApartList[a][key];
			considerPrice();
		}

		if (key == 'overPanel' && caseApartList[a][key] === true) {
			// console.log(caseApartList[a][key]);
			under.style.display = 'block';
			underText.style.display = 'block';

			linkToSite.casePanelType = true;
			price.casePanelType = true;
		}

		if (key == 'overPanel' && caseApartList[a][key] === false) {
			linkToSite.casePanelType = false;
			price.casePanelType = false;
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

	panelMenu.style.display = 'block';
	buttonBox.style.display = 'flex';
	// inPanelText.style.display = 'flex';

	let b = '';

	for (let key in caseHouseList[a]) {
		if (key == 'name') {
			// console.log(caseHouseList[a][key]);
			b = caseHouseList[a][key];
			linkToSite.case = caseHouseList[a][key];
		}

		if (key == 'price') {
			price.case = caseHouseList[a][key];
			considerPrice();
		}

		if (key == 'overPanel' && caseHouseList[a][key] === true) {
			// console.log(caseHouseList[a][key]);
			under.style.display = 'block';
			underText.style.display = 'block';

			linkToSite.casePanelType = true;
			price.casePanelType = true;
		}

		if (key == 'overPanel' && caseHouseList[a][key] === false) {
			linkToSite.casePanelType = false;
			price.casePanelType = false;
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
			linkToSite.outPanel = outPanelList[a][key];
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
	imgOut.setAttribute('src', `./img/result/Внешняя фурнитура/${b}.png`);
	// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
	resultOut.append(imgOut);

	document.querySelector('.knobIn-result').remove();
	let imgIn = document.createElement('img');
	imgIn.className = 'resultIn__item knobIn-result';
	imgIn.setAttribute('src', `./img/result/Внутренняя фурнитура/${b}.png`);
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


inPanelWrapper.addEventListener('click', e => {
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

		outButEvent();
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
	knob: 0,
	casePanelType: ''
};

function considerPrice() {
	document.querySelector('.func__price').innerText = `Цена:`;

	if (price.casePanelType == true) {
		if (price.case != 0 && price.inPanel != 0 && price.knob != 0) {
			const totalPrice = price.case + price.inPanel + price.knob;
			document.querySelector('.func__price').innerText = `Цена: ${totalPrice}`;
		}
	} else {
		if (price.case != 0 && price.outPanel != 0 && price.inPanel != 0 && price.knob != 0) {
		const totalPrice = price.case + price.outPanel + price.inPanel + price.knob;
		document.querySelector('.func__price').innerText = `Цена: ${totalPrice}`;
		}
	}

}


randomBut.addEventListener('click', e => {
	apartButFunc();
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

function minPrice() {
	let caseApartArr = [];
	let caseHouseArr = [];
	let outPanelArr = [];
	let inPanelArr = [];
	let knobArr = [];

	let ApartCaseNum = '';
	let HouseCaseNum = '';
	let outPanelNum = '';
	let inPanelNum = '';
	let knobNum = '';

	let lowApartCaseNum = '',
		 lowHouseCaseNum = '';

	apartButFunc();

	caseApartList.forEach((item, a) => {
		for (let key in caseApartList[a]) {
			if (key == 'price') {
				caseApartArr[a] = caseApartList[a][key];
			}
		}
		let lowApartCase = Math.min.apply(null, caseApartArr);
		lowApartCaseNum = lowApartCase;
		for (let key in caseApartList[a]) {

			if (key == 'price' && lowApartCase == caseApartList[a][key]) {
				ApartCaseNum = a;
			}

		}
	});


	caseHouseList.forEach((item, a) => {
		for (let key in caseHouseList[a]) {
			if (key == 'price') {
				caseHouseArr[a] = caseHouseList[a][key];
			}
		}
		let lowHouseCase = Math.min.apply(null, caseHouseArr);
		lowHouseCaseNum = lowHouseCase;
		for (let key in caseHouseList[a]) {
			if (key == 'price' && lowHouseCase == caseHouseList[a][key]) {
				HouseCaseNum = a;
			}
		}
	});

	outPanelList.forEach((item, a) => {
		for (let key in outPanelList[a]) {
			if (key == 'price') {
				outPanelArr[a] = outPanelList[a][key];
			}
		}
		let lowOutPanel = Math.min.apply(null, outPanelArr);
		for (let key in outPanelList[a]) {
			if (key == 'price' && lowOutPanel == outPanelList[a][key]) {
				outPanelNum = a;
			}
		}
	});

	inPanelList.forEach((item, a) => {
		for (let key in inPanelList[a]) {
			if (key == 'price') {
				inPanelArr[a] = inPanelList[a][key];
			}
		}
		let lowInPanel = Math.min.apply(null, inPanelArr);
		for (let key in inPanelList[a]) {
			if (key == 'price' && lowInPanel == inPanelList[a][key]) {
				inPanelNum = a;
			}
		}
	});

	knobList.forEach((item, a) => {
		for (let key in knobList[a]) {
			if (key == 'price') {
				knobArr[a] = knobList[a][key];
			}
		}
		let lowKnob = Math.min.apply(null, knobArr);
		for (let key in knobList[a]) {
			if (key == 'price' && lowKnob == knobList[a][key]) {
				knobNum = a;
			}
		}
	});


	// console.log(ApartCaseNum);
	// console.log(HouseCaseNum);
	// console.log(outPanelNum);
	// console.log(inPanelNum);
	// console.log(knobNum);

	if (lowApartCaseNum <= lowHouseCaseNum) {
		caseApartResult(ApartCaseNum);
		const itemParentApart = document.querySelector('.case-apartment'),
		itemApartCaseNum = itemParentApart.querySelectorAll('.case__item');
		itemApartCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		const itemParentHouse = document.querySelector('.case-house'),
		itemHouseCaseNum = itemParentHouse.querySelectorAll('.case__item');
		itemHouseCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		itemApartCaseNum[ApartCaseNum].classList.add('border');
	} else {
		caseHouseResult(HouseCaseNum);
		const itemParentApart = document.querySelector('.case-apartment'),
		itemApartCaseNum = itemParentApart.querySelectorAll('.case__item');
		itemApartCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		const itemParentHouse = document.querySelector('.case-house'),
		itemHouseCaseNum = itemParentHouse.querySelectorAll('.case__item');
		itemHouseCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		itemHouseCaseNum[HouseCaseNum].classList.add('border');
	}


	outPanelResult(outPanelNum);
	const itemoutPanelNum = document.querySelectorAll('.outPanel__item-img');
	itemoutPanelNum.forEach( e => {
		e.classList.remove('border');
	});
	itemoutPanelNum[outPanelNum].classList.add('border');

	inPanelResult(inPanelNum);
	const iteminPanelNum = document.querySelectorAll('.inPanel__item-img');
	iteminPanelNum.forEach( e => {
		e.classList.remove('border');
	});
	iteminPanelNum[inPanelNum].classList.add('border');

	knobResult(knobNum);
	const itemknobNum = document.querySelectorAll('.knob__item-img');
	itemknobNum.forEach( e => {
		e.classList.remove('border');
	});
	itemknobNum[knobNum].classList.add('border');

}

function maxPrice() {
	let caseApartArr = [];
	let caseHouseArr = [];
	let outPanelArr = [];
	let inPanelArr = [];
	let knobArr = [];

	let ApartCaseNum = '';
	let HouseCaseNum = '';
	let outPanelNum = '';
	let inPanelNum = '';
	let knobNum = '';

	let lowApartCaseNum = '',
		 lowHouseCaseNum = '';

	apartButFunc();

	caseApartList.forEach((item, a) => {
		for (let key in caseApartList[a]) {
			if (key == 'price') {
				caseApartArr[a] = caseApartList[a][key];
			}
		}
		let lowApartCase = Math.max.apply(null, caseApartArr);
		lowApartCaseNum = lowApartCase;
		for (let key in caseApartList[a]) {

			if (key == 'price' && lowApartCase == caseApartList[a][key]) {
				ApartCaseNum = a;
			}

		}
	});


	caseHouseList.forEach((item, a) => {
		for (let key in caseHouseList[a]) {
			if (key == 'price') {
				caseHouseArr[a] = caseHouseList[a][key];
			}
		}
		let lowHouseCase = Math.max.apply(null, caseHouseArr);
		lowHouseCaseNum = lowHouseCase;
		for (let key in caseHouseList[a]) {
			if (key == 'price' && lowHouseCase == caseHouseList[a][key]) {
				HouseCaseNum = a;
			}
		}
	});

	outPanelList.forEach((item, a) => {
		for (let key in outPanelList[a]) {
			if (key == 'price') {
				outPanelArr[a] = outPanelList[a][key];
			}
		}
		let lowOutPanel = Math.max.apply(null, outPanelArr);
		for (let key in outPanelList[a]) {
			if (key == 'price' && lowOutPanel == outPanelList[a][key]) {
				outPanelNum = a;
			}
		}
	});

	inPanelList.forEach((item, a) => {
		for (let key in inPanelList[a]) {
			if (key == 'price') {
				inPanelArr[a] = inPanelList[a][key];
			}
		}
		let lowInPanel = Math.max.apply(null, inPanelArr);
		for (let key in inPanelList[a]) {
			if (key == 'price' && lowInPanel == inPanelList[a][key]) {
				inPanelNum = a;
			}
		}
	});

	knobList.forEach((item, a) => {
		for (let key in knobList[a]) {
			if (key == 'price') {
				knobArr[a] = knobList[a][key];
			}
		}
		let lowKnob = Math.max.apply(null, knobArr);
		for (let key in knobList[a]) {
			if (key == 'price' && lowKnob == knobList[a][key]) {
				knobNum = a;
			}
		}
	});


	// console.log(ApartCaseNum);
	// console.log(HouseCaseNum);
	// console.log(outPanelNum);
	// console.log(inPanelNum);
	// console.log(knobNum);

	if (lowApartCaseNum >= lowHouseCaseNum) {
		caseApartResult(ApartCaseNum);
		const itemParentApart = document.querySelector('.case-apartment'),
		itemApartCaseNum = itemParentApart.querySelectorAll('.case__item');
		itemApartCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		const itemParentHouse = document.querySelector('.case-house'),
		itemHouseCaseNum = itemParentHouse.querySelectorAll('.case__item');
		itemHouseCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		itemApartCaseNum[ApartCaseNum].classList.add('border');
	} else {
		caseHouseResult(HouseCaseNum);
		const itemParentApart = document.querySelector('.case-apartment'),
		itemApartCaseNum = itemParentApart.querySelectorAll('.case__item');
		itemApartCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		const itemParentHouse = document.querySelector('.case-house'),
		itemHouseCaseNum = itemParentHouse.querySelectorAll('.case__item');
		itemHouseCaseNum.forEach( e => {
			e.classList.remove('border');
		});
		itemHouseCaseNum[HouseCaseNum].classList.add('border');
	}


	outPanelResult(outPanelNum);
	const itemoutPanelNum = document.querySelectorAll('.outPanel__item-img');
	itemoutPanelNum.forEach( e => {
		e.classList.remove('border');
	});
	itemoutPanelNum[outPanelNum].classList.add('border');

	inPanelResult(inPanelNum);
	const iteminPanelNum = document.querySelectorAll('.inPanel__item-img');
	iteminPanelNum.forEach( e => {
		e.classList.remove('border');
	});
	iteminPanelNum[inPanelNum].classList.add('border');

	knobResult(knobNum);
	const itemknobNum = document.querySelectorAll('.knob__item-img');
	itemknobNum.forEach( e => {
		e.classList.remove('border');
	});
	itemknobNum[knobNum].classList.add('border');

}

document.querySelector('.low-price').addEventListener('click', e => {
	minPrice();
});

document.querySelector('.high-price').addEventListener('click', e => {
	maxPrice();
});

let linkToSite = {
	case: '',
	outPanel: '',
	casePanelType: ''
};


function addLinkToSite() {
	let totalLink2 = '';

	linkToSite.case = linkToSite.case.replace(' ', '-');
	linkToSite.outPanel = linkToSite.outPanel.replace(' ', '-');

	if (linkToSite.casePanelType == true) {
		totalLink2 = linkToSite.case.toLowerCase();
	} else {
		const totalLink = linkToSite.case + linkToSite.outPanel;
		totalLink2 = totalLink.toLowerCase();
	}


	// console.log(totalLink2);
	linkBtn.setAttribute('href', `https://liono.ru/product/${totalLink2}`);
}

document.querySelector('.link-to-siteBtn').addEventListener('click', e => {
	addLinkToSite();
});

createInPanelBox1();
createInPanelBox2();
createInPanelBox3();

createOutPanelBox1();
createOutPanelBox2();
createOutPanelBox3();

showCase();
showOutPanel();
showInPanel();
showKnob();
