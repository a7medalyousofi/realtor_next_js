import { useState } from "react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import SearchFilters from "../components/SearchFilters";
import Property from "./../components/Property";
import { fetchApi, baseUrl } from "../utils/fetchApi";

function Search({ properties }) {
	const [expandedFilters, setExpandedFilters] = useState(false);
	const router = useRouter();

	return (
		<div className='bg-white border-y border-slate-200'>
			<div className='container mx-auto p-4 space-y-4'>
				<div className='flex flex-col items-center space-y-4'>
					<div
						onClick={() =>
							setExpandedFilters((prevFilters) => !prevFilters)
						}
						className='w-full flex items-center justify-between cursor-pointer'>
						<div className='flex items-center text-xl font-semibold'>
							<BsFilter className='mr-2' />{" "}
							<p className='select-none'>Search by Filters</p>
						</div>
						<div className='h-7 w-7 grid place-items-center bg-slate-50 rounded-full'>
							{expandedFilters ? (
								<FiChevronUp />
							) : (
								<FiChevronDown />
							)}
						</div>
					</div>
					{expandedFilters && <SearchFilters />}
				</div>
				<div className=''>
					<p className='text-xl font-semibold select-none'>
						Properties {router.query.purpose}
					</p>
					{properties.length > 0 && (
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
							{properties.map((property) => (
								<Property
									property={property}
									key={property.id}
								/>
							))}
						</div>
					)}
					{properties.length === 0 && (
						<div className='mt-5'>No result found!</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Search;

export async function getServerSideProps({ query }) {
	const purpose = query.purpose || "for-rent";
	const rentFrequency = query.rentFrequency || "yearly";
	const minPrice = query.minPrice || "0";
	const maxPrice = query.maxPrice || "1000000";
	const roomsMin = query.roomsMin || "0";
	const bathsMin = query.bathsMin || "0";
	const sort = query.sort || "price-desc";
	const areaMax = query.areaMax || "35000";
	const locationExternalIDs = query.locationExternalIDs || "5002";
	const categoryExternalID = query.categoryExternalID || "4";

	const data = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
	);

	return {
		props: {
			properties: data?.hits,
		},
	};
}
