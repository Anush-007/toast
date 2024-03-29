function WarningSvg(props) {
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
			<title>Warning</title>
			<desc>An exclamation mark indicating a warning.</desc>
			<path d='M514 425 285 55a28 28 0 0 0-50 0L6 425c-14 23 0 55 25 55h458c25 0 40-32 25-55zm-254-25c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm30-90c0 6-4 10-10 10h-40c-6 0-10-4-10-10V180c0-6 4-10 10-10h40c6 0 10 4 10 10v130z' />
		</svg>
	);
}
export default WarningSvg;
