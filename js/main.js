

//==================NAV FUNCTIONALITY=================//

//OPEN & CLOSE NAV
let navCount = 1;
document.querySelector('.hamburger').addEventListener('click', (e) => {
   
  let isEven = countNum => countNum % 2 === 0 ? true : false;
  if (isEven(navCount) === false) {
      openSlideMenu();
  } else if (isEven(navCount) === true) {
      closeSlideMenu();
  }
  e.preventDefault();
});

//OPEN NAV MENU
function openSlideMenu() {
  document.getElementById('side-menu').style.height = '3rem';
  document.querySelector('.navigation__icon1').style.background = 'white';
  document.querySelector('.navigation__icon3').style.background = 'white';
  // document.getElementById('main').style.marginLeft = '250px';
  navCount = 0;
  console.log(navCount);
  menuIconOpen();
};

//CLOSE NAV MENU
function closeSlideMenu() {
  document.getElementById('side-menu').style.height = '0';
  document.querySelector('.navigation__icon1').style.background = '#333';
  document.querySelector('.navigation__icon3').style.background = '#333';
  // document.getElementById('main').style.marginLeft = '0';
  navCount = 1;
  console.log(navCount)
  menuIconClosed();
  
};


//UI flip hamburger to X
function menuIconOpen() {
  let iconTop = document.querySelector('.navigation__icon1');
  iconTop.style.transform = "rotate(45deg)";
  iconTop.style.top = ".5rem";
  iconTop.style.transition = 'all .2s';

  document.querySelector('.navigation__icon2').style.opacity = '0';

  let iconBottom = document.querySelector('.navigation__icon3')
  iconBottom.style.transform = "rotate(-45deg)";
  iconBottom.style.top = ".5rem";
  iconBottom.style.transition = 'all .2s';
}

//UI flip hamburger back 
function menuIconClosed() {
  let iconTop = document.querySelector('.navigation__icon1');
  iconTop.style.transform = "rotate(0)";
  iconTop.style.top = "0";
  iconTop.style.transition = 'all .2s';

  let iconMiddle = document.querySelector('.navigation__icon2');
  iconMiddle.style.opacity = '1';
  // iconMiddle.style.transition = 'all .2s';

  let iconBottom = document.querySelector('.navigation__icon3')
  iconBottom.style.transform = "rotate(0)";
  iconBottom.style.top = "100%";
  iconBottom.style.transition = 'all .2s';
}

//close menu and reset count on click outside menu to return hamburger to original state

// document.addEventListener('mouseup', function(e){
//   let navAll = document.querySelector('.nav-all');
//   let nav1 = document.querySelector('.navigation__icon1')
//   let nav2 = document.querySelector('.navigation__icon2')
//   let sideMenu = document.getElementById('side-menu');
  // let slider = document.querySelector('.onebg');


  // if (e.target.parentElement.className === 'test') {
  //   console.log('yes');
  //   document.getElementById('side-menu').style.height = '0';
  //   document.querySelector('.navigation__icon1').style.background = '#333';
  //   document.querySelector('.navigation__icon3').style.background = '#333';
    
  //   navCount = 1; 
  //   menuIconClosed();
  //   console.log(navCount);
  // } else {
  //   console.log(e.target.className);
  // }

  // e.preventDefault();
  // });



function navCloseFunction(event) { 
  // alert(event.currentTarget.nodeName);

  if (event.currentTarget.className === 'navCloseFunction') {
    // console.log('navcloseworked');
    document.getElementById('side-menu').style.height = '0';
    document.querySelector('.navigation__icon1').style.background = '#333';
    document.querySelector('.navigation__icon3').style.background = '#333';
    
    navCount = 1; 
    menuIconClosed();
    // console.log(navCount);
  } else {
    // console.log(event.target.className);
  }
}












/////////////////////////////////////////////////////////


////////////////////////////////IMAGE SLIDER///////////////////////




//Buttons UI opacity for slide

(function showSlideShowButtons() {

  if (document.body.classList.contains('index')) {
    document.getElementById('carSlideShow').addEventListener('mouseover', function(){
      let slideButton = document.querySelectorAll('.slideButton');
      
      slideButton[0].style.opacity = 1;
      slideButton[1].style.opacity = 1;
    });
    document.getElementById('carSlideShow').addEventListener('mouseout', function(){
      let slideButton = document.querySelectorAll('.slideButton');
      
      slideButton[0].style.opacity = 0;
      slideButton[1].style.opacity = 0;
    });
  }
}());


//buttons to go prev or next
let slideIndex = 1;
showDivs(slideIndex);
 
function plusDivs(slideCount) {
  showDivs(slideIndex += slideCount);
}


function showDivs(slideCount) {
  if (document.body.classList.contains('index')) {
    let i;
    let slide = document.getElementsByClassName("carSlides");
    if (slideCount > slide.length) {slideIndex = 1}    
    if (slideCount < 1) {slideIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
    }
    slide[slideIndex-1].style.display = "block";  
  }
}

// auto slideshow
let carSlideShowIndex = 0;

function carSlideShow() {
  if (document.body.classList.contains('index')) {
    let i;
    let carSlides = document.getElementsByClassName("carSlides");
    for (i = 0; i < carSlides.length; i++) {
      carSlides[i].style.display = "none";  
    }
    carSlideShowIndex++;
    if (carSlideShowIndex > carSlides.length) {carSlideShowIndex = 1}    
    carSlides[carSlideShowIndex-1].style.display = "block";  
    setTimeout(carSlideShow, 10000);    
  } 
}
carSlideShow();
  







////////////////////////////////////////////////////




