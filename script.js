const caseApartList = [{
		name: 'М1 3к',
		panel: 'Одна панель',
		place: 'apartment',
		desc: 'металл 1,5 мм <br> 3-и контура уплотнителя',
		overPanel: true,
		about: 'Петли осевые,<br> 3 контура уплотнения,<br> МЕТАЛЛ 1,4 мм,<br> Коробка 135 мм,<br> Полотно 105-115мм,<br> Утеплитель мин.вата и пенополистирол,<br> 2 замка Гардиан 3 серии d ригелей 16 мм, <br>Ночная задвижка,<br> Цилиндр перфо ключ -верт. Эксцентрик,<br> Покрытие: черный муар с блесткой.',
		price: {
			milled6: 25805,
			milled16: 26845,
			milled16Glass: 26975,
			DDDmilled16: 30459,
			build20First: 28171,
			build20Second: 28340,
			build20Third: 28665
		}
	},
	{
		name: 'М2',
		panel: 'Две панели',
		place: 'apartment',
		desc: 'металл 1,5 мм <br> 3-и контура уплотнителя',
		overPanel: false,
		about: 'Петли осевые,<br> 3 контура уплотнения,<br> МЕТАЛЛ 1,4 мм,<br> Коробка 135 мм,<br> Полотно 105-115мм,<br> Утеплитель мин.вата и пенополистирол,<br> 2 замка Гардиан 3 серии d ригелей 16 мм,<br> Покрытие: черный муар с блесткой,<br> С внешней стороны панель МДФ ,<br> Эксцентрик',
		price: {
			milled6: 28028,
			milled16: 29055,
			milled16Glass: 29315,
			DDDmilled16: 32825,
			build20First: 30394,
			build20Second: 30615,
			build20Third: 30888
		}
	},
	{
		name: 'М7',
		panel: 'Одна панель',
		place: 'apartment',
		desc: 'металл 1,5 мм <br> 3-и контура уплотнителя',
		overPanel: true,
		about: 'Петли Барк,<br> 3 контура уплотнения, <br>МЕТАЛЛ 1,5 мм,<br> Закрытая утепленная коробка 115 мм,<br> Полотно 95-105 мм,<br> Утеплитель базальтовая плита, <br>2 замка: Бордер d 18 мм, Фуаро d 16 мм,<br> Цилиндр перфо,<br> Покрытие: муар мокко,<br> эксцентрик',
		price: {
			milled6: 27040,
			milled16: 28210,
			milled16Glass: 28340,
			DDDmilled16: 31850,
			build20First: 29510,
			build20Second: 29445,
			build20Third: 29835
		}
	},
	{
		name: 'Мерседес 2',
		panel: 'Две панели',
		place: 'apartment',
		desc: 'металл 2 мм <br> 3-и контура уплотнителя',
		overPanel: false,
		about: '3 осевые петли,<br> 3 контура уплотнения,<br>МЕТАЛЛ 2 мм,<br> Коробка 135 мм,<br> Полотно 105-115 мм,<br> Утеплитель мин.вата, Пенополистирол,<br> Замок сувальд. и цил.: Бордер professional, d 18 мм,<br> Броненакладка. порог матовая нерж.<br> Покрытие: черный муар с блесткой.<br> Эксцентрик* ',
		price: {
			milled6: 34970,
			milled16: 36140,
			milled16Glass: 36400,
			DDDmilled16: 39520,
			build20First: 38090,
			build20Second: 37700,
			build20Third: 37960
		}
	}
];

