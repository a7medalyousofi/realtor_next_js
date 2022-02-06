import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
					<Image src={photo.url} alt='property' />
				</div>
			))}
		</Carousel>
	);
};

export default ImageSlider;
