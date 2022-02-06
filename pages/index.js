import Link from "next/link";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "./../components/Property";

const Banner = ({
	imageUrl,
	primaryTitle,
	secondaryTitle,
	primaryDesc,
	secondaryDesc,
	purpose,
	linkUrl,
	btnLabel,
}) => (
	<div className='border-y border-slate-200 bg-white'>
		<div className='container mx-auto flex flex-col justify-start gap-6 px-4 py-8 md:flex-row md:items-center md:gap-12'>
			<img
				className='rounded-lg'
				src={imageUrl}
				width='500px'
				height='300px'
				alt={`${primaryTitle}`}
			/>
			<div>
				<p className='text-sm font-medium text-gray-500'>{purpose}</p>
				<p className='text-3xl font-bold text-slate-700'>
					{primaryTitle} <br /> {secondaryTitle}
				</p>
				<p className='py-3 text-lg font-bold text-gray-500'>
					{primaryDesc} <br /> {secondaryDesc}
				</p>
				<button
					type='button'
					className='h-10 rounded-lg bg-blue-600 px-6 font-semibold  text-white transition-all hover:bg-blue-500'>
					<Link href={linkUrl}>{btnLabel}</Link>
				</button>
			</div>
		</div>
	</div>
);

export default function Home({ propertyForSale, propertyForRent }) {
	return (
		<div className='space-y-4'>
			<Banner
				purpose='Rent a home'
				primaryTitle='Rental Homes for'
				secondaryTitle='Everyone'
				primaryDesc='Explore Appartments, Villas, Homes'
				secondaryDesc='and more'
				btnLabel='Explore Renting'
				linkUrl='/search?purpose=for-rent'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
			/>
			<div className='border-y border-slate-200 bg-white'>
				<div className='container mx-auto grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3'>
					{propertyForRent.map((property) => (
						<Property property={property} key={property.id} />
					))}
				</div>
			</div>
			<Banner
				purpose='Buy a home'
				primaryTitle='Find, Buy & Own Your'
				secondaryTitle='Dream Home'
				primaryDesc='Explore from Apartments, land, '
				secondaryDesc='builder floors, villas and more'
				btnLabel='Explore Buying'
				linkUrl='/search?purpose=for-sale'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
			/>
			<div className='border-y border-slate-200 bg-white'>
				<div className='container mx-auto grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3'>
					{propertyForSale.map((property) => (
						<Property property={property} key={property.id} />
					))}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const propertyForSale = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6&query='dubai'`
	);
	const propertyForRent = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6&query='dubai'`
	);

	return {
		props: {
			propertyForSale: propertyForSale?.hits,
			propertyForRent: propertyForRent?.hits,
		},
	};
}