class Car {
  constructor(name, year, price, miles, color, sideFront, front, back, side) {
    this.name = name;
    this.year = year;
    this.price = price;
    this.miles = miles;
    this.color = color;
    this.sideFront = sideFront;
    this.front = front;
    this.back = back;
    this.side = side;
  }
  //Engine functin for radio button choice
  static enginePrice(cost) {

    if (cost == '500') {
      sessionStorage.setItem('engine', 500)
      console.log(cost);
    } else {
      sessionStorage.setItem('engine', 0);
      console.log(cost);
    }
    totalCarPrice();
    return cost;
  }
  //Accessory function for checklist
  static accessoryPrice() {
    let accessory1 = document.getElementById('addItem1').checked;
    let accessory2 = document.getElementById('addItem2').checked;
    let accessory3 = document.getElementById('addItem3').checked;
    let accessoryTotal1;
    let accessoryTotal2;
    let accessoryTotal3;

    if (accessory1 === true) {
      sessionStorage.setItem('alloy wheels', 75);
      accessoryTotal1 = 75;
    } else if (accessory1 === false) {
      sessionStorage.setItem('alloy wheels', 0);
      accessoryTotal1 = 0;
    }
    if (accessory2 === true) {
      sessionStorage.setItem('leather mats', 75);
      accessoryTotal2 = 75;
    } else if (accessory2 === false) {
      sessionStorage.setItem('leather mats', 0);
      accessoryTotal2 = 0;
    }
    if (accessory3 === true) {
      sessionStorage.setItem('cargo tote', 75);
      accessoryTotal3 = 75;
    } else if (accessory3 === false) {
      sessionStorage.setItem('cargo tote', 0);
      accessoryTotal3 = 0;
    }
    totalCarPrice();
  }
} //construtor end

//CAR OBJECTS
const camry = new Car('Camry', '2018', 23495, '29/41', 'red','img/camry/side-front/camry-side-front-red.jpg','img/camry/front/camry-front-red.jpg','img/camry/back/camry-back-red.jpg','img/camry/side/camry-side-red.jpg');

const corolla = new Car('Corolla', '2018', 18550, '28/36', 'blue','img/corolla/side-front/corolla-side-front-blue.jpg','img/corolla/front/corolla-front-blue.jpg','img/corolla/back/corolla-back-blue.jpg','img/corolla/side/corolla-side-blue.jpg');

const t86 = new Car('t86', '2018', 26255, '21/28', 'red','img/t86/side-front/t86-side-front-red.jpg','img/t86/front/t86-front-red.jpg','img/t86/back/t86-back-red.jpg','img/t86/side/t86-side-red.jpg');

const yaris = new Car('Yaris', '2018', 15635, '30/36', 'blue','img/yaris/side-front/yaris-side-front-blue.jpg','img/yaris/front/yaris-front-blue.jpg','img/yaris/back/yaris-back-blue.jpg','img/yaris/side/yaris-side-blue.jpg');

const avalon = new Car('Avalon', '2018', 33500, '21/30', 'white','img/avalon/side-front/avalon-side-front-white.jpg','img/avalon/front/avalon-front-white.jpg','img/avalon/back/avalon-back-white.jpg','img/avalon/side/avalon-side-white.jpg');




//VARIABLES
let carImgDisplay = document.getElementById('carImgDisplay')
let carTitleDisplay = document.getElementById('carTitleDisplay');
let carPriceDisplay = document.getElementById('carPriceDisplay');
let carAlt = sessionStorage.getItem('car alt');




//HOME PAGE CAR TARGET ON CLICK 
document.body.addEventListener('click', function(e){

  let target = e.target.classList.contains('explore-car') || e.target.classList.contains('explore-car__front');

  if (target && e.target.classList.contains(camry.name.toLowerCase())) { camrySessionStorage(); }
  else if (target && e.target.classList.contains(corolla.name.toLowerCase())) { corollaSessionStorage(); }
  else if (target && e.target.classList.contains(t86.name.toLowerCase())) { t86SessionStorage(); }
  else if (target && e.target.classList.contains(yaris.name.toLowerCase())) { yarisSessionStorage(); }
  else if (target && e.target.classList.contains(avalon.name.toLowerCase())) { avalonSessionStorage(); }
});
//GENERATING CAR VALUES IN SESSIONS STORAGE
function camrySessionStorage() {
  sessionStorage.setItem('car img', camry.sideFront)
  sessionStorage.setItem('car angle', camry.sideFront)
  sessionStorage.setItem('car title', camry.name);
  sessionStorage.setItem('car price', camry.price);
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('engine', 0);
  sessionStorage.setItem('alloy wheels', 0);
  sessionStorage.setItem('leather mats', 0);
  sessionStorage.setItem('cargo tote', 0);
}
function corollaSessionStorage() {
  sessionStorage.setItem('car img', corolla.sideFront)
  sessionStorage.setItem('car angle', corolla.sideFront)
  sessionStorage.setItem('car title', corolla.name);
  sessionStorage.setItem('car price', corolla.price);
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('engine', 0);
  sessionStorage.setItem('alloy wheels', 0);
  sessionStorage.setItem('leather mats', 0);
  sessionStorage.setItem('cargo tote', 0);
}
function t86SessionStorage() {
  sessionStorage.setItem('car img', t86.sideFront)
  sessionStorage.setItem('car angle', t86.sideFront)
  sessionStorage.setItem('car title', '86');
  sessionStorage.setItem('car price', t86.price);
  sessionStorage.setItem('car alt', 'red');
  sessionStorage.setItem('engine', 0);
  sessionStorage.setItem('alloy wheels', 0);
  sessionStorage.setItem('leather mats', 0);
  sessionStorage.setItem('cargo tote', 0);
}
function yarisSessionStorage() {
  sessionStorage.setItem('car img', yaris.sideFront)
  sessionStorage.setItem('car angle', yaris.sideFront)
  sessionStorage.setItem('car title', yaris.name);
  sessionStorage.setItem('car price', yaris.price);
  sessionStorage.setItem('car alt', 'blue');
  sessionStorage.setItem('engine', 0);
  sessionStorage.setItem('alloy wheels', 0);
  sessionStorage.setItem('leather mats', 0);
  sessionStorage.setItem('cargo tote', 0);
}
function avalonSessionStorage() {
  sessionStorage.setItem('car img', avalon.sideFront)
  sessionStorage.setItem('car angle', avalon.sideFront)
  sessionStorage.setItem('car title', avalon.name);
  sessionStorage.setItem('car price', avalon.price);
  sessionStorage.setItem('car alt', 'white');
  sessionStorage.setItem('engine', 0);
  sessionStorage.setItem('alloy wheels', 0);
  sessionStorage.setItem('leather mats', 0);
  sessionStorage.setItem('cargo tote', 0);
}

//DISPLAY CAR VALUES AND IMG ON BUILD PAGE FROM SESSION STORAGE
function whenLoaded() {
  if (document.body.classList.contains('build-price')){
    let carImg = sessionStorage.getItem('car img');
    carImgDisplay.src = carImg;
  
    let carTitle = sessionStorage.getItem('car title');
      carTitleDisplay.innerHTML = carTitle;
  
    let carPrice = sessionStorage.getItem('car price');
      carPriceDisplay.innerHTML = carPrice;
  
    let carAlt = sessionStorage.getItem('car alt');
      carImgDisplay.alt = carAlt;
  }
};
whenLoaded();

