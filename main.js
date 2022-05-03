// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdrachten
//1a)
const tvTypes = inventory.map((tv) => {
  return tv.type;
});
console.log(tvTypes);

//1b)
const tvSoldOut = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;
});
console.log(tvSoldOut);

//1c)
const tvAmbiLight = inventory.filter((tv) => {
  return tv.options.ambiLight;
});
console.log(tvAmbiLight);

//1d)
inventory.sort(function (x, y) {
  return x.price - y.price;
});
console.table(inventory);

//2a)
let tvSold = 0;
for (let i = 0; i < inventory.length; i++) {
  tvSold += inventory[i].sold;
}
console.log(tvSold);

//2b)
const soldTvs = document.getElementById('tvSold');
soldTvs.innerHTML = `
<h1>Televisies verkocht:</h1>
<p>${tvSold}</p>
`

//2c)
let tvBought = 0;
for (let i = 0; i < inventory.length; i++) {
  tvBought += inventory[i].originalStock;
}
console.log(tvBought);

//2d)
const boughtTvs = document.getElementById('tvBought');
boughtTvs.innerHTML = `
<h1>Televisies ingekocht:</h1>
<p>${tvBought}</p>
`

//2e)
let tvForSale = tvBought - tvSold;
const forSaleTvs = document.getElementById('tvForSale');
forSaleTvs.innerHTML = `
<h1>Televisies te koop:</h1>
<p>${tvForSale}</p>
`

//3a&b)
function createBrandList(tvArray) {
  const tvBrands = inventory.map((tv) => {
    return `<li>${tv.brand}</li>`;
  })
  const tvBrandList = document.getElementById('tvBrands');
  tvBrandList.innerHTML = `
    <h1>Lijst van types</h1>
    <p>${tvBrands.join('')}</p>
    `
}

createBrandList(inventory);

//4a)
function toString(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
}

toString(inventory[0]);

//4b)
function toPrice(tvPrice) {
  return `€${tvPrice},-`;
}

console.log(toPrice(100));

//4c1)
// function toSizeString(tvSizesArray) {
//   let tvSize = '';
//   for (let i = 0; i < tvSizesArray.length; i++) {
//     const size = tvSizesArray[i];
//     tvSize += `${size} inch (${Math.round(size * 2.54)} cm)`;
//     if (i < tvSizesArray.length - 1) {
//       tvSize += ` | `;
//     }
//   }
//   return tvSize;
// }

//4c2)
function toSizeString(tvSizesArray) {
  let tvSize = '';
  let counter = 0;
  tvSizesArray.map((size) => {
    tvSize += `${size} inch (${Math.round(size * 2.54)} cm)`;
    //ternary if statement
    (counter < tvSizesArray.length -1) ? tvSize += ` | ` : tvSize += '';
    counter++;
  })
  return tvSize;
}

console.log(toSizeString([11, 12, 13, 32]));

//4d)
// const tvDescription = document.getElementById('tvDescription');
// tvDescription.innerHTML = `
// <p>${toString(inventory[3])}</p>
// <p>${toPrice(inventory[3].price)}</p>
// <p>${toSizeString(inventory[3].availableSizes)}</p>
// `

//4e)
const tvDescriptions = document.getElementById('tvDescriptions')
function tvGeneratorFunctie(tvArray) {
inventory.map((tv) => {
  tvDescriptions.innerHTML += `
  <li>
    <h1>${toString(tv)}</h1>
    <h2>${toPrice(tv.price)}</h2>
    <p>${toSizeString(tv.availableSizes)}</p>
  </li>
  `
  })
}

tvGeneratorFunctie(inventory);

