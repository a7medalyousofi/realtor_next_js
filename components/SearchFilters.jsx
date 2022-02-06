import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { filterData, getFilterValues } from "../utils/filterData";
function SearchFilters() {
	const [filters] = useState(filterData);
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
		<div className='grid w-full grid-cols-2 gap-2 rounded-lg bg-slate-50 p-4 sm:grid-cols-3 md:grid-cols-5 '>
			{filters.map((filter) => (
				<div key={filter.placeholder}>
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
						className='mt-1 w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
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
