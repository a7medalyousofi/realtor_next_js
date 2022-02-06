import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageSlider from "../../components/ImageSlider";

const PropertyDetails = ({
	propertyDetails: {
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		description,
		type,
		purpose,
		furnishingStatus,
		amenities,
		photos,
	},
}) => {
	return (
		<div className='border-y border-slate-200 bg-white'>
			<div className='container mx-auto p-4'>
				{photos && <ImageSlider data={photos} />}
				<div className='space-y-4'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-4'>
							{isVerified && (
								<GoVerified className='text-green-600' />
							)}
							<p className='font-bold text-orange-600'>
								AED {millify(price)}{" "}
								<span className='text-xs font-semibold capitalize text-slate-500'>
									{rentFrequency && `/ ${rentFrequency}`}
								</span>
							</p>
						</div>
						<div className='h-10 w-10 overflow-hidden rounded-full border border-slate-200'>
							<img
								className='h-full w-full'
								src={agency?.logo?.url}
								height='100%'
								width='100%'
								alt='house'
							/>
						</div>
					</div>
					<div className='flex items-center justify-between md:justify-start md:space-x-8'>
						<div className='flex items-center space-x-2'>
							<div className='grid h-8 w-8 place-items-center rounded-md bg-blue-100 p-1'>
								<FaBed className='text-blue-600' />
							</div>
							<p className='text-slate-500'>
								<span className='font-bold text-slate-700'>
									{rooms}
								</span>{" "}
								{rooms > 1 ? "Rooms" : "Room"}
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<div className='grid h-8 w-8 place-items-center rounded-md bg-blue-100 p-1'>
								<FaBath className='text-blue-600' />
							</div>
							<p className='text-slate-500'>
								<span className='font-bold text-slate-700'>
									{baths}
								</span>{" "}
								{baths > 1 ? "Baths" : "Bath"}
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<div className='grid h-8 w-8 place-items-center rounded-md bg-blue-100 p-1'>
								<BsGridFill className='text-blue-600' />
							</div>
							<p className='text-slate-500'>
								<span className='font-bold text-slate-700'>
									{millify(area)}
								</span>{" "}
								sqft
							</p>
						</div>
					</div>
					<h2 className='font-semibold capitalize text-blue-500'>
						{title}
					</h2>
					<p className='text-sm font-normal leading-relaxed text-slate-500'>
						{description}
					</p>
					<div className='flex space-x-6'>
						<p className='text-sm text-slate-500'>
							Type :{" "}
							<span className='font-medium capitalize'>
								{type}
							</span>
						</p>
						<p className='text-sm text-slate-500'>
							Purpose :{" "}
							<span className='font-medium capitalize'>
								{purpose}
							</span>
						</p>
						{furnishingStatus && (
							<p className='text-sm text-slate-500'>
								Furnishing Status :{" "}
								<span className='font-medium capitalize'>
									{furnishingStatus}
								</span>
							</p>
						)}
					</div>
					{amenities.length > 0 && (
						<ul className='flex flex-wrap gap-2 text-sm font-medium text-blue-500 md:gap-4'>
							{amenities.map((amenitiy) => (
								<li
									key={amenitiy.text}
									className='grid place-items-center rounded-md bg-blue-50 px-2 py-1'>
									{amenitiy.text}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
	const data = await fetchApi(
		`${baseUrl}/properties/detail?externalID=${id}`
	);
	return {
		props: {
			propertyDetails: data,
		},
	};
}