//Grabs all session storage numbers and adds total price
function totalCarPrice() {
  let carPrice = parseInt(sessionStorage.getItem('car price'));
  let engine = parseInt(sessionStorage.getItem('engine'));
  let alloyWheels = parseInt(sessionStorage.getItem('alloy wheels'));
  let leatherMats = parseInt(sessionStorage.getItem('leather mats'));
  let cargoTote = parseInt(sessionStorage.getItem('cargo tote'));

  carPriceDisplay.innerHTML = carPrice + engine + alloyWheels + leatherMats + cargoTote;
  // console.log(carPriceDisplay.innerHTML);
};









//=================CAR BUILD PANEL BUTTONS======================//

//COLORS BUTTON TO PICK CAR COLOR
function changeColor() {
  document.getElementById("car-build__colors").style.display = "block";
	document.getElementById("car-build__engine").style.display = "none";
	document.getElementById("car-build__calculator").style.display = "none";

  document.getElementById("car-build__accessories").style.display = "none";
}

//ENGINE BUTTON TO PICK ENGINE
function changeEngine() {
  document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "block";
  document.getElementById("car-build__calculator").style.display = "none";
  document.getElementById("car-build__accessories").style.display = "none";
}

//FINANCE BUTTON TO USE LOAN CALCULATOR
function loanCalculator() {
	document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "none";
  document.getElementById("car-build__calculator").style.display = "block";
  document.getElementById("car-build__accessories").style.display = "none";
}

//FINANCE BUTTON TO USE LOAN CALCULATOR
function accessories() {
	document.getElementById("car-build__colors").style.display = "none";
  document.getElementById("car-build__engine").style.display = "none";
  document.getElementById("car-build__calculator").style.display = "none";
  document.getElementById("car-build__accessories").style.display = "block";
}

//ALLOW DIV ELEMENT TO MAINTAIN BUTTON HOVER COLOR
function hover() {

  if (document.body.classList.contains('build-price')){
    let header = document.querySelector(".car-build__panel");
    let btns = header.getElementsByClassName("car-build__panel-buttons");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
};
hover();

/////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////

(function buildCarChangeView() {

  if (document.body.classList.contains('build-price')){
    
    document.getElementById('right-button').addEventListener('click', changeCarViewRight);

    //Right Button for changin car image view angle
    let changeCarViewRightIterator = 0;
    function changeCarViewRight(e) {
      
      let images = [];

      if (carTitleDisplay.innerHTML === 'Camry') {
        images[0] = camry.front;
        images[1] = camry.back;
        images[2] = camry.side;
        images[3] = camry.sideFront;
      } else if (carTitleDisplay.innerHTML === 'Corolla') {
        images[0] = corolla.front;
        images[1] = corolla.back;
        images[2] = corolla.side;
        images[3] = corolla.sideFront;
      } else if (carTitleDisplay.innerHTML === '86') {
        images[0] = t86.front;
        images[1] = t86.back;
        images[2] = t86.side;
        images[3] = t86.sideFront;
      } else if (carTitleDisplay.innerHTML === 'Yaris') {
        images[0] = yaris.front;
        images[1] = yaris.back;
        images[2] = yaris.side;
        images[3] = yaris.sideFront;
      } else if (carTitleDisplay.innerHTML === 'Avalon') {
        images[0] = avalon.front;
        images[1] = avalon.back;
        images[2] = avalon.side;
        images[3] = avalon.sideFront;
      }

      carImgDisplay.src = images[changeCarViewRightIterator];
      if (changeCarViewRightIterator < images.length -1) {
        changeCarViewRightIterator++
      } else {
        changeCarViewRightIterator = 0;
      }
    
      changeCarAngleStorage();
      e.preventDefault();
    }
  }

}());




//Save car Angel to session storage
function changeCarAngleStorage() {

  let carAngle = sessionStorage.getItem('car angle');


  if (carTitleDisplay.innerHTML === 'Camry'){
    if (camry.sideFront === carAngle) {
      sessionStorage.setItem('car angle', camry.front);
    } else if (camry.front === carAngle) {
      sessionStorage.setItem('car angle', camry.back);
    } else if (camry.back === carAngle) {
      sessionStorage.setItem('car angle', camry.side);
    } else if (camry.side === carAngle) {
      sessionStorage.setItem('car angle', camry.sideFront);
    }
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    if (corolla.sideFront === carAngle) {
      sessionStorage.setItem('car angle', corolla.front);
    } else if (corolla.front === carAngle) {
      sessionStorage.setItem('car angle', corolla.back);
    } else if (corolla.back === carAngle) {
      sessionStorage.setItem('car angle', corolla.side);
    } else if (corolla.side === carAngle) {
      sessionStorage.setItem('car angle', corolla.sideFront);
    }
  } else if (carTitleDisplay.innerHTML === '86') {
    if (t86.sideFront === carAngle) {
      sessionStorage.setItem('car angle', t86.front);
    } else if (t86.front === carAngle) {
      sessionStorage.setItem('car angle', t86.back);
    } else if (t86.back === carAngle) {
      sessionStorage.setItem('car angle', t86.side);
    } else if (t86.side === carAngle) {
      sessionStorage.setItem('car angle', t86.sideFront);
    }
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    if (yaris.sideFront === carAngle) {
      sessionStorage.setItem('car angle', yaris.front);
    } else if (yaris.front === carAngle) {
      sessionStorage.setItem('car angle', yaris.back);
    } else if (yaris.back === carAngle) {
      sessionStorage.setItem('car angle', yaris.side);
    } else if (yaris.side === carAngle) {
      sessionStorage.setItem('car angle', yaris.sideFront);
    }
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    if (avalon.sideFront === carAngle) {
      sessionStorage.setItem('car angle', avalon.front);
    } else if (avalon.front === carAngle) {
      sessionStorage.setItem('car angle', avalon.back);
    } else if (avalon.back === carAngle) {
      sessionStorage.setItem('car angle', avalon.side);
    } else if (avalon.side === carAngle) {
      sessionStorage.setItem('car angle', avalon.sideFront);
    }
  }
}

////////////////////////////////////////////////////////////////////////////

(function createColorFunctions() {
  if (document.body.classList.contains('build-price')){
    document.getElementById('white').addEventListener('click', changeWhite);
    document.getElementById('black').addEventListener('click', changeBlack);
    document.getElementById('gray').addEventListener('click', changeGray);
    document.getElementById('smoke').addEventListener('click', changeSmoke);
    document.getElementById('blue').addEventListener('click', changeBlue);
    document.getElementById('red').addEventListener('click', changeRed);
  }
}());



////////////////////////////////////////////////////////////////////////////
//CHANGE COLORS
function changeWhite(event){
  sessionStorage.setItem('car alt', 'white');
  

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    camry.front = camry.front.replace(/black|gray|smoke|blue|red/i, 'white');
    camry.back = camry.back.replace(/black|gray|smoke|blue|red/i, 'white');
    camry.side = camry.side.replace(/black|gray|smoke|blue|red/i, 'white');
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    corolla.front = corolla.front.replace(/black|gray|smoke|blue|red/i, 'white');
    corolla.back = corolla.back.replace(/black|gray|smoke|blue|red/i, 'white');
    corolla.side = corolla.side.replace(/black|gray|smoke|blue|red/i, 'white');
  } else if (carTitleDisplay.innerHTML === '86') {
    t86.sideFront = t86.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    t86.front = t86.front.replace(/black|gray|smoke|blue|red/i, 'white');
    t86.back = t86.back.replace(/black|gray|smoke|blue|red/i, 'white');
    t86.side = t86.side.replace(/black|gray|smoke|blue|red/i, 'white');
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    yaris.sideFront = yaris.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    yaris.front = yaris.front.replace(/black|gray|smoke|blue|red/i, 'white');
    yaris.back = yaris.back.replace(/black|gray|smoke|blue|red/i, 'white');
    yaris.side = yaris.side.replace(/black|gray|smoke|blue|red/i, 'white');
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    avalon.sideFront = avalon.sideFront.replace(/black|gray|smoke|blue|red/i, 'white');
    avalon.front = avalon.front.replace(/black|gray|smoke|blue|red/i, 'white');
    avalon.back = avalon.back.replace(/black|gray|smoke|blue|red/i, 'white');
    avalon.side = avalon.side.replace(/black|gray|smoke|blue|red/i, 'white');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/black|gray|smoke|blue|red/i, 'white');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
  yourVehicleCart();
  event.preventDefault();
}

