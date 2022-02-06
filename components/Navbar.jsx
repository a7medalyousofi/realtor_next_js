import Link from "next/link";

import { FiSearch, FiHome, FiGrid, FiKey } from "react-icons/fi";

function Navbar() {
	return (
		<div className='container mx-auto p-4'>
			<div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0'>
				<Link href='/'>
					<a className='font-bold'>Realtor</a>
				</Link>
				<div className='flex items-center space-x-6'>
					<Link href='/'>
						<a className='font-medium flex items-center space-x-1 text-slate-500 hover:text-blue-600'>
							<FiHome />
							<span>Home</span>
						</a>
					</Link>
					<Link href='/search'>
						<a className='font-medium flex items-center space-x-1 text-slate-500 hover:text-blue-600'>
							<FiSearch />
							<span>Search</span>
						</a>
					</Link>
					<Link href='/search?purpose=for-sale'>
						<a className='font-medium flex items-center space-x-1 text-slate-500 hover:text-blue-600'>
							<FiGrid />
							<p className='flex'>
								Buy{" "}
								<span className='hidden md:flex'>Property</span>
							</p>
						</a>
					</Link>
					<Link href='/search?purpose=for-rent'>
						<a className='font-medium flex items-center space-x-1 text-slate-500 hover:text-blue-600'>
							<FiKey />
							<p className='flex'>
								Rent{" "}
								<span className='hidden md:flex'>
									{" "}
									Property
								</span>
							</p>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
