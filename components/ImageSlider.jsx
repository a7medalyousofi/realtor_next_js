import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const LeftArrow = () => {
	const { prevSlide } = useContext(VisibilityContext);
	return (
		<div
			onClick={prevSlide}
			className='flex items-center justify-center cursor-pointer'>
			<FaArrowAltCircleLeft />
		</div>
	);
};
const RightArrow = () => {
	const { nextSlide } = useContext(VisibilityContext);
	return (
		<div
			onClick={nextSlide}
			className='flex items-center justify-center cursor-pointer'>
			<FaArrowAltCircleRight />
		</div>
	);
};

const ImageSlider = ({ data }) => {
	return (
		<Carousel
			autoPlay={true}
			infiniteLoop={true}
			showIndicators={false}
			dynamicHeight={true}
			showStatus={false}>
			{data.map((photo) => (
				<div key={photo.id} itemId={photo.id}>
					<img className='' src={photo.url} alt='property' />
				</div>
			))}
		</Carousel>
	);
};

export default ImageSlider;
