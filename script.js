
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