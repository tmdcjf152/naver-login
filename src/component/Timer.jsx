import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineReload } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { green } from '../style/theme';

const TimerBlock = styled.div`
	.time-out-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 300px;
		.warning-icon {
			font-size: 4rem;
			color: #ddd;
		}
		span {
			width: 100%;
			text-align: center;
			padding: 1rem;
		}
		.green {
			color: ${green};
			cursor: pointer;
		}
		svg {
			margin-right: 10px;
		}
	}
`;

const Timer = () => {
	const [min, setMin] = useState(3);
	const [sec, setSec] = useState(0);
	const time = useRef(5)
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
		if (time.current <= -1) {
			clearInterval(timerId.current);
			clearInterval(time.current);
		}
	}, [sec]);

	// const reTimerHandle = () => {
	// 	timerId.current = setInterval(() => {
	// 		setMin(parseInt(time.current / 60));
	// 		setSec(time.current % 60);
	// 		time.current -= 1;
	// 	}, 1000);
	// 	return () => {
	// 		clearInterval(timerId.current);
	// 	};
	// };

	return (
		<TimerBlock>
			{sec == 0 ? (
				<div className='qr-login-box'>
					<div className='time-out-box center'>
						<span className='warning-icon'>
							<RiErrorWarningLine />
						</span>
						<span className='center'>
							해당 QR코드의 유효시간이 지났습니다.
							<br />
							다시 로그인을 시도하시겠습니까?
						</span>
						<span
							className='cente green'
							onClick={() => {
								reTimerHandle();
							}}>
							<AiOutlineReload />
							재시도
						</span>
					</div>
				</div>
			) : (
				<div className='qr-login-box'>
					<div className='img-box'>
						<img
							src='data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQAAAACFI5MzAAACA0lEQVR42tWYPY6DMBSEH6JwyRG4SXyxSCBxsXATH8ElBeLtzDNJaFJmdpfCMXwUI97fOOafLvvL5DBc2Zfix7AU67Db+EhIBvftNiyOu76kw+62ZfeiJPO5fQxObfu43fCOmHCbHnbnQ7PfILlOjqhMxQwC5YTxYVQMGeJeIfAaOQFhQiJDyvZeLtkrIK0oq42++jwmZ71cK/j7hNogBt/kmZ6eVnwiHfGKLZtE4jt4OLmvlCojx7AzHD3vsQC/61RFHCWKBSFBw2LfjIrVESQHchQlGnUa8bGmTUWozVmsUSpI1FA5jzrClQGK5ChoErMl9i8l2Uem54iJgVxhqSTHO1LCewjMNYLUt/mpJOxQlSMb2lLEZ33FR0EOw7jKKNGtA7aID4jpCGLhLSC4WLFhobwICXSEa7MYnbenfdASmkc6BxtRKv0lchrCqBiSg86BbQoVezRtIhLjimJgGjg72m1zNSoS0xqTKodxqlGnTZuKIDMjR8NHddw957aKoE3xJNGSIxrHiv6lJKGt5+Da6SXnsHRFSjy+SfNvOVKWVkZGwq8eFiaO/breLca4jpw+fuYPzjLUFgcLIeFZJlf6xuH0b5A6FSXhibL1KsSnq1GlvZ4srWVyaUWjJvwcp3lc4iRhSnKeaenfYKHYJMLX6oidPv51pH/1axH5n/+/fSQ/nwTRB8RNlUcAAAAASUVORK5CYII='
							alt='qr-code-login'
						/>
						<span>
							남은시간 0{min}:{sec < 10 && '0'}
							{sec}
						</span>
					</div>
					<div className='text-box'>
						<span>
							공용 네트워크, 공용 PC라면 안전을 위해
							<br />
							QR코드로 로그인해 주세요
						</span>
					</div>
				</div>
			)}
		</TimerBlock>
	);
};

export default Timer;
