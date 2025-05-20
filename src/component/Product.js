import data from '../data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';


function Product(){

	let {portfolio}=data;

	return(
		<div className="main-product">
			<div className="main-tit serif">Our Portfolio</div>
			<Swiper
			loop={true}
			speed={2000}
			slidesPerView={1.5}
			centeredSlides={true}
			spaceBetween={20}
			autoplay={{
				delay: 2000
			}}
			breakpoints={{
				769: {
				slidesPerView: 3,
				spaceBetween: 20
			},
				1025: {
				slidesPerView: 4.5,
				spaceBetween: 50
			}
			}}
			modules={[Autoplay]}
			className="productSwiper"
			>
				{
					[...portfolio, ...portfolio].map((d, i) =>
						<SwiperSlide key={i+1}>
							<div className="thumb">
								<a href=""><img src={`/images/${d.image}`} alt={d.alt} /></a>
							</div>
							<div className="desc">
								<div className="name serif">{d.title}</div>
								<p>
									{d.description}
								</p>
								<a href="" className="btn">View More</a>
							</div>
						</SwiperSlide>
					)
				}
				{/*
				<SwiperSlide>
					<div className="thumb">
						<a href=""><img src="/images/project1.png" alt="project1" /></a>
					</div>
					<div className="desc">
						<div className="name serif">Oksuro</div>
						<p>
							React / Redux / JavaScript / Styled-component<br />
							AI 이미지 생성 글로벌 플랫폼
						</p>
						<a href="" className="btn">View More</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="thumb">
						<a href=""><img src="/images/project2.png" alt="project2" /></a>
					</div>
					<div className="desc">
						<div className="name serif">Purito Seoul</div>
						<p>
							초소형 냉온열 갈바닉 진동<br />
							멀티 뷰티 디바이스
						</p>
						<a href="" className="btn">View More</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="thumb">
						<a href=""><img src="/images/project3.png" alt="project3" /></a>
					</div>
					<div className="desc">
						<div className="name serif">Lifeplus</div>
						<p>
							헤드 교체 식 LED 미세전류 진동<br />
							멀티 뷰티 디바이스
						</p>
						<a href="" className="btn">View More</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="thumb">
						<a href=""><img src="/images/project4.png" alt="project4" /></a>
					</div>
					<div className="desc">
						<div className="name serif">Men Noblesse</div>
						<p>
							건강한 광채를 선사하는<br />
							디바이스 전용 젤
						</p>
						<a href="" className="btn">View More</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="thumb">
						<a href=""><img src="/images/project5.png" alt="project5" /></a>
					</div>
					<div className="desc">
						<div className="name serif">b.state design</div>
						<p>
							건강한 광채를 선사하는<br />
							디바이스 전용 젤
						</p>
						<a href="" className="btn">View More</a>
					</div>
				</SwiperSlide>
				*/}
			</Swiper>
			{/*
			<div className="swiper-container productSwiper">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="thumb">
							<a href=""><img src="/images/project1.png" alt="project1" /></a>
						</div>
						<div className="desc">
							<div className="name serif">Oksuro</div>
							<p>
								React / Redux / JavaScript / Styled-component<br />
								AI 이미지 생성 글로벌 플랫폼
							</p>
							<a href="" className="btn">View More</a>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="thumb">
							<a href=""><img src="/images/project2.png" alt="project2" /></a>
						</div>
						<div className="desc">
							<div className="name serif">Purito Seoul</div>
							<p>
								초소형 냉온열 갈바닉 진동<br />
								멀티 뷰티 디바이스
							</p>
							<a href="" className="btn">View More</a>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="thumb">
							<a href=""><img src="/images/project3.png" alt="project3" /></a>
						</div>
						<div className="desc">
							<div className="name serif">Lifeplus</div>
							<p>
								헤드 교체 식 LED 미세전류 진동<br />
								멀티 뷰티 디바이스
							</p>
							<a href="" className="btn">View More</a>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="thumb">
							<a href=""><img src="/ images/project4.png" alt="project4" /></a>
						</div>
						<div className="desc">
							<div className="name serif">Men Noblesse</div>
							<p>
								건강한 광채를 선사하는<br />
								디바이스 전용 젤
							</p>
							<a href="" className="btn">View More</a>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="thumb">
							<a href=""><img src="/images/project5.png" alt="project5" /></a>
						</div>
						<div className="desc">
							<div className="name serif">b.state design</div>
							<p>
								건강한 광채를 선사하는<br />
								디바이스 전용 젤
							</p>
							<a href="" className="btn">View More</a>
						</div>
					</div>
				</div>
			</div>
			*/}
		</div>
	);
}

export default Product;