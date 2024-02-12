function SuccessSvg(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 25}
			height={props.size || 25}
			fill='#fff'
			viewBox='0 0 520 520'
			aria-hidden='true'
			focusable='false'
			{...props}
		>
			<title>Success</title>
			<desc>A checkmark indicating success.</desc>
			<path d='M260 20a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm134 180L241 355c-6 6-16 6-22 0l-84-85c-6-6-6-16 0-22l22-22c6-6 16-6 22 0l44 45a10 10 0 0 0 15 0l112-116c6-6 16-6 22 0l22 22c7 6 7 16 0 23z' />
		</svg>
	);
}
export default SuccessSvg;
