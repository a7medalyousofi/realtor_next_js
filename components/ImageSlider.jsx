import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ data }) => {
	return (
		<Carousel
			autoPlay={true}
			infiniteLoop={true}
			showIndicators={false}
			dynamicHeight={true}
			showStatus={false}>
			{data.map((photo) => (
				<div key={photo.id}>
					<img
						src={photo.url}
						alt='property'
						width='100%'
						height='100%'
					/>
				</div>
			))}
		</Carousel>
	);
};

export default ImageSlider;
