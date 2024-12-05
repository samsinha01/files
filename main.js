'use strict';
function showGalImage(){
	const divTag = document.createElement("div");
	divTag.innerHTML=`
		<section class="parent-gal-box hide">
			<div class="this_tab_show">
				<p id="fixedGal_cross" onclick="closePopUp()">
					<i class="fa-regular fa-circle-xmark"></i>
				</p>
				<p id="fixedGal_left">
					<i class="fa-solid fa-circle-left"></i>
				</p>
				<img src="https://i.pinimg.com/564x/19/42/f9/1942f9f7422cfd6c564a19b289670c1e.jpg" alt="image" class="popUpImg">
				
				<p id="fixedGal_right">
					<i class="fa-solid fa-circle-right"></i>
				</p>
			</div>
		</section
	`;
	const bodyTag = document.querySelector("body");
	bodyTag.insertBefore(divTag,bodyTag.firstChild);
}


//initialize img variable
let img;
let currentImg;

function getAllImg(){
	img = document.getElementsByClassName("slider-img");
	for(let i of img){
		i.style.cursor = "pointer";
		i.addEventListener('click',function(){
			document.querySelector(".popUpImg").src = this.src;
			document.querySelector(".parent-gal-box").classList.remove("hide");
			getCurrentImg();
		});
	}
	showGalImage();
	
}
getAllImg();

function closePopUp(){
	document.querySelector(".popUpImg").src ="";
	document.querySelector(".parent-gal-box").classList.add("hide");
}
function getCurrentImg(){
	for(let i=0;i<img.length;i++){
		if(document.querySelector(".popUpImg").src === img[i].src){
			console.log(i);
		}
	}
}