const caseHouseList = [{
		name: 'М5',
		panel: 'Одна панель',
		place: 'house',
		desc: 'металл 1,5 мм <br> 3-и контура уплотнителя',
		overPanel: true,
		about: 'Петли осевые,<br> 3 контура уплотнения (1 магнитный),<br> МЕТАЛЛ 1,5 мм,<br> Пластиковый двухкамерный Терморазрыв на коробе и полотне,<br> Коробка 165 мм,<br> Полотно 100-110 мм,<br> 2 сувальд. замка d ригелей 18 и 16 мм,<br> Авто накладки,<br> Порог матовая нержавейка,<br> Покрытие: цинкогрунт + черный муар с блесткой',
		price: {
			milled6: 34710,
			milled16: 35880,
			milled16Glass: 36140,
			DDDmilled16: 40014,
			build20First: 36790,
			build20Second: 37440,
			build20Third: 37830
		}
	},
	{
		name: 'М10',
		panel: 'Две панели',
		place: 'house',
		desc: 'металл 1,5 мм <br> 3-и контура уплотнителя',
		overPanel: false,
		about: 'петли осевые,<br> 3 контура уплотнения (1 магнитный),<br> МЕТАЛЛ 1,5 мм,<br> Пластиковый двухкамерный Терморазрыв на коробе и полотне, <br>Коробка 165 мм,<br> Полотно 115-125 мм, <br>2 сувальд. замка d ригелей 18 и 16 мм,<br> Авто накладки, <br>Порог матовая нержавейка,<br>Покрытие: цинкогрунт + черный муар с блесткой',
		price: {
			milled6: 39520,
			milled16: 40820,
			milled16Glass: 40950,
			DDDmilled16: 44850,
			build20First: 41860,
			build20Second: 42250,
			build20Third: 42640
		}
	}
];

const outPanelList = [
	{
		name: 'Бетон коричневый',
		place: 'apartment',
		price: 3400
	},
	{
		name: 'Бетон',
		place: 'apartment',
		price: 3400
	},
	{
		name: 'Венге серый',
		place: 'apartment',
		price: 1900
	},
	{
		name: 'Круг',
		place: 'apartment',
		price: 6200
	},
	{
		name: 'Ливерпуль',
		place: 'apartment',
		price: 4950
	},
	{
		name: 'Лиственница темная',
		place: 'apartment',
		price: 2200
	},
	{
		name: 'Лорд',
		place: 'apartment',
		price: 3300
	},
	// {
	// 	name: 'М1',
	// 	place: 'apartment',
	// 	price: 100
	// },
	// {
	// 	name: 'М5',
	// 	place: 'apartment',
	// 	price: 100
	// },
	// {
	// 	name: 'М7',
	// 	place: 'apartment',
	// 	price: 100
	// },
	{
		name: 'Мадрид',
		place: 'apartment',
		price: 6200
	},
	{
		name: 'Штукатурка',
		place: 'apartment',
		price: 6200
	}
];

const inPanelList = [
	{
		name: 'Вега',
		form: 'milled6'
	},
	{
		name: 'Геометрия',
		form: 'milled6'
	},
	{
		name: 'Лайн',
		form: 'milled6'
	},
	{
		name: 'Параллель венге',
		form: 'milled6'
	},
	{
		name: 'Экопатина',
		form: 'milled6'
	},
	{
		name: 'Афина шоколад',
		form: 'milled16'
	},
	{
		name: 'Версаль 2 дуб турин',
		form: 'milled16'
	},
	{
		name: 'Версаль 2 светлая',
		form: 'milled16'
	},
	{
		name: 'Версаль светлый',
		form: 'milled16'
	},
	{
		name: 'Версаль софт',
		form: 'milled16'
	},
	{
		name: 'Параллель светлая',
		form: 'milled6'
	},
	{
		name: 'Версаль темная',
		form: 'milled16'
	},
	{
		name: 'Вертикаль 5 софт белая',
		form: 'milled16Glass'
	},
	{
		name: 'Вертикаль венге',
		form: 'milled16Glass'
	},
	{
		name: 'Вертикаль кедр серый',
		form: 'milled16Glass'
	},
	{
		name: 'Токио бетон',
		form: 'milled6'
	},
	{
		name: 'Вертикаль светлая',
		form: 'milled16Glass'
	},
	{
		name: 'Геометрия 2 снежное дерево',
		form: 'milled16Glass'
	},
	{
		name: 'Италия',
		form: 'milled16'
	},
	{
		name: 'Канцлер',
		form: 'milled16'
	},
	{
		name: 'Классика',
		form: 'milled16Glass'
	},
	{
		name: 'Кристалл',
		form: 'milled16'
	},
	{
		name: 'Лорд венге',
		form: 'milled16'
	},
	{
		name: 'Лорд орех светлый',
		form: 'milled16'
	},
	{
		name: 'Нова',
		form: 'milled16'
	},
	{
		name: 'Сенатор орех тисненный',
		form: 'milled16'
	},
	{
		name: 'Сенатор сосна',
		form: 'milled16'
	},
	{
		name: 'Версаль 3 патина',
		form: 'DDDmilled16'
	},
	{
		name: 'Кардинал',
		form: 'DDDmilled16'
	},
	{
		name: 'Круг светлая',
		form: 'DDDmilled16'
	},
	{
		name: 'Круг темная',
		form: 'DDDmilled16'
	},
	{
		name: 'Патрисия',
		form: 'DDDmilled16'
	},
	{
		name: 'Софи',
		form: 'DDDmilled16'
	},
	{
		name: 'Фреш',
		form: 'milled6'
	},
	{
		name: 'Цветок',
		form: 'DDDmilled16'
	},
	{
		name: 'Стиль 1 венге',
		form: 'build20First'
	},
	{
		name: 'Стиль 1 дуб шале серебро',
		form: 'build20First'
	},
	{
		name: 'Стиль 1 клен айс',
		form: 'build20First'
	},
	{
		name: 'Стиль 1 лист бежевый',
		form: 'build20First'
	},
	{
		name: 'Неаполь белый',
		form: 'build20First'
	},
	{
		name: 'Неаполь серебро',
		form: 'build20First'
	},
	{
		name: 'Ника светлая',
		form: 'build20Second'
	},
	{
		name: 'Ника темная',
		form: 'build20Second'
	},
	{
		name: 'ку12',
		form: 'build20Second'
	},
	{
		name: 'ку22',
		form: 'build20Second'
	},
	{
		name: 'Турин',
		form: 'build20Third'
	},
	{
		name: '633 снежное дерево',
		form: 'build20Third'
	},

];


const knobList = [
	{
		name: 'FUARO Top XL (сатинированный хром)',
		price: 1900
	},
	{
		name: 'FUARO Top XL (хром)',
		price: 1900
	},
	{
		name: 'FUARO Top XL (черный)',
		price: 1900
	},
	{
		name: 'Palidore 75',
		price: 1
	}
];

const caseApart = document.querySelector('.case-apartment'),
		caseHouse = document.querySelector('.case-house'),
		inPanel = document.querySelector('.inPanel'),
		outPanel = document.querySelector('.outPanel'),
		knob = document.querySelector('.knob-box'),
		caseText = document.querySelector('.case-box__text'),
		// outPanelText = document.querySelector('.outPanel-box__text'),
		// inPanelText = document.querySelector('.inPanel-box__text'),
		// knobText = document.querySelector('.knob-box__text'),
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
		outPanelBotBut = document.querySelector('.outPanel-botBut'),
		caseApartmentBox = document.querySelector('.case-apartment-box'),
		caseApartmentWrapper = document.querySelector('.case-apartment-wrapper'),
		caseApartmentTopBut = document.querySelector('.case-apartment-topBut'),
		caseApartmentBotBut = document.querySelector('.case-apartment-botBut');

const intModalBut = document.querySelector('.func__interior'),
		intModal = document.querySelector('.int-modal'),
		intModalBox = document.querySelector('.int-modal__box'),
		intModalUnder = document.querySelector('.int-modal__underlay'),
		intModalClose = document.querySelector('.int-modal__close-box');

const descModalBut = document.querySelector('.func__about'),
		descModal = document.querySelector('.desc-modal'),
		descModalBox = document.querySelector('.desc-modal__box'),
		descModalUnder = document.querySelector('.desc-modal__underlay'),
		descModalText = document.querySelector('.desc-modal__text'),
		descModalClose = document.querySelector('.desc-modal__close');


descModalBut.addEventListener('click', e => {
	descModal.style.display = 'block';
});

descModalClose.addEventListener('click', e => {
	descModal.style.display = 'none';
});


intModalBut.addEventListener('click', e => {
	intModal.style.display = 'block';

	intModalBox.appendChild(resultIn.cloneNode(true));

			const intModalResult = intModalBox.querySelectorAll('.resultIn');
			intModalResult.forEach(function (item, i, arr) {
				item.classList.remove('resultIn');
				item.classList.add('int-modal-result');
			});
});

intModalClose.addEventListener('click', e => {
	intModal.style.display = 'none';
	intModalBox.innerHTML = '';
});



function apartButFunc(){
	apartBut.classList.add('border');
	houseBut.classList.remove('border');

	caseText.style.display = 'flex';

	caseApartmentBox.classList.add('flex');
	caseHouse.classList.remove('flex');
	inBut.style.backgroundColor = '#f8f5f0';
	document.querySelector('.block-for-margin').style.display = 'block';
}

apartBut.addEventListener('click', e => {
	apartButFunc();
});

function houseButFunc(){
	houseBut.classList.add('border');
	apartBut.classList.remove('border');

	caseText.style.display = 'flex';

	caseHouse.classList.add('flex');
	caseApartmentBox.classList.remove('flex');
	inBut.style.backgroundColor = '#f8f5f0';
	document.querySelector('.block-for-margin').style.display = 'block';
}

houseBut.addEventListener('click', e => {
	houseButFunc();
});

function hideAll() {
	outPanel.style.display = 'none';
	inPanel.style.display = 'none';
	knob.style.display = 'none';
	knobBut.style.backgroundColor = '#fff';
	inBut.style.backgroundColor = '#fff';
	outBut.style.backgroundColor = '#fff';

	// knobBut.style.borderBottom = '3px solid #a76d50';
	// inBut.style.borderBottom = '3px solid #a76d50';
	// outBut.style.borderBottom = '3px solid #a76d50';
	// outPanelText.style.display = 'none';
	// inPanelText.style.display = 'none';
	// knobText.style.display = 'none';
}

function inButEvent() {
	hideAll();
	// outBut.parentNode.style.justifyContent = 'end';

	inPanel.style.display = 'flex';
	inBut.style.backgroundColor = '#f8f5f0';
	inBut.style.borderBottom = 'none';
	// inPanelText.style.display = 'flex';

	// knobBut.style.display = 'none';
	// outBut.style.display = 'block';
	// inBut.style.display = 'none';
}

function outButEvent() {
	hideAll();
	// inBut.parentNode.style.justifyContent = 'space-between';

	outPanel.style.display = 'flex';
	outBut.style.backgroundColor = '#f8f5f0';
	outBut.style.borderBottom = 'none';

	// outPanelText.style.display = 'flex';

	// inBut.style.display = 'block';
	// outBut.style.display = 'none';
	// knobBut.style.display = 'block';
}

function knobButEvent() {
	hideAll();
	// knobBut.parentNode.style.justifyContent = 'start';

	knob.style.display = 'flex';
	knobBut.style.backgroundColor = '#f8f5f0';
	knobBut.style.borderBottom = 'none';

	// knobText.style.display = 'flex';

	// inBut.style.display = 'none';
	// outBut.style.display = 'block';
	// knobBut.style.display = 'none';
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
	// caseApartList.forEach((item, i) => {
	// 		let div = document.createElement('div');
	// 		div.className = 'case__item';
	// 		div.setAttribute('data-src', i);
	// 		div.innerHTML = `	<p class="case__item-name">${item.name}</p>
	// 								<p class="case__item-panel">${item.panel}</p>
	// 								<p class="case__item-desc">${item.desc}</p>`;
	// 		caseApart.append(div);
	// });

	caseHouseList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'case__item';
			div.setAttribute('data-src', i);
			div.innerHTML = ` <p class="case__item-name">${item.name}</p>
									<p class="case__item-panel">${item.panel}</p>
									<p class="case__item-desc">${item.desc}</p>`;
			caseHouse.append(div);
	});
}


function createCaseApartmentBox(i) {
	if(caseApartList.length > i * 2) {
		const caseApartBox = document.querySelectorAll('.case-apartment');
		let div = document.createElement('div');
		div.className = 'case-box case-apartment';
		caseApartBox[i-1].after(div);

		const caseApartmentDots = document.querySelectorAll('.case-apartment-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'case-apartment-dots__item';
		caseApartmentDots[i-1].after(div1);
	}
}

for (let i = 1; i < 4; i++) {
	createCaseApartmentBox(i);
}


function showCaseApartment() {
	const caseApartBox = document.querySelectorAll('.case-apartment');
	caseApartList.forEach((item, i) => {
		for (let a = 0; a < 4; a++) {
			if(i+1 > a * 2 && i+1 <= a * 2 + 2) {
				let div = document.createElement('div');
				div.className = 'case__item';
				div.setAttribute('data-src', i);
				div.innerHTML = `	<p class="case__item-name">${item.name}</p>
										<p class="case__item-panel">${item.panel}</p>
										<p class="case__item-desc">${item.desc}</p>`;
				caseApartBox[a].append(div);

			}
		}
	});
}

let caseApartmentBoxNum = 0;

function hideAllCaseApartmentBox() {
	document.querySelectorAll('.case-apartment').forEach((item, i) => {
		item.style.display = 'none';
	});
	document.querySelectorAll('.case-apartment-dots__item').forEach((item, i) => {
		item.classList.remove('case-apartment-dots__itemActive');
	});
}

caseApartmentTopBut.addEventListener('click', e => {
	if(caseApartmentBoxNum > 0) {
		caseApartmentBoxNum = caseApartmentBoxNum - 1;
		hideAllCaseApartmentBox();

		document.querySelectorAll('.case-apartment')[caseApartmentBoxNum].style.display = 'flex';
		document.querySelectorAll('.case-apartment-dots__item')[caseApartmentBoxNum].classList.add('case-apartment-dots__itemActive');
	}
});

caseApartmentBotBut.addEventListener('click', e => {
	if(caseApartmentBoxNum < document.querySelectorAll('.case-apartment').length - 1) {
		caseApartmentBoxNum = caseApartmentBoxNum + 1;
		hideAllCaseApartmentBox();

		document.querySelectorAll('.case-apartment')[caseApartmentBoxNum].style.display = 'flex';
		document.querySelectorAll('.case-apartment-dots__item')[caseApartmentBoxNum].classList.add('case-apartment-dots__itemActive');
	}
});



function createOutPanelBox(i) {
	if(outPanelList.length > i * 8) {
		const outPanelBox = document.querySelectorAll('.outPanel-box');
		let div = document.createElement('div');
		div.className = 'outPanel-box';
		outPanelBox[i-1].after(div);

		const outPanelDots = document.querySelectorAll('.outPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'outPanel-dots__item';
		outPanelDots[i-1].after(div1);
	}
}

for (let i = 1; i < 15; i++) {
	createOutPanelBox(i);
}


function showOutPanel() {
	const outPanelBox = document.querySelectorAll('.outPanel-box');
	outPanelList.forEach((item, i) => {
		for (let a = 0; a < 14; a++) {
			if(i+1 > a * 8 && i+1 <= a * 8 + 8) {
				let div = document.createElement('div');
				div.className = 'outPanel__item';
				div.setAttribute('data-src', i);
				div.innerHTML = ` <img src="./img/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
				outPanelBox[a].append(div);

			}
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


function createInPanelBox(i) {
	if(inPanelList.length > i * 8) {
		const inPanelBox = document.querySelectorAll('.inPanel-box');
		let div = document.createElement('div');
		div.className = 'inPanel-box';
		inPanelBox[i-1].after(div);

		const inPanelDots = document.querySelectorAll('.inPanel-dots__item');
		let div1 = document.createElement('div');
		div1.className = 'inPanel-dots__item';
		inPanelDots[i-1].after(div1);
	}
}

for (let i = 1; i < 15; i++) {
	createInPanelBox(i);
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

		for (let a = 0; a < 14; a++) {
			if(i+1 > a * 8 && i+1 <= a * 8 + 8) {
				let div = document.createElement('div');
				div.className = 'inPanel__item';
				div.setAttribute('data-src', i);
				div.innerHTML = ` <img src="./img/mini/Внутренние панели/${item.name}.png" class="inPanel__item-img">`;

				inPanelBox[a].append(div);
			}
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

		// if (key == 'price') {
		// 	price.case = caseApartList[a][key];
		// 	considerPrice();
		// }

		if (key == 'price') {
			price.caseForm = caseApartList[a][key];
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
		descModalText.innerHTML = `
		Информация о модели: <span style = "font-weight: 600;";>${b}</span>
		<br>
		${caseApartList[a].about}`;

	}

	document.querySelector('.func__info').innerHTML = `
		<p class="func__info-name">${caseApartList[a].name}</p>
		<p class="func__info-desc">${caseApartList[a].desc}</p>
	`;

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
			price.caseForm = caseHouseList[a][key];
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

	document.querySelector('.func__info').innerHTML = `
		<p class="func__info-name">${caseHouseList[a].name}</p>
		<p class="func__info-desc">${caseHouseList[a].desc}</p>
	`;

	descModalText.innerHTML = `Информация о модели: <span style = "font-weight: 600;";>${b}</span>
	<br>
	${caseHouseList[a].about}`;
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

		if (key == 'form') {
			price.inPanelForm = inPanelList[a][key];
			// console.log(price.inPanelForm);
			considerPrice();
		}


	}
	// console.log(b);

	document.querySelector('.facingIn-result').remove();
	let img = document.createElement('img');
	img.className = 'resultIn__item facingIn-result';
	img.setAttribute('src', `./img/result/Внутренние панели/${b}.png`);
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



document.querySelectorAll('.case-apartment')[0].addEventListener('click', e => {
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

	if (e.target && e.target.className == 'case__item-panel')
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
document.querySelectorAll('.case-apartment')[1].addEventListener('click', e => {
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

	if (e.target && e.target.className == 'case__item-panel')
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

	if (e.target && e.target.className == 'case__item-panel')
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
	knob: 0,
	casePanelType: '',
	inPanelForm: '',
	caseForm: ''
};

function considerPrice() {
	document.querySelector('.func__price').innerHTML = '<span>Цена:</span>';

	for (let key in price.caseForm) {
		if(key == price.inPanelForm) {
			price.case = price.caseForm[key];
		}
	}

	// price.case = price.caseForm

	if (price.casePanelType == true) {
		if (price.case != 0  && price.knob != 0) {
			const totalPrice = price.case + price.knob;
			document.querySelector('.func__price').innerHTML = `<span>Цена:</span>  ${totalPrice}`;
		}
	} else {
		if (price.case != 0 && price.outPanel != 0 && price.knob != 0) {
		const totalPrice = price.case + price.outPanel + price.knob;
		document.querySelector('.func__price').innerHTML = `<span>Цена:</span> ${totalPrice}`;
		}
	}

	// console.log(price);

}


randomBut.addEventListener('click', e => {
	inButEvent();
	// apartButFunc();
	function randomCaseApart() {
		let b = Math.floor(Math.random() * 2);
		const	itemParent = document.querySelectorAll('.case-apartment'),
				item = itemParent[b].querySelectorAll('.case__item'),
				a = Math.floor(Math.random() * item.length);

		caseBorder();
		item[a].classList.add('border');


			 if (b == 0) {
				caseApartResult(a);
			 } else {
				caseApartResult(a+2);
			 }
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

	if(apartBut.classList.contains('border') || houseBut.classList.contains('border')) {
		if (apartBut.classList.contains('border')) {
			randomCaseApart();
		} else {
			randomCaseHouse();
		}
	}else {
		apartButFunc();
		randomCaseApart();
	}

	randomInPanel();
	randomKnob();
});


function minPrice() {
	let caseApartArr = [];
	let caseHouseArr = [];
	let outPanelArr = [];
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
		caseApartArr[a] = item.price.milled6;
	});

	lowApartCaseNum = Math.min.apply(null, caseApartArr);

	caseApartList.forEach((item, a) => {
		if (caseApartList[a].price.milled6 == lowApartCaseNum) {
			ApartCaseNum = a;
		}
	});


	caseHouseList.forEach((item, a) => {
		caseHouseArr[a] = item.price.milled6;
	});

	lowHouseCaseNum = Math.min.apply(null, caseHouseArr);

	caseHouseList.forEach((item, a) => {
		if (caseHouseList[a].price.milled6 == lowHouseCaseNum) {
			HouseCaseNum = a;
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

		inPanelList.forEach((item, a) => {
			if (inPanelList[a].form == 'milled6') {
				inPanelNum = a;
			}
		});
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

		inPanelList.forEach((item, a) => {
			if (inPanelList[a].form == 'milled6') {
				inPanelNum = a;
			}
		});
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
		caseApartArr[a] = item.price.DDDmilled16;
	});

	lowApartCaseNum = Math.max.apply(null, caseApartArr);

	caseApartList.forEach((item, a) => {
		if (caseApartList[a].price.DDDmilled16 == lowApartCaseNum) {
			ApartCaseNum = a;
		}
	});


	caseHouseList.forEach((item, a) => {
		caseHouseArr[a] = item.price.DDDmilled16;
	});

	lowHouseCaseNum = Math.max.apply(null, caseHouseArr);

	caseHouseList.forEach((item, a) => {
		if (caseHouseList[a].price.DDDmilled16 == lowHouseCaseNum) {
			HouseCaseNum = a;
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

		inPanelList.forEach((item, a) => {
			if (inPanelList[a].form == 'DDDmilled16') {
				inPanelNum = a;
			}
		});
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

		inPanelList.forEach((item, a) => {
			if (inPanelList[a].form == 'DDDmilled16') {
				inPanelNum = a;
			}
		});
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

showCase();
showCaseApartment();
showOutPanel();
showInPanel();
showKnob();
