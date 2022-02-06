import Link from "next/link";
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
		<div className='bg-white border-y border-slate-200'>
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
								<span className='text-xs capitalize font-semibold text-slate-500'>
									{rentFrequency && `/ ${rentFrequency}`}
								</span>
							</p>
						</div>
						<div className='h-10 w-10 rounded-full border border-slate-200 overflow-hidden'>
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
							<div className='h-8 w-8 bg-blue-100 p-1 grid place-items-center rounded-md'>
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
							<div className='h-8 w-8 bg-blue-100 p-1 grid place-items-center rounded-md'>
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
							<div className='h-8 w-8 bg-blue-100 p-1 grid place-items-center rounded-md'>
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
					<h2 className='capitalize font-semibold text-blue-500'>
						{title}
					</h2>
					<p className='font-normal text-sm text-slate-500 leading-relaxed'>
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
					{amenities.length && (
						<ul className='text-sm text-blue-500 font-medium flex flex-wrap gap-2 md:gap-4'>
							{amenities.map((amenitiy) => (
								<li
									key={amenitiy.text}
									className='bg-blue-50 px-2 py-1 grid place-items-center rounded-md'>
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
