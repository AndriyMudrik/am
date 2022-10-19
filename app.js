const div = document.createElement('div'); // створює елемент div 
div.classList.add('wrapper'); // додає клас елементу
const body = document.body; // звернувся до елемента 
body.appendChild(div); // помістив елементів div в body

const heading = document.createElement('h1'); // створив елемент h1

heading.textContent = 'Document Object Model' // добавив текст в h1

div.insertAdjacentElement("beforebegin", heading); // добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.

const list = `
    <ul>
        <li> one </li>
        <li> two </li>
        <li> three </li>
    </ul>
`; // створив список

div.innerHTML = list; // помістив список в div


const img = document.createElement('img'); // створив елемент img

// img.src = 'https://picsum.photos/240' // додав посилання на фото
img.width = 240; // задав ширину

// img.classList.add('super'); // додав клас для img
// img.alt = 'Super Man'; //

// div.appendChild(img);

const elHtml = `
    <div class='pDiv'>   
        <p>1</p>
        <p>2</p>
    </div> 
`; // створив div з двома параграфами 

const ulList = div.querySelector('ul'); // в елементі div, вибрали елементи ul для задання їм функцій і запитів
ulList.insertAdjacentHTML("beforebegin",elHtml) // додав перед елементами ul 2 параграфи 

const pdiv = document.querySelector('.pDiv'); // звернувся до елементу pdiv
pdiv.children[1].classList.add('text'); // задав другому параграфу клас

pdiv.firstElementChild.remove(); // видалив перший параграф в pDiv


const generateAutoCard = (brand,year,color,) =>{
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
    <div class='wrapper'>
    <div class = 'autoCard'>
        <h2>${brand.toUpperCase()} ${year}</h2>
        <p>Car: <br> ${brand.toUpperCase()} ${year}  <br>Age of the car - ${curYear - year}</p>
        <p>Color: ${color}</p.
        <br><button type='button' class='btn'> Delete</button>
    </div>
    </div>
   `;
} // create function 'brand year'

const carsDiv = document.createElement('div'); // створив div
carsDiv.classList.add('autos'); // задав йому клас 

const carsList = [
    {brand: 'Ford', year: 2013, color:'Metal'},
    {brand:'Volkcwagen', year: 2016, color: 'Blue'},
    {brand: 'Nissan', year: 2013, color:'Black'}
]; // створив масив об'єктів 

const carsHtml = carsList.map(car => {
    return generateAutoCard(car.brand,car.year,car.color);
}).join(''); // перебрав масив і передав в функцію generateAutoCard дані з обєктів масивів і за допомогою join об'єднав

carsDiv.innerHTML = carsHtml; // 

div.insertAdjacentElement('beforebegin', carsDiv);



