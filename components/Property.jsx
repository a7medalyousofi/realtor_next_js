import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";

function Property({
	property: {
		coverPhoto,
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		externalID,
	},
}) {
	return (
		<Link href={`/property/${externalID}`} passHref>
			<div className='cursor-pointer space-y-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-300/20'>
				<div className='h-[260px] min-h-[260px] w-full overflow-hidden rounded-lg'>
					<img
						className='h-full w-full'
						src={coverPhoto ? coverPhoto.url : DefaultImage}
						height='100%'
						width='100%'
						alt='house'
					/>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-4'>
						{isVerified && (
							<GoVerified className='text-green-600' />
						)}
						<p className='font-bold text-orange-600'>
							AED {millify(price)}{" "}
							<span className='text-xs font-semibold capitalize text-slate-600'>
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
				<div className='flex items-center justify-between'>
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
				<p className='font-medium capitalize text-slate-500'>
					{title.length > 30
						? `${title.substring(0, 30).toLowerCase()} ...`
						: title}
				</p>
			</div>
		</Link>
	);
}

export default Property;