function changeBlack(event){
  sessionStorage.setItem('car alt', 'black');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|gray|smoke|blue|red/i, 'black');
    camry.front = camry.front.replace(/white|gray|smoke|blue|red/i, 'black');
    camry.back = camry.back.replace(/white|gray|smoke|blue|red/i, 'black');
    camry.side = camry.side.replace(/white|gray|smoke|blue|red/i, 'black');
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/white|gray|smoke|blue|red/i, 'black');
    corolla.front = corolla.front.replace(/white|gray|smoke|blue|red/i, 'black');
    corolla.back = corolla.back.replace(/white|gray|smoke|blue|red/i, 'black');
    corolla.side = corolla.side.replace(/white|gray|smoke|blue|red/i, 'black');
  } else if (carTitleDisplay.innerHTML === '86') {
    t86.sideFront = t86.sideFront.replace(/white|gray|smoke|blue|red/i, 'black');
    t86.front = t86.front.replace(/white|gray|smoke|blue|red/i, 'black');
    t86.back = t86.back.replace(/white|gray|smoke|blue|red/i, 'black');
    t86.side = t86.side.replace(/white|gray|smoke|blue|red/i, 'black');
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    yaris.sideFront = yaris.sideFront.replace(/white|gray|smoke|blue|red/i, 'black');
    yaris.front = yaris.front.replace(/white|gray|smoke|blue|red/i, 'black');
    yaris.back = yaris.back.replace(/white|gray|smoke|blue|red/i, 'black');
    yaris.side = yaris.side.replace(/white|gray|smoke|blue|red/i, 'black');
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    avalon.sideFront = avalon.sideFront.replace(/white|gray|smoke|blue|red/i, 'black');
    avalon.front = avalon.front.replace(/white|gray|smoke|blue|red/i, 'black');
    avalon.back = avalon.back.replace(/white|gray|smoke|blue|red/i, 'black');
    avalon.side = avalon.side.replace(/white|gray|smoke|blue|red/i, 'black');
  }

  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|gray|smoke|blue|red/i, 'black');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
  yourVehicleCart();
  event.preventDefault();
}

function changeGray(event){
  sessionStorage.setItem('car alt', 'gray');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|smoke|blue|red/i, 'gray');
    camry.front = camry.front.replace(/white|black|smoke|blue|red/i, 'gray');
    camry.back = camry.back.replace(/white|black|smoke|blue|red/i, 'gray');
    camry.side = camry.side.replace(/white|black|smoke|blue|red/i, 'gray');
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/white|black|smoke|blue|red/i, 'gray');
    corolla.front = corolla.front.replace(/white|black|smoke|blue|red/i, 'gray');
    corolla.back = corolla.back.replace(/white|black|smoke|blue|red/i, 'gray');
    corolla.side = corolla.side.replace(/white|black|smoke|blue|red/i, 'gray');
  } else if (carTitleDisplay.innerHTML === '86') {
    t86.sideFront = t86.sideFront.replace(/white|black|smoke|blue|red/i, 'gray');
    t86.front = t86.front.replace(/white|black|smoke|blue|red/i, 'gray');
    t86.back = t86.back.replace(/white|black|smoke|blue|red/i, 'gray');
    t86.side = t86.side.replace(/white|black|smoke|blue|red/i, 'gray');
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    yaris.sideFront = yaris.sideFront.replace(/white|black|smoke|blue|red/i, 'gray');
    yaris.front = yaris.front.replace(/white|black|smoke|blue|red/i, 'gray');
    yaris.back = yaris.back.replace(/white|black|smoke|blue|red/i, 'gray');
    yaris.side = yaris.side.replace(/white|black|smoke|blue|red/i, 'gray');
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    avalon.sideFront = avalon.sideFront.replace(/white|black|smoke|blue|red/i, 'gray');
    avalon.front = avalon.front.replace(/white|black|smoke|blue|red/i, 'gray');
    avalon.back = avalon.back.replace(/white|black|smoke|blue|red/i, 'gray');
    avalon.side = avalon.side.replace(/white|black|smoke|blue|red/i, 'gray');
  }

  
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|smoke|blue|red/i, 'gray');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
  yourVehicleCart();
  event.preventDefault();
}

