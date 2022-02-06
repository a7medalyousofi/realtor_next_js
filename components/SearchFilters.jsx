import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { filterData, getFilterValues } from "../utils/filterData";
function SearchFilters() {
	const [filters, setFilters] = useState(filterData);
	const router = useRouter();

	const searchProperties = (filterValues) => {
		const path = router.pathname;
		const { query } = router;

		const values = getFilterValues(filterValues);

		values.forEach((item) => {
			if (item.value && filterValues?.[item.name]) {
				query[item.name] = item.value;
			}
		});

		router.push({ pathname: path, query: query });
	};

	return (
		<div className='w-full bg-slate-50 p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 '>
			{filters.map((filter) => (
				<div>
					<label
						className='text-sm'
						htmlFor={filter.placeholder
							.split(" ")
							.join("_")
							.toLowerCase()}>
						{filter.placeholder}
					</label>
					<select
						id={filter.placeholder
							.split(" ")
							.join("_")
							.toLowerCase()}
						key={filter.queryName}
						onChange={(e) =>
							searchProperties({
								[filter.queryName]: e.target.value,
							})
						}
						placeholder={filter.placeholder}
						className='w-full text-sm mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
						{filter?.items?.map((item) => (
							<option value={item.value} key={item.value}>
								{item.name}
							</option>
						))}
					</select>
				</div>
			))}
		</div>
	);
}

export default SearchFilters;
