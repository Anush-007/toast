import React from 'react';

function Spacer({ height, className }) {
	return (
		<div
			style={{ height: height || '3rem' }}
			className={`${className} w-0.5 rounded-full bg-[#fff3]`}
		></div>
	);
}

export default Spacer;