function changeSmoke(event){
  sessionStorage.setItem('car alt', 'smoke');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|gray|blue|red/i, 'smoke');
    camry.front = camry.front.replace(/white|black|gray|blue|red/i, 'smoke');
    camry.back = camry.back.replace(/white|black|gray|blue|red/i, 'smoke');
    camry.side = camry.side.replace(/white|black|gray|blue|red/i, 'smoke');
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/white|black|gray|blue|red/i, 'smoke');
    corolla.front = corolla.front.replace(/white|black|gray|blue|red/i, 'smoke');
    corolla.back = corolla.back.replace(/white|black|gray|blue|red/i, 'smoke');
    corolla.side = corolla.side.replace(/white|black|gray|blue|red/i, 'smoke');
  } else if (carTitleDisplay.innerHTML === '86') {
    t86.sideFront = t86.sideFront.replace(/white|black|gray|blue|red/i, 'smoke');
    t86.front = t86.front.replace(/white|black|gray|blue|red/i, 'smoke');
    t86.back = t86.back.replace(/white|black|gray|blue|red/i, 'smoke');
    t86.side = t86.side.replace(/white|black|gray|blue|red/i, 'smoke');
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    yaris.sideFront = yaris.sideFront.replace(/white|black|gray|blue|red/i, 'smoke');
    yaris.front = yaris.front.replace(/white|black|gray|blue|red/i, 'smoke');
    yaris.back = yaris.back.replace(/white|black|gray|blue|red/i, 'smoke');
    yaris.side = yaris.side.replace(/white|black|gray|blue|red/i, 'smoke');
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    avalon.sideFront = avalon.sideFront.replace(/white|black|gray|blue|red/i, 'smoke');
    avalon.front = avalon.front.replace(/white|black|gray|blue|red/i, 'smoke');
    avalon.back = avalon.back.replace(/white|black|gray|blue|red/i, 'smoke');
    avalon.side = avalon.side.replace(/white|black|gray|blue|red/i, 'smoke');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|gray|blue|red/i, 'smoke');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
  yourVehicleCart();
  event.preventDefault();
}

function changeBlue(event){
  sessionStorage.setItem('car alt', 'blue');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|gray|smoke|red/i, 'blue');
    camry.front = camry.front.replace(/white|black|gray|smoke|red/i, 'blue');
    camry.back = camry.back.replace(/white|black|gray|smoke|red/i, 'blue');
    camry.side = camry.side.replace(/white|black|gray|smoke|red/i, 'blue');
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/white|black|gray|smoke|red/i, 'blue');
    corolla.front = corolla.front.replace(/white|black|gray|smoke|red/i, 'blue');
    corolla.back = corolla.back.replace(/white|black|gray|smoke|red/i, 'blue');
    corolla.side = corolla.side.replace(/white|black|gray|smoke|red/i, 'blue');
  } else if (carTitleDisplay.innerHTML === '86') {
    t86.sideFront = t86.sideFront.replace(/white|black|gray|smoke|red/i, 'blue');
    t86.front = t86.front.replace(/white|black|gray|smoke|red/i, 'blue');
    t86.back = t86.back.replace(/white|black|gray|smoke|red/i, 'blue');
    t86.side = t86.side.replace(/white|black|gray|smoke|red/i, 'blue');
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    yaris.sideFront = yaris.sideFront.replace(/white|black|gray|smoke|red/i, 'blue');
    yaris.front = yaris.front.replace(/white|black|gray|smoke|red/i, 'blue');
    yaris.back = yaris.back.replace(/white|black|gray|smoke|red/i, 'blue');
    yaris.side = yaris.side.replace(/white|black|gray|smoke|red/i, 'blue');
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    avalon.sideFront = avalon.sideFront.replace(/white|black|gray|smoke|red/i, 'blue');
    avalon.front = avalon.front.replace(/white|black|gray|smoke|red/i, 'blue');
    avalon.back = avalon.back.replace(/white|black|gray|smoke|red/i, 'blue');
    avalon.side = avalon.side.replace(/white|black|gray|smoke|red/i, 'blue');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|gray|smoke|red/i, 'blue');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
  yourVehicleCart();
  event.preventDefault();
}

function changeRed(event){
  sessionStorage.setItem('car alt', 'red');

  if (carTitleDisplay.innerHTML === 'Camry') {
    camry.sideFront = camry.sideFront.replace(/white|black|gray|smoke|blue/i, 'red');
    camry.front = camry.front.replace(/white|black|gray|smoke|blue/i, 'red');
    camry.back = camry.back.replace(/white|black|gray|smoke|blue/i, 'red');
    camry.side = camry.side.replace(/white|black|gray|smoke|blue/i, 'red');
  } else if (carTitleDisplay.innerHTML === 'Corolla') {
    corolla.sideFront = corolla.sideFront.replace(/white|black|gray|smoke|blue/i, 'red');
    corolla.front = corolla.front.replace(/white|black|gray|smoke|blue/i, 'red');
    corolla.back = corolla.back.replace(/white|black|gray|smoke|blue/i, 'red');
    corolla.side = corolla.side.replace(/white|black|gray|smoke|blue/i, 'red');
  } else if (carTitleDisplay.innerHTML === '86') {
    t86.sideFront = t86.sideFront.replace(/white|black|gray|smoke|blue/i, 'red');
    t86.front = t86.front.replace(/white|black|gray|smoke|blue/i, 'red');
    t86.back = t86.back.replace(/white|black|gray|smoke|blue/i, 'red');
    t86.side = t86.side.replace(/white|black|gray|smoke|blue/i, 'red');
  } else if (carTitleDisplay.innerHTML === 'Yaris') {
    yaris.sideFront = yaris.sideFront.replace(/white|black|gray|smoke|blue/i, 'red');
    yaris.front = yaris.front.replace(/white|black|gray|smoke|blue/i, 'red');
    yaris.back = yaris.back.replace(/white|black|gray|smoke|blue/i, 'red');
    yaris.side = yaris.side.replace(/white|black|gray|smoke|blue/i, 'red');
  } else if (carTitleDisplay.innerHTML === 'Avalon') {
    avalon.sideFront = avalon.sideFront.replace(/white|black|gray|smoke|blue/i, 'red');
    avalon.front = avalon.front.replace(/white|black|gray|smoke|blue/i, 'red');
    avalon.back = avalon.back.replace(/white|black|gray|smoke|blue/i, 'red');
    avalon.side = avalon.side.replace(/white|black|gray|smoke|blue/i, 'red');
  }
  //replace car angle color & change image & storage
  let carAngle = sessionStorage.getItem('car angle');
  carAngle = carAngle.replace(/white|black|gray|smoke|blue/i, 'red');
  carImgDisplay.src = carAngle;
  sessionStorage.setItem('car angle', carAngle);
  yourVehicleCart();
  event.preventDefault();
}




