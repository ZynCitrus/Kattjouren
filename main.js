document.querySelector('.kattenErik').innerHTML = `
<div class="imgSlider">
<div class="imgWrapper"><img class="kitten-img" height="200" width="300" name=slider src="https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg"/></div>
<button class="material-symbols-outlined arrow_left">
arrow_left
</button>
<button class="material-symbols-outlined arrow_right">
arrow_right
</button>
</div>
`



const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
arrowLeft.addEventListener("click", imageSliderMinus);
arrowRight.addEventListener("click", imageSliderPlus);

let i = 0;
let images = [
	{
		img: "./img/sadcat1.jpg",
		alt: "Cat with sad ears"
	},
	{
		img: "./img/sadcat2.jpg",
		alt: "Cat behind bars"
	},
	{
		img: "./img/sadcat3.jpg",
		alt: "Scary cat"
	},
	{
		img: "./img/saddog.jpg",
		alt: "Sad dog"
	}
];

function imageSliderPlus(){
	document.slider.src = images[i].img; 
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
}

function imageSliderMinus(){
	document.slider.src = images[i].img; 
	if(i < 1){
		i = images.length -1;
	}else {
	  i--; 
  }
}

imageSliderPlus()