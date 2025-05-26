<주요 인터렉션 설멍>

1. 메인 section에서 커스텀 커서 구현하기
2. 스크롤에 따라 움직이는 typography 
3. 이미지에 부드러운 크기 변화 부여하기


<메인 section에서 커스텀 커서 구현하기>

<동작 예시>
![images](https://github.com/kkii0801/Readme_files/blob/main/images_1/main_section_custom_cursor_GIF.gif?raw=true)

<코드>
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

<설명>

<스크롤에 따라 움직이는 typography>

<동작 예시>
![images](https://github.com/kkii0801/Readme_files/blob/main/images_1/typotext_GIF.gif?raw=true)

<이미지에 부드러운 크기 변화 부여하기>

<동작 예시>
![images](https://github.com/kkii0801/Readme_files/blob/main/images_1/css_GIF.gif?raw=true)
