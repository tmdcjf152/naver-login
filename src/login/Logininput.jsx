import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { green } from '../style/theme';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Timer from '../component/Timer';

const LogininputBlock = styled.article`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 450px;
	border: 1px solid #ddd;
	border-radius: 10px;
	/* =========공통스타일========= */
	.login-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50px;
		margin-top: 2rem;
		border-radius: 5px;
		border: 1px solid #fff;
		background: ${green};
		font: bold 1.2rem/1 'apple';
		color: #fff;
	}

	input[type='text'] {
		width: 90%;
		height: 45px;
		padding-left: 25px;
		border: 1px solid #ddd;
		border-bottom: none;
		border-radius: 5px;
	}
	/* ========================== */

	.nav-tabs {
		display: flex;
		justify-content: center;
		flex-shrink: 1;
		flex-grow: 1;
		width: 100%;
		height: 50px;
		.nav-item {
			display: flex;
			justify-content: center;
			flex-grow: 1;
			width: 33%;
			background: #f8f9fb;
			color: #000;
			border-radius:10px;
			.nav-link {
				color: #888;
			}
			.active {
				width: 100%;
				color: #000;
			}
		}
	}

	.id-login-input-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 0rem 1rem 1rem 1rem;
		.id-box {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.id-icon {
				position: absolute;
				left: 25px;
				color: #aaa;
			}
			.close-on {
				position: absolute;
				right: 30px;
				color: #aaa;
			}
			.close {
				display: none;
			}
		}
		.pwd-box {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.pwd-icon {
				position: absolute;
				left: 25px;
				color: #aaa;
			}
			.close-on {
				position: absolute;
				right: 30px;
				color: #aaa;
			}
			.close {
				display: none;
			}
			input[type='password'] {
				width: 90%;
				height: 45px;
				padding-left: 25px;
				border: 1px solid #ddd;
				border-radius: 5px;
			}
		}
		.error-msg {
			margin-top: 20px;
			font-size: 0.9rem;
			color: red;
		}
		.btn-box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			padding: 1rem 2rem;
			.save-box {
				width: 50%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				input[type='checkbox'] {
					display: none;
				}
				input[id='save-id'] + label {
					position: relative;
					display: inline-block;
					width: 18px;
					height: 18px;
					border-radius: 50%;
					border: 1px solid #ddd;
					cursor: pointer;
					margin-right: 10px;
					&::before {
						position: absolute;
						top: 1.5px;
						left: 2px;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 12px;
						text-align: center;
						color: #aaa;
					}
				}
				input[id='save-id']:checked + label {
					position: relative;
					background: ${green};
					&::before {
						position: absolute;
						top: 1.5px;
						left: 2px;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 12px;
						text-align: center;
						color: #fff;
					}
				}
				span {
					padding-top: 2px;
					font-size: 13px;
					color: #999;
				}
			}
			.ip-box {
				width: 50%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				span {
					margin-right: 10px;
					padding-top: 5px;
					font-size: 13px;
					color: #999;
				}
				.form-check-input:checked {
					background-color: ${green};
					border-color: ${green};
				}
			}
		}
	}

	.number-login-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 3rem;
		.green {
			color: ${green};
		}
		span {
			font-size: 0.9rem;
			text-align: center;
			line-height: 20px;
		}
		input[type='text'] {
			width: 100%;
			margin-top: 30px;
			text-align: center;
			border-bottom: 1px solid #ddd;
			color: #999;
		}
		.login-btn {
			margin-top: 5px;
			padding: 0;
		}
	}

	.qr-login-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.img-box {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100px;
			height: 100px;
			margin-top: 20px;
			img {
				width: 100%;
				height: 100%;
			}
			span {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 150%;
				margin-top: 5px;
			}
		}
		.text-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin: 50px 0px;
			text-align: center;
			font-size: 0.8rem;
		}
	}
`;

const Logininput = () => {
	const [idValue, setIdValue] = useState('');
	const [pwdValue, setPwdValue] = useState('');
	const [error, setError] = useState('');

	const loginErrorHandler = () => {
		if (idValue.length < 1) {
			setError('아이디를 입력해주세요');
		}
		if (idValue.length > 1 && pwdValue.length < 1) {
			setError('비밀번호를 입력해주새요');
		}
	};

	useEffect(() => {
		if (idValue.length > 1 && pwdValue.length > 1) {
			setError('');
		}
	}, [idValue, pwdValue]);

	return (
		<LogininputBlock>
			<Tabs defaultActiveKey='Id-login' id='uncontrolled-tab-example' className='mb-3'>
				<Tab eventKey='Id-login' title='ID 로그인'>
					<div className='id-login-input-box'>
						<div className='id-box'>
							<span className='id-icon'>
								<BiUser />
							</span>
							<input
								type='text'
								name='Id'
								placeholder='아이디'
								value={idValue}
								onChange={(e) => {
									setIdValue(e.target.value);
								}}
							/>
							<span
								className={idValue == '' ? 'close' : 'close-on'}
								onClick={() => {
									setIdValue('');
								}}>
								<AiFillCloseCircle />
							</span>
						</div>
						<div className='pwd-box'>
							<span className='pwd-icon'>
								<MdPassword />
							</span>
							<input
								type='password'
								name='pwd'
								placeholder='비밀번호'
								value={pwdValue}
								onChange={(e) => {
									setPwdValue(e.target.value);
								}}
							/>
							<span
								className={pwdValue == '' ? 'close' : 'close-on'}
								onClick={() => {
									setPwdValue('');
								}}>
								<AiFillCloseCircle />
							</span>
						</div>
						<div className='btn-box'>
							<div className='save-box'>
								<input type='checkbox' name='save-id' id='save-id' />
								<label for='save-id'></label>
								<span>로그인 상태 유지</span>
							</div>
							<div className='ip-box'>
								<span>IP보안</span>
								<Form.Check type='switch' id='custom-switch' />
							</div>
							<span className='error-msg'>{error}</span>
							<button
								className='login-btn'
								onClick={() => {
									loginErrorHandler();
								}}>
								로그인
							</button>
						</div>
					</div>
				</Tab>
				<Tab eventKey='number-login' title='일회용 번호'>
					<div className='number-login-box'>
						<span>
							네이버앱의
							<span className='green'>
								메뉴&gt;설정
								<AiOutlineSetting />
								&gt;로그인 아이디 관리 <br />
								&gt;일회용 로그인 번호 받기
							</span>
							에 보이는 번호를 입력해 주세요.
						</span>
						<input type='text' placeholder='번호를 입력하세요.' />
						<button className='login-btn'>로그인</button>
					</div>
				</Tab>
				<Tab eventKey='qr-login' title='QR코드'>
					<div className='qr-login-box'>
						<div className='img-box'>
							<img
								src='data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQAAAACFI5MzAAACA0lEQVR42tWYPY6DMBSEH6JwyRG4SXyxSCBxsXATH8ElBeLtzDNJaFJmdpfCMXwUI97fOOafLvvL5DBc2Zfix7AU67Db+EhIBvftNiyOu76kw+62ZfeiJPO5fQxObfu43fCOmHCbHnbnQ7PfILlOjqhMxQwC5YTxYVQMGeJeIfAaOQFhQiJDyvZeLtkrIK0oq42++jwmZ71cK/j7hNogBt/kmZ6eVnwiHfGKLZtE4jt4OLmvlCojx7AzHD3vsQC/61RFHCWKBSFBw2LfjIrVESQHchQlGnUa8bGmTUWozVmsUSpI1FA5jzrClQGK5ChoErMl9i8l2Uem54iJgVxhqSTHO1LCewjMNYLUt/mpJOxQlSMb2lLEZ33FR0EOw7jKKNGtA7aID4jpCGLhLSC4WLFhobwICXSEa7MYnbenfdASmkc6BxtRKv0lchrCqBiSg86BbQoVezRtIhLjimJgGjg72m1zNSoS0xqTKodxqlGnTZuKIDMjR8NHddw957aKoE3xJNGSIxrHiv6lJKGt5+Da6SXnsHRFSjy+SfNvOVKWVkZGwq8eFiaO/breLca4jpw+fuYPzjLUFgcLIeFZJlf6xuH0b5A6FSXhibL1KsSnq1GlvZ4srWVyaUWjJvwcp3lc4iRhSnKeaenfYKHYJMLX6oidPv51pH/1axH5n/+/fSQ/nwTRB8RNlUcAAAAASUVORK5CYII='
								alt='qr-code-login'
							/>
							<span>
								남은시간 <Timer />
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
				</Tab>
			</Tabs>
		</LogininputBlock>
	);
};

export default Logininput;