////////////////////////////////////////////////////////





////////////////////////////////////////////////////////





//================LOAN CALCULATOR===============//
(function loadLoanCalulator() {
  if (document.body.classList.contains('build-price')) {
    //Listen for Submit
  const submit = document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show loader
  document.getElementById('loading').style.display = 'block';

  //Wait 1 second so Loading Gif shows
  setTimeout(calculateResults, 1000);

  e.preventDefault();
});
  }
}());


//CalculateResults Function
function calculateResults() {

  //UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //Forumlas for calc
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) /100 /12;
  const calculatedPayments = parseFloat(years.value) * 12;
 
  //Compute monthy payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //Show results
    document.getElementById('results').style.display = 'block';
    //Hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your Numbers');
  }
}

//Show Error Function
function showError(error) {
  //Show results
  document.getElementById('results').style.display = 'none';
  //Hide loader
  document.getElementById('loading').style.display = 'none';
  //create div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class
  errorDiv.className = 'alert alert-danger';

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error about heading
  card.insertBefore(errorDiv, heading);

  //Clear error 
  setTimeout(clearError, 3000);

  //Clear error Function
  function clearError() {
    document.querySelector('.alert').remove();
  }
}
/////////////////////////////////////////////////////

(function getTotalPriceForCalc(){
  if (document.body.classList.contains('build-price')) {
    // Get car Total and place in loan calculator
    document.getElementById('get-car-total').addEventListener('click', function(e) {
      let carPrice = parseInt(sessionStorage.getItem('car price'));

      // let engine = parseInt(sessionStorage.getItem('engine'));
      let loanAmount = document.getElementById('amount').value = carPriceDisplay.innerHTML;

      e.preventDefault();
    });
  }
}());

//////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////

////--SELECT VEHICLE DROP DOWN MENU---////////

 //OPEN & CLOSE UP/DOWN SELECT VEHICLE BUTTON
let selectVehicleCount = 1;
function selectVehicleFunctionality() {
  if (document.body.classList.contains('build-price')){
    
    document.getElementById('car-build-select-toggle').addEventListener('click', (e) => {
  
      let isEven = vehCountNum => vehCountNum % 2 === 0 ? true : false;
      if (isEven(selectVehicleCount) === false) {
        openSelectVehiclesMenu();
        console.log(selectVehicleCount + 'open')
      } else if (isEven(selectVehicleCount) === true) {
        closeSelectVehiclesMenu();
        console.log(selectVehicleCount + 'close');
      } 
 
    e.preventDefault();
    });
  }
}
selectVehicleFunctionality();

 
//OPEN MENU
function openSelectVehiclesMenu() {
  document.getElementById('select-vehicle').style.height = '25rem';
  closeVehicleCart();
  selectVehicleCount = 0;
};

//CLOSE MENU
function closeSelectVehiclesMenu() {
  document.getElementById('select-vehicle').style.height = '0';
  selectVehicleCount = 1;
};


//Allow click outside of select vehicle car menu to close
document.addEventListener('mouseup', function(e){
  let selectVehicle = document.getElementById('select-vehicle');
  let nav = document.querySelector('.navbar');

  if (e.target === selectVehicle || e.target === nav) {
    selectVehicle.style.height = '0';
    selectVehicleCount = 1;
  }
  e.preventDefault(); 
});




//Select car and propagate all fields accordingly. Reset car options(engine, accs);
//--car--SessionStorage() Line 138 whenLoaded() Line195
function camrySelect() {
  retrieveVehicleCartOptions();
  camrySessionStorage();      //307
  whenLoaded();               //381
  closeSelectVehiclesMenu();  //981
  selectVehicleCount = 1;

  removeVehicleCartOptions()  //1063
}

function corollaSelect() {
  retrieveVehicleCartOptions();
  corollaSessionStorage();
  whenLoaded();
  closeSelectVehiclesMenu();
  selectVehicleCount = 1;

  removeVehicleCartOptions()
}

function t86Select() {
  retrieveVehicleCartOptions();
  t86SessionStorage();
  whenLoaded();
  closeSelectVehiclesMenu();
  selectVehicleCount = 1;

  removeVehicleCartOptions()
}

function yarisSelect() {
  retrieveVehicleCartOptions();
  yarisSessionStorage();
  whenLoaded();
  closeSelectVehiclesMenu();
  selectVehicleCount = 1;

  removeVehicleCartOptions()
}

function avalonSelect() {
  retrieveVehicleCartOptions();
  avalonSessionStorage();
  whenLoaded();
  closeSelectVehiclesMenu();
  selectVehicleCount = 1;

  removeVehicleCartOptions()
}
///////////////////////////////////////////////////////////////////////////////////////////

function retrieveVehicleCartOptions() {
  document.getElementById('engine-standard').checked = true;
  document.getElementById('addItem1').checked = false;
  document.getElementById('addItem2').checked = false;
  document.getElementById('addItem3').checked = false;
}

function removeVehicleCartOptions() {
  document.getElementById('vehicle_cart-engine').innerHTML = '';
  document.getElementById('vehicle_cart-alloy').innerHTML = '';
  document.getElementById('vehicle_cart-mats').innerHTML = '';
  document.getElementById('vehicle_cart-cargo').innerHTML = '';
}






////////////////////////////////////////////////////////////////////////////////////////////

 ////-- VEHICLE CART DROP DOWN MENU---////////

//  //OPEN & CLOSE UP/DOWN SELECT VEHICLE BUTTON
//  let vehicleCart = 1;
//  document.getElementById('car-build-vehicle_cart__toggle').addEventListener('click', (e) => {

//    let isEven = choiceCountNum => choiceCountNum % 2 === 0 ? true : false;
//    if (isEven(vehicleCart) === false) {
//        openVehicleCart();
//    } else if (isEven(vehicleCart) === true) {
//        closeVehicleCart();
//    }
//    e.preventDefault();
//  });
 
