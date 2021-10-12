const caseList = [{
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
	},
	{
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
		resultOut = document.querySelector('.resultOut'),
		resultIn = document.querySelector('.resultIn');

const apartBut = document.querySelector('.apartment'),
		houseBut = document.querySelector('.house');

const caseInside = document.querySelector('.case-inside');



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


function showCaseApart() {
	caseList.forEach((item, i) => {
		if (item.place == 'apartment') {
			let div = document.createElement('div');
			div.className = 'case__item';
			div.setAttribute('data-src', i);
			div.innerHTML = `	<p class="case__item-name">${item.name}</p>
									<p class="case__item-desc">${item.desc}</p>`;
			caseApart.append(div);
		}
	});
}

function showCaseHouse() {
	caseList.forEach((item, i) => {
		if (item.place == 'house') {
			let div = document.createElement('div');
			div.className = 'case__item';
			div.setAttribute('data-src', `./img/result/Корпуса/В дом/${item.name}.png`);
			div.innerHTML = ` <p class="case__item-name">${item.name}</p>
									<p class="case__item-desc">${item.desc}</p>`;
			caseHouse.append(div);
		}
	});
}

function showOutPanel() {
	outPanelList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'outPanel__item';
			div.setAttribute('data-src', `./img/result/Внешние панели/${item.name}.png`);
			div.innerHTML = ` <img data-src='./img/result/Внешние панели/${item.name}.png' src="./img/mini/Внешние панели/${item.name}.png" class="outPanel__item-img">`;
			outPanel.append(div);
	});
}

function showInPanel() {
	inPanelList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'inPanel__item';
			div.innerHTML = ` <img data-src="./img/result/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" src="./img/mini/Внутренние панели/3Д фрезерованные 16мм/${item.name}.png" class="inPanel__item-img">`;
			inPanel.append(div);
	});
}

function showKnob() {
	knobList.forEach((item, i) => {
			let div = document.createElement('div');
			div.className = 'knob__item';
			div.innerHTML = ` <img data-src="${item.name}.png" src="./img/mini/Фурнитура/${item.name}.png" class="knob__item-img">`;
			knob.append(div);
	});
}

caseApart.addEventListener('click', e => {

	let a = '';

	if (e.target && e.target.className == 'case__item')
	{
		a = e.target.getAttribute('data-src');

	}

	if (e.target && e.target.className == 'case__item-name')
	{
		a = e.target.parentNode.getAttribute('data-src');
	}

	if (e.target && e.target.className == 'case__item-desc')
	{
		a = e.target.parentNode.getAttribute('data-src');
	}

	if (a != '')
	{
		let b = '';
		for (let key in caseList[a]) {
			if (key == 'name') {
				// console.log(caseList[a][key]);
				b = caseList[a][key];
			}
		}
		console.log(b);

		document.querySelector('.case-result').remove();
		let img = document.createElement('img');
		img.className = 'resultOut__item case-result';
		img.setAttribute('src', `./img/result/Корпуса/В квартиру/${b}.png`);
		resultOut.append(img);

		caseInside.style.display = 'block';
		outPanel.style.display = 'flex';
	}

});

caseHouse.addEventListener('click', e => {

	let a = '';

	if (e.target && e.target.className == 'case__item')
	{
		a = e.target.getAttribute('data-src');

	}

	if (e.target && e.target.className == 'case__item-name')
	{
		a = e.target.parentNode.getAttribute('data-src');
	}

	if (e.target && e.target.className == 'case__item-desc')
	{
		a = e.target.parentNode.getAttribute('data-src');
	}

	if (a != '')
	{
		document.querySelector('.case-result').remove();
		let img = document.createElement('img');
		img.className = 'resultOut__item case-result';
		img.setAttribute('src', `${a}`);
		resultOut.append(img);

		caseInside.style.display = 'block';
		outPanel.style.display = 'flex';
	}

});




outPanel.addEventListener('click', e => {

	let a = '';

	if (e.target && e.target.className == 'outPanel__item-img')
	{
		a = e.target.getAttribute('data-src');
	}

	// if (e.target && e.target.className == 'case__item-name')
	// {
	// 	a = e.target.parentNode.getAttribute('data-src');
	// }

	// if (e.target && e.target.className == 'case__item-desc')
	// {
	// 	a = e.target.parentNode.getAttribute('data-src');
	// }

	if (a != '')
	{
		document.querySelector('.facingOut-result').remove();
		let img = document.createElement('img');
		img.className = 'resultOut__item facingOut-result';
		img.setAttribute('src', `${a}`);
		// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
		resultOut.append(img);

		inPanel.style.display = 'flex';
	}

});

inPanel.addEventListener('click', e => {

	let a = '';

	if (e.target && e.target.className == 'inPanel__item-img')
	{
		a = e.target.getAttribute('data-src');
	}

	// if (e.target && e.target.className == 'case__item-name')
	// {
	// 	a = e.target.parentNode.getAttribute('data-src');
	// }

	// if (e.target && e.target.className == 'case__item-desc')
	// {
	// 	a = e.target.parentNode.getAttribute('data-src');
	// }

	if (a != '')
	{
		document.querySelector('.facingIn-result').remove();
		let img = document.createElement('img');
		img.className = 'resultIn__item facingIn-result';
		img.setAttribute('src', `${a}`);
		// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
		resultIn.append(img);

		knob.style.display = 'flex';
	}

});

knob.addEventListener('click', e => {

	let a = '';

	if (e.target && e.target.className == 'knob__item-img')
	{
		a = e.target.getAttribute('data-src');
	}

	// if (e.target && e.target.className == 'case__item-name')
	// {
	// 	a = e.target.parentNode.getAttribute('data-src');
	// }

	// if (e.target && e.target.className == 'case__item-desc')
	// {
	// 	a = e.target.parentNode.getAttribute('data-src');
	// }

	if (a != '')
	{
		document.querySelector('.knobOut-result').remove();
		let imgOut = document.createElement('img');
		imgOut.className = 'resultOut__item knobOut-result';
		imgOut.setAttribute('src', `./img/result/Внешняя Фурнитура/${a}`);
		// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
		resultOut.append(imgOut);

		document.querySelector('.knobIn-result').remove();
		let imgIn = document.createElement('img');
		imgIn.className = 'resultIn__item knobIn-result';
		imgIn.setAttribute('src', `./img/result/Внутренняя Фурнитура/${a}`);
		// img.innerHTML = ` <img src="${src}" class="outPanel__item-img">`;
		resultIn.append(imgIn);
	}

});

// for (let key in caseList[0]) {
// 	if (key == 'name') {
// 		console.log(caseList[0][key]);
// 	}
// }


showCaseApart();
showCaseHouse();

showOutPanel();
showInPanel();

showKnob();
