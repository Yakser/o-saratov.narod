// ------------------------ MENU ------------------------

let itemsList = document.querySelectorAll('.menu-item');
let blocksList = document.querySelectorAll('.block');


let ind = 0;

for(let i = 0; i < itemsList.length; i++){

	itemsList[i].addEventListener("click", function() {

		if (i !== 2) {
			itemsList[ind].classList.remove("active");
			itemsList[i].classList.add("active");
			blocksList[ind].style.display = "none";
			blocksList[i].style.display = "flex";
			ind = i;
		} 
		
		if (i == 0 || i == 3) blocksList[i].style.display = "block";
		
		
		

	});
}

// ------------------------ UP BUTTON ------------------------

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
    

  } else {
    upButton.classList.remove('shown');
     
  }


};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};


// ------------------------ SLIDER ------------------------
let blockWidth = 600;
let pos = 0;
let num = 4;

let slider = document.querySelector(".slider");
let sliderBtnLeft = document.getElementById("slider-left");
let sliderBtnRight = document.getElementById("slider-right");

let sliderLine = document.querySelector(".slider-line");
let sliderBlocks = document.querySelectorAll(".slider-block");
let sliderBlocksHints = document.querySelectorAll(".slider-hints");


sliderLine.style.width = blockWidth * num;

sliderBtnLeft.onclick = function () {

	pos += blockWidth;

	if (pos > 0) {
		pos = -(num - 1) * blockWidth;
		sliderLine.style.left = pos + "px";
	} else {
		sliderLine.style.left = pos + "px";
	}


}

sliderBtnRight.onclick = function () {

	
	pos -= blockWidth;
	

	if (pos >= -blockWidth * (num - 1)) {

		sliderLine.style.left = pos + "px";
	} else {

		pos = 0;
		sliderLine.style.left = pos + "px";
	}

	
}

// slide if inactivity

slideInterval = setInterval(sliderBtnRight.onclick, 15000);


let inactivityTime = () => {
  let time;
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);

  function resetTimer() {
    clearInterval(slideInterval);
    clearTimeout(time);
    time = setTimeout(fn, 1000)
  }

  function fn() {
    slideInterval = setInterval(sliderBtnRight.onclick, 5000);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  inactivityTime();
});







//  last post is a first block of slider

let lastPost = document.querySelector("article").cloneNode(true);
let sliderBlock = document.querySelector(".slider-block");

sliderBlock.prepend(lastPost);


// view full button
let viewFullBtn = document.getElementById("view-full");

viewFullBtn.onclick = function () {
			i = 1;
			itemsList[ind].classList.remove("active");
			itemsList[i].classList.add("active");
			blocksList[ind].style.display = "none";
			blocksList[i].style.display = "flex";
			ind = i;
}


//  hovered slider hints


slider.addEventListener("mouseover", function () {

	sliderBtnLeft.style.opacity = .5;
	sliderBtnRight.style.opacity = .5;

});

slider.addEventListener("mouseout", function () {

	sliderBtnLeft.style.opacity = 0;
	sliderBtnRight.style.opacity = 0;
	
});


for(let i = 0; i < sliderBlocks.length; i++){

	sliderBlocks[i].addEventListener("mouseover", function() {

				sliderBlocksHints[i].style.opacity = 1;
				

	});
}

for(let i = 0; i < sliderBlocks.length; i++){

	sliderBlocks[i].addEventListener("mouseout", function() {

				sliderBlocksHints[i].style.opacity = 0;
				

	});
}


// MAPS NAVIGATION

let locationsList = document.querySelectorAll(".map-location");
let mapsBody = document.querySelector(".maps__body");
let mapsBlocksList = document.querySelectorAll(".map-block");
let backBtn = document.querySelector(".back-button");
let emptyMapBlock = document.querySelector(".empty-map-block");

let mapInd = 0;


backBtn.addEventListener("click", function() {

		
		mapsBody.style.display = "block";
		backBtn.style.display = "none";
		
		
		
		mapsBlocksList[mapInd].style.display = "none";
		emptyMapBlock.style.display = "none";
	
		

		


	
	});


for(let i = 0; i < locationsList.length; i++){

	locationsList[i].addEventListener("click", function() {

		
		mapsBody.style.display = "none";
		backBtn.style.display = "inline-block";
		mapInd = i;
		if (i >= mapsBlocksList.length - 1){

			emptyMapBlock.style.display = "block";
			


		} else {
			mapsBlocksList[i].style.display = "block";
			
		}

	});
}


// FEDERATION NAVIGATION

let f_body = document.querySelector(".f__body");
let linksList = document.querySelectorAll(".f__link");
let f_blocksList = document.querySelectorAll(".f__block");
let f_backBtn = document.querySelector(".f__back-button");
f_ind = 0;

f_backBtn.addEventListener("click", function() {

		
		f_body.style.display = "block";
		f_backBtn.style.display = "none";
		
		
		
		f_blocksList[f_ind].style.display = "none";
		
	});

for(let i = 0; i < linksList.length; i++){

	linksList[i].addEventListener("click", function() {

		
		f_body.style.display = "none";
		f_backBtn.style.display = "inline-block";
		f_blocksList[i].style.display = "block";
		f_ind = i;
		

	});
}


// ARTICLES NAVIGATION

let a_body = document.querySelector(".articles__body");
let a_linksList = document.querySelectorAll(".article__link");
let a_blocksList = document.querySelectorAll(".article__block");
let a_backBtn = document.querySelector(".a__back-button");
a_ind = 0;

a_backBtn.addEventListener("click", function() {

		
		a_body.style.display = "block";
		a_backBtn.style.display = "none";
		
		
		
		a_blocksList[a_ind].style.display = "none";
		
	});

for(let i = 0; i < a_linksList.length; i++){

	a_linksList[i].addEventListener("click", function() {

		
		a_body.style.display = "none";
		a_backBtn.style.display = "inline-block";
		a_blocksList[i].style.display = "block";
		a_ind = i;
		

	});
}

// ARCHIVE NAVIGATION

let archive_body = document.querySelector(".archive__body");
let archive_linksList = document.querySelectorAll(".archive__item");
let archive_blocksList = document.querySelectorAll(".archive__block");
let archive_backBtn = document.querySelector(".archive__back-button");
archive_ind = 0;

archive_backBtn.addEventListener("click", function() {

		
		archive_body.style.display = "flex";
		archive_backBtn.style.display = "none";
		
		
		
		archive_blocksList[archive_ind].style.display = "none";
		
	});

for(let i = 0; i < archive_linksList.length; i++){

	archive_linksList[i].addEventListener("click", function() {

		
		archive_body.style.display = "none";
		archive_backBtn.style.display = "inline-block";
		archive_blocksList[i].style.display = "block";
		archive_ind = i;
		

	});
}