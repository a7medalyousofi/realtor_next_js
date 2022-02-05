import Link from "next/link";
import Image from "next/image";
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
			<div className='cursor-pointer bg-white p-4 rounded-2xl border border-slate-200 space-y-4'>
				<div className='min-h-[260px] h-[260px] w-full rounded-lg overflow-hidden'>
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
						{isVerified && <GoVerified className='text-blue-600' />}
						<p className='font-bold text-slate-800'>
							AED {millify(price)}{" "}
							<span className='text-sm capitalize font-semibold text-slate-500'>
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
				<div className='flex items-center space-x-8'>
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
				<p className='capitalize'>
					{title.length > 30
						? `${title.substring(0, 30).toLowerCase()} ...`
						: title}
				</p>
			</div>
		</Link>
	);
}

export default Property;
