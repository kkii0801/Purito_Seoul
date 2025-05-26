프로젝트 이름 : Purito_Seoul <br />
사용된 도구 : React, JavaScript, GSAP, Swiper, CSS <br />
사용환경 : PC, Mobile
[OpenAI](https://project1-dusky-omega.vercel.app/)

***

## 주요 인터렉션 설명

1. 메인 section에서 커스텀 커서 구현하기
2. 스크롤에 따라 움직이는 typography 
3. 이미지에 부드러운 크기 변화 부여하기

***

## 메인 section에서 커스텀 커서 구현하기

### 동작 예시
![images](https://github.com/kkii0801/Readme_files/blob/main/images_1/main_section_custom_cursor_GIF.gif?raw=true)

### 코드 설명
``` JavaScript
let customHover=document.querySelectorAll(".custom-hover");
let pageTop=document.querySelector("#page-top");

document.body.addEventListener("mousemove", function(e){
	gsap.to("#custom-cursor, #custom-cursor-text", {
		x: e.clientX,
		y: e.clientY,
		duration: 1.2,
		ease: Power3.easeOut
	});
});
```
mousemove 이벤트와 gsap.to를 이용하여 커서의 좌표값을 지정해줍니다.
``` JavaScript
customHover.forEach(function(item){
	item.addEventListener("mouseenter", function(){
		gsap.to(".custom-hover-circle, .custom-hover-text", {
			width: "100%",
			height: "100%",
			opacity: 1,
			duration: 0.3,
			ease: Power3.easeOut
		});
	});

	item.addEventListener("mouseleave", function(){
		gsap.to(".custom-hover-circle, .custom-hover-text", {
			width: 0,
			height: 0,
			opacity: 0,
			duration: 0.3,
			ease: Power3.easeOut
		});
	});
});
```
forEach를 이용하여 메인 슬라이더의 1페이지와 2페이지의 .custom-hover에 gsap.to를 설정해줍니다. <br />
이때 커스텀 커서의 css 속성은 다음과 같습니다.
``` CSS
#custom-cursor,
#custom-cursor-text {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99999;
	width: 120px;
	height: 120px;
	pointer-events: none;
	will-change: transform;
}
#custom-cursor .custom-hover-circle,
#custom-cursor-text .custom-hover-text {
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -90px;
	margin-top: -90px;
	width: 0;
	height: 0;
	overflow: hidden;
	opacity: 0;
	border-radius: 50%;
}
#custom-cursor .custom-hover-circle {
	z-index: 1;
	background-color: #133b00;
}
#custom-cursor-text .custom-hover-text {
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	color: #fff;
}
#custom-cursor-text .custom-hover-text span {
	display: block;
	width: 100%;
	text-align: center;
	white-space: nowrap;
	font-size: 1.125em;
	font-weight: 400;
}
#custom-cursor-text .custom-hover-text.hide {
	font-size: 0;
}

@media only screen and (max-width: 768px) {
	#custom-cursor,
	#custom-cursor-text {
		display: none;
	}
}
```

***

## 스크롤에 따라 움직이는 typography

### 동작 예시
![images](https://github.com/kkii0801/Readme_files/blob/main/images_1/typotext_GIF.gif?raw=true)

### 코드 설명
``` JavaScript
xoffset=7;
gsap.utils.toArray(".main-typo").forEach(function(item){
const tl=gsap.timeline({
	scrollTrigger: {
		trigger: item,
		scrub: 1,
		start: "top bottom"
	}
});

tl.to(item.querySelector("div:nth-child(1)"), {
	x: -1*xoffset+"%",
	duration: 1
});

tl.to(item.querySelector("div:nth-child(2)"), {
	x: xoffset+"%",
	duration: 1,
	delay: -1
});
});
```
xoffset=7;로 애니메이션에서 사용할 x축 오프셋을 정의합니다. <br />
gsap.utils.toArray는 document.querySelectorAll과 같은 기능을 합니다. 이를 이용하여 forEach로 각각의 .main-typo를 지정해줍니다. <br />
gsap.timeline와 scrollTrigger를 이용하여 gsap 애니메이션을 부여해줍니다. <br />
delay: -1를 이용하여 "div:nth-child(1)"와 "div:nth-child(2)"가 동시에 작동하도록 설정해줄 수 있습니다.

***

## 이미지에 부드러운 크기 변화 부여하기

### 동작 예시
![images](https://github.com/kkii0801/Readme_files/blob/main/images_1/css_GIF.gif?raw=true)

### 코드 설명
``` JavaScript
gsap.utils.toArray(".scale-ani").forEach(function(item){
gsap.timeline({
	scrollTrigger: {
		trigger: item,
		start: "top bottom",
		end: "bottom top",
		onEnter: function(){
			item.classList.add("active");
		},
		onLeave: function(){
			item.classList.remove("active");
		},
		onLeaveBack: function(){
			item.classList.remove("active");
		}
	},
	delay: 2
});
});
```
똑같이 gsap.utils.toArray와 forEach를 이용하여 각각의 .scale-ani에 gsap.timeline를 설정해줍니다. <br />
onEnter, onLeave, onLeaveBack를 이용하여 스크롤의 위치에 따라 active 클래스를 부여하거나 제거하는데 이에 관련된 CSS 속성은 다음과 같습니다.
``` CSS
.scale-ani {
	transform: scale(0.8);
}
.scale-ani img {
	transform: scale(1.5);
}
.scale-ani.active {
	animation: scaleUpImg 2s forwards;
}
.scale-ani.active img {
	animation: scaleDownImg 2s forwards;
}

@keyframes scaleUpImg {
	from {
		transform: scale(0.8);
	}
	to {
		transform: scale(1);
	}
}

@keyframes scaleDownImg {
	from {
		transform: scale(1.5);
	}
	to {
		transform: scale(1);
	}
}
```
