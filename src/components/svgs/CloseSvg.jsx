function CloseSvg(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 20}
			height={props.size || 20}
			fill='#fff'
			viewBox='0 0 520 520'
			aria-hidden='true'
			focusable='false'
			{...props}
		>
			<title>Close</title>
			<desc>A stylized X indicating closure.</desc>
			<path d='m310 254 130-131c6-6 6-15 0-21l-20-21c-6-6-15-6-21 0L268 212a10 10 0 0 1-14 0L123 80c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l131 131c4 4 4 10 0 14L80 399c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l131-131a10 10 0 0 1 14 0l131 131c6 6 15 6 21 0l21-21c6-6 6-15 0-21L310 268a10 10 0 0 1 0-14z' />
		</svg>
	);
}
export default CloseSvg;