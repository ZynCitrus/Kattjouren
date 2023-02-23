document.querySelector('.kattenErik').innerHTML = `
<div class="imgSlider">
<div class="imgWrapper"><img name=slider src="https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg"/></div>
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
let images = [];
images[0] = "https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg";
images[1] = "https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg";
images[2] = "https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg";

function imageSliderPlus(){
	document.slider.src = images[i]; 
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
}

function imageSliderMinus(){
	document.slider.src = images[i]; 
	if(i < 1){
		i = images.length -1;
	}else {
	  i--; 
  }
}

imageSliderPlus()