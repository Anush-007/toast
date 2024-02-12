import React, { useEffect, useRef, useState } from 'react';
import Spacer from './Spacer';
import { CloseSvg, InfoSvg, SuccessSvg, WarningSvg } from './svgs';

function Toast({
	children,
	className,
	message,
	variant = 'neutral',
	action = null,
	actionCallback,
	position = 'top-right',
	duration = 5000,
}) {
	const [posClassName, setPosClassName] = useState(
		'xs:top-4 xs:right-4 animate-translate-right'
	);

	const [variantClassName, setVariantClassName] = useState('bg-[#444]'); // bg-ps-grey

	const ref = useRef(null);

	const close = () => {
		ref.current.className += 'translate-x-full opacity-0';
	};

	const handleKeyDown = e => {
		if (e.key === 'Escape') close();
	};

	useEffect(() => {
		const timeOut = setTimeout(close, duration);
		return () => {
			clearTimeout(timeOut);
		};
	});

	useEffect(() => {
		switch (position) {
			case 'top-left':
				setPosClassName('xs:left-4 xs:top-4');
				break;
			case 'bottom-left':
				setPosClassName('xs:left-4 xs:bottom-4');
				break;
			case 'bottom-right':
				setPosClassName('xs:bottom-4 xs:right-4');
				break;
		}

		switch (variant) {
			case 'informative':
				setVariantClassName('bg-[#3498DB]');
				break;
			case 'negative':
				setVariantClassName('bg-[#E74C3C]');
				break;
			case 'positive':
				setVariantClassName('bg-[#27AE60]');
				break;
		}
	});

	return (
		<div
			ref={ref}
			role='alert'
			aria-live='assertive'
			aria-atomic='true'
			className={`${className} ${posClassName} ${variantClassName} w-full xs:w-auto xs:min-w-80 text-white text-ellipsis text-lg py-4 px-4 rounded-md absolute flex flex-row justify-around items-center space-x-4 transition-all duration-1000 `}
			onKeyDown={handleKeyDown}
		>
			{children || (
				<>
					{variant == 'informative' && (
						<InfoSvg className='fill-white' />
					)}
					{variant == 'positive' && (
						<SuccessSvg className='fill-white' />
					)}
					{variant == 'negative' && (
						<WarningSvg className='fill-white' />
					)}
					<p className='text-xl'>{message}</p>
					{action && actionCallback && (
						<button
							className=' border-[#fff6] py-1 px-3 text-lg border-2 rounded-lg'
							onClick={actionCallback}
						>
							{action}
						</button>
					)}
					<Spacer />
					<button onClick={close}>
						<CloseSvg className='fill-white' />
					</button>
				</>
			)}
		</div>
	);
}

export default Toast;