//  //OPEN MENU
//  function openVehicleCart() {
//    document.getElementById('vehicle_cart-vehicle').style.height = '25rem';
//    vehicleCart = 0;
//    // document.getElementById('main').style.marginLeft = '250px';
//  };
 
//  //CLOSE MENU
//  function closeVehicleCart() {
//    document.getElementById('vehicle_cart-vehicle').style.height = '0';
//    vehicleCart = 1;
//    // document.getElementById('main').style.marginLeft = '0';
//  };

//  //Allow click outside of select vehicle car menu to close
// document.addEventListener('mouseup', function(e){
//   let vehicleCart = document.getElementById('vehicle_cart-vehicle');
//   let nav = document.querySelector('.navbar');

//   if (e.target !== vehicleCart) {
//     vehicleCart.style.height = '0';
//     vehicleCart = 1;
//   }
//   e.preventDefault(); 
// });










let vehicleCartCount = 1;
function vehicleCartCountFunctionality() {
  if (document.body.classList.contains('build-price')) {
    console.log('build-price')
    
    document.getElementById('car-build-vehicle_cart__toggle').addEventListener('click', (e) => {
    
      let isEven = vehCountNum => vehCountNum % 2 === 0 ? true : false;
      if (isEven(vehicleCartCount) === false) {
          openVehicleCart();
          console.log(vehicleCartCount)
      } else if (isEven(vehicleCartCount) === true) {
          closeVehicleCart();
          console.log(vehicleCartCount)
      } 
      e.preventDefault();
    });
  }
}
vehicleCartCountFunctionality();

 
//OPEN MENU
function openVehicleCart() {
  let cart = document.getElementById('vehicle_cart-menu');
  cart.style.height = '25rem';
  cart.style.fontFamily = 'Kanit';
  closeSelectVehiclesMenu();
  vehicleCartCount = 0;
};

//CLOSE MENU
function closeVehicleCart() {
  let cart = document.getElementById('vehicle_cart-menu');
  cart.style.height = '0';
  vehicleCartCount = 1;
};

//click elements within div in html for menu close
function vehicleCartFunction(event) { 
  // alert(event.currentTarget.nodeName);
  let vehicleCart = document.getElementById('vehicle_cart-menu');
  
  if (event.currentTarget.className === 'vehicleCartFunction') {
    vehicleCart.style.height = '0';
    vehicleCartCount = 1;
  } else {
    // console.log(event.target.className);
  }
}



// Allow click outside of select vehicle car menu to close
// document.addEventListener('mouseup', function(e){
  // let vehicleCart = document.getElementById('vehicle_cart-vehicle');
  // let nav = document.querySelector('.navbar');
  // let panel = document.querySelectorAll('.car-build__panel-buttons');
  // let text = document.querySelectorAll('.car-build__panel-text');
  // let icon = document.querySelectorAll('.car-build__icon--i');


  // let t = e.target;

  // if (t === vehicleCart || t === nav || t === carImgDisplay || t === panel[0] || t === panel[1] || t === panel[2] || t === panel[3] || t === text[0] || t === text[1] || t === text[2] || t === text[3] || t === icon[0] || t === icon[1] || t === icon[2] || t === icon[3]) {
  //   vehicleCart.style.height = '0';
  //   vehicleCartCount = 1;
  // }



//   e.preventDefault(); 
// });















//Vehincle Cart Menu
function yourVehicleCart() {
  //Cart car model name
  document.getElementById('vehicle_cart-model').innerHTML = `Toyota ${carTitleDisplay.innerHTML}`
  //GET CAR IMAGE DIV and Session Storage
  let carShowcase = document.getElementById('vehicle_cart-car')
  let carChoice = sessionStorage.getItem('car img');


  //GET CAR DIV COLOR DIV
  let carColor = document.getElementById('vehicle_cart-color')
  //Get Car Color via session storage
  carColor.alt = sessionStorage.getItem('car alt')
  //Set car Img change to appropriate Color
  carShowcase.src = carChoice.replace(/white|black|gray|smoke|blue|red/gi, carColor.alt);



  //Switch Car color according to session storage
  switch (carColor.alt) {
    case 'white':
      carColor.style.background = 'white';
      carColor.style.color = 'black';
      break;
    case 'black':
      carColor.style.background = 'black';
      carColor.style.color = 'white';
      break;
    case 'gray':
      carColor.style.background = 'gray';
      carColor.style.color = 'black';
      break;
    case 'smoke':
      carColor.style.background = '#686868';
      carColor.style.color = 'white';
      break;
    case 'blue':
      carColor.style.background = 'blue';
      carColor.style.color = 'white';
      break;
    case 'red':
      carColor.style.background = 'red';
      carColor.style.color = 'white';
  }

   //CAR Details: PRICE, Engine Accs.
   let carPrice = document.getElementById('vehicle_cart-price');
   let getPrice = sessionStorage.getItem('car price');
   carPrice.innerHTML = `Car Price: $${getPrice}`;

   let engine = sessionStorage.getItem('engine');
   let alloyWheels = sessionStorage.getItem('alloy wheels');
   let leatherMats = sessionStorage.getItem('leather mats');
   let cargoTote = sessionStorage.getItem('cargo tote');

   if (engine === '500') {
     document.getElementById('vehicle_cart-engine').innerHTML = `Engine type: Manual:$${engine}`;
   } else if (engine === '0') {
    document.getElementById('vehicle_cart-engine').innerHTML = `Engine type: Automatic:$${engine}`;
   }
   if (alloyWheels === '75') {
     document.getElementById('vehicle_cart-alloy').innerHTML = `Alloy Wheels: $${alloyWheels}`;
   }
   if (leatherMats === '75') {
     document.getElementById('vehicle_cart-mats').innerHTML = `Leather Mats: $${leatherMats}`;
   }
   if (cargoTote === '75') {
     document.getElementById('vehicle_cart-cargo').innerHTML = `Cargo-Tote: $${cargoTote}`;
   }

   //Get Total Price
   document.getElementById('vehicle_cart-total').innerHTML = `Total Purchase Price: $${carPriceDisplay.innerHTML}`
 }




//build section shrink on scroll
window.onscroll = function() {
  let scroll = window.pageYOffset;


  if (scroll > 25) {
    //car img
    carImgDisplay.className = 'transition1';
    //car img container
    document.querySelector('.car-contain').className = 'car-contain2';
    //white background for scrolling behind fixed top
    document.querySelector('.image-background').className = 'image-background2';

    //background to push panel elements down
    document.querySelector('.car-build__main').className = 'buildMain';

    //vehicle cart
    document.querySelector('.car-build-vehicle_cart-select').className = 'vehicleCart';
    document.getElementById('vehicle_cart-menu').className = 'vehicleCartMenu';

    //Car Title & Price
    carTitleDisplay.className = 'titleTransition';
    carPriceDisplay.className = 'priceTransition';
    //car starting text
    document.querySelector('.car-build__main-car-starting').className = 'car-starting';

    //right button for changing car angle
    document.getElementById('right-button').className = 'carButtonRotateRightHide';

    //panel
    document.querySelector('.car-build__panel').className = 'panel';
  }

  else if (scroll < 55) {
    //car img
    carImgDisplay.className = 'car-build__main-car-image';
    carImgDisplay.style.position = 'relative';
    //car img container
    document.querySelector('.car-contain2').className = 'car-contain';
    //white background for scrolling behind fixed top
    document.querySelector('.image-background2').className = 'image-background';

    //background to push panel elements down
    document.querySelector('.buildMain').className = 'car-build__main';
    
    //vehicle cart
    document.querySelector('.vehicleCart').className = 'car-build-vehicle_cart-select';
    document.getElementById('vehicle_cart-menu').className = 'car-build-vehicle_cart-select-menu';


    //Car Title & Price
    carTitleDisplay.className = 'car-build__main-car-title';
    carPriceDisplay.className = 'car-build__main-car-price';
    //car starting text
    document.querySelector('.car-starting').className = 'car-build__main-car-starting';

    //right button for changing car angle
    document.getElementById('right-button').className = 'car-build__main--right';

    //panel
    document.querySelector('.panel').className = 'car-build__panel';
  }
}





//////////////CHECKOUT PAGE//////////////

function checkout() {

  if (document.body.classList.contains('checkout')) {
    //car color
    let carColor = document.querySelector('.checkout-options-color')
    carColor.innerHTML = sessionStorage.getItem('car alt');
    carColor.alt = sessionStorage.getItem('car alt');
    
    //Propogate car model
    document.querySelector('.checkout-model').innerHTML = sessionStorage.getItem('car title');
    //car img
    let getCarImg = sessionStorage.getItem('car img');
    document.querySelector('.checkout-carImg').src = getCarImg.replace(/white|black|gray|smoke|blue|red/gi, carColor.alt);
  
    //car cost 
    document.querySelector('.checkout-options-cost').innerHTML = sessionStorage.getItem('car price');


    //car engine
    let carEngine = document.querySelector('.checkout-options-engine');
    if (sessionStorage.getItem('engine') == '500') {
      carEngine.innerHTML = 'Super Thrust 8 Speed Manual';
      document.querySelector('.checkout-options-engine-cost').innerHTML = '$500.00';
    } else {
      carEngine.innerHTML = 'Super Thrust 8 Speed Automatic';
      document.querySelector('.checkout-options-engine-cost').innerHTML = '$0';
    }
    //car alloy wheel lock
    let carWheels = document.querySelector('.checkout-options-wheels');
    if (sessionStorage.getItem('alloy wheels') == '75') {
      carWheels.innerHTML = 'Yes';
      document.querySelector('.checkout-options-wheels-cost').innerHTML = '$75.00';
    } else {
      carWheels.innerHTML = 'No';
      document.querySelector('.checkout-options-wheels-cost').innerHTML = '$0';
    }
    //car leather mats
    let carMats = document.querySelector('.checkout-options-mats');
    if (sessionStorage.getItem('leather mats') == '75') {
      carMats.innerHTML = 'Yes';
      document.querySelector('.checkout-options-mats-cost').innerHTML = '$75.00';
    } else {
      carMats.innerHTML = 'No';
      document.querySelector('.checkout-options-mats-cost').innerHTML = '$0';
    }
    //car cargo-tote
    let carCargo = document.querySelector('.checkout-options-cargo');
    if (sessionStorage.getItem('cargo tote') == '75') {
      carCargo.innerHTML = 'Yes';
      document.querySelector('.checkout-options-cargo-cost').innerHTML = '$75.00';
    } else {
      carCargo.innerHTML = 'No';
      document.querySelector('.checkout-options-cargo-cost').innerHTML = '$0';
    }

    
    //checkoutTotal
    let carPrice = parseInt(sessionStorage.getItem('car price'));
    let engine = parseInt(sessionStorage.getItem('engine'));
    let alloyWheels = parseInt(sessionStorage.getItem('alloy wheels'));
    let leatherMats = parseInt(sessionStorage.getItem('leather mats'));
    let cargoTote = parseInt(sessionStorage.getItem('cargo tote'));
  
    document.querySelector('.checkout-options-total-cost').innerHTML = carPrice + engine + alloyWheels + leatherMats + cargoTote;
  } 

}
checkout();



//keep shopping or any backclick or frontclick ensure clicked items are still clicked

function keepShopping() {

  if (document.body.classList.contains('build-price')) {
    if (sessionStorage.getItem('engine') == '500') {
      document.getElementById('engine-manual').checked = true;
    } else {
      document.getElementById('engine-standard').checked = true;
    }
    if (sessionStorage.getItem('alloy wheels') == '75') {
      document.getElementById('addItem1').checked = true;
    }
    if (sessionStorage.getItem('leather mats') == '75') {
      document.getElementById('addItem2').checked = true;
    }
    if (sessionStorage.getItem('cargo tote') == '75') {
      document.getElementById('addItem3').checked = true;
    }
  }
  carImgDisplay.src = sessionStorage.getItem('car angle');
}

function purchased() {
  if (document.body.classList.contains('purchased')) {
    document.querySelector('.purchased-carTitle').innerHTML = sessionStorage.getItem('car title');

    let purchasedImgColor = sessionStorage.getItem('car alt');
    let purchasedImgDisplay = document.querySelector('.purchased-carImg');
    purchasedImgDisplay.src = sessionStorage.getItem('car img').replace(/white|black|gray|smoke|blue|red/gi, purchasedImgColor);


    let audio = new Audio('sounds/carEngine.mp3');
    audio.play();
    
  }
}
purchased();