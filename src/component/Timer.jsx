import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TimerBlock = styled.div``;

const Timer = () => {
	const [min, setMin] = useState(3);
	const [sec, setSec] = useState(0);
	const time = useRef(180);
	const timerId = useRef(null);

	useEffect(() => {
		timerId.current = setInterval(() => {
			setMin(parseInt(time.current / 60));
			setSec(time.current % 60);
			time.current -= 1;
		}, 1000);
		return () => clearInterval(timerId.current);
	}, []);

	useEffect(() => {
		if (time.current <= 0) {
			return clearInterval(timerId.current);
		}
	}, [sec]);

	return (
		<TimerBlock>
			<div className='tiemr'>
				0{min}:{sec < 10 && '0'}{sec}
			</div>
		</TimerBlock>
	);
};

export default Timer;
