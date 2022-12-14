import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { green } from '../style/theme';

const SingupPageBlock = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: rgb(245, 246, 248);
	.signup-inner-box {
		width: 555px;
		height: 100%;
		padding: 2rem 0rem;
		.login-header {
			.logo-box {
				align-items: flex-end;
				width: 100%;
				height: 80px;
				margin-bottom: 2.5rem;
				.logo-text {
					font-size: 2.5rem;
					color: ${green};
					font-family: 'Black Han Sans', sans-serif;
				}
			}
		}
		.login-content-box {
			flex-direction: column;
			width: 100%;
			height: 100%;
			padding: 1rem 0rem;
			span {
				display: flex;
			}
			.content-title {
				font: bold 1rem/1 'apple';
				color: #555;
				margin-bottom: 0.5rem;
			}
			.error-msg {
				font: 0.8rem/1 'apple';
				color: red;
				margin: 0.7rem 0rem 1rem 0rem;
			}
			input[type='text'] {
				width: 450px;
				height: 50px;
				padding: 1rem;
			}
			input[type='password'] {
				width: 450px;
				height: 50px;
				padding: 1rem;
			}
			.id-box {
				position: relative;
				&::before {
					position: absolute;
					top: 40px;
					right: 20px;
					content: '@naver.com';
					color: #888;
				}
			}
			.birth-content-box {
				display: flex;
				width: 100%;
				input[id='year'] {
					width: 143px;
					height: 50px;
					padding: 1rem;
				}
				input[id='date'] {
					width: 143px;
					height: 50px;
					padding: 1rem;
				}
				select {
					width: 135px;
					height: 50px;
					padding: 1rem;
					margin: 0rem 1rem;
				}
			}
			.gender-box {
				span {
					margin-left: 1rem;
				}
				select {
					width: 450px;
					height: 50px;
					padding: 1rem;
					margin: 0rem 1rem;
				}
			}
			.email-box {
				margin-bottom: 2.5rem;
			}
			.certification-box {
				position: relative;
				.certification-inner-box {
					display: flex;
					justify-content: space-between;
					margin-bottom: 1rem;
					input[id='phone-number'] {
						width: 320px;
						height: 50px;
						padding: 1rem;
					}
					.certification-btn {
						width: 120px;
						height: 50px;
						background: ${green};
            border: none;
						font: bold 1rem/1 'apple';
						color: #fff;
						cursor: pointer;
            &:disabled{
              background: #888;
            }
					}
				}
				.timer {
					position: absolute;
					top: 107px;
					right: 30px;
					color: ${green};
				}
			}
			.signup-btn {
				width: 450px;
				height: 50px;
				margin-top: 1rem;
				background: ${green};
        border: none;
				font: bold 1rem/1 'apple';
				color: #fff;
				cursor: pointer;
        &:disabled{
          background: #888;
        }
			}
		}
	}
`;

const SingupPage = () => {
	const [idValue, setIdValue] = useState('');
	const [idError, setIdError] = useState('');
	const [pwdValue, setPwdValue] = useState('');
	const [pwdError, setPwdError] = useState('');
	const [rePwdValue, setRePwdValue] = useState('');
	const [rePwdError, setRePwdError] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [nameError, setNameError] = useState('');
	const [yearValue, setYearValue] = useState('');
	const [monthValue, setMonthValue] = useState('');
	const [dateValue, setDateValue] = useState('');
	const [birthError, setBirthError] = useState('');
	const [genderValue, setGenderValue] = useState('');
	const [genderError, setGenderError] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
	const [certificationValue, setCertificationValue] = useState('');
	const [phoneError, setPhoneError] = useState('');
	const [disabled, setDisabled] = useState(true);
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180)
  const timerId = useRef(null);
	const [toggle, setToggle] = useState(false);
	const [signup, setSignUp] = useState(true);
  const [certiNumber, setCertiNumber]=useState(true)


	const regId = /^[a-z0-9]+$/g;
	const regPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

	const idValueCheck = regId.test(idValue);
	const pwdValueCheck = regPwd.test(pwdValue);
	const phoneValueCheck = regPhone.test(phoneValue);


		useEffect(() => {
			if (idValueCheck == false) {
				setIdError('???????????? ??????????????????');
			} else {
				setIdError('');
			}
			if (pwdValueCheck == false) {
				setPwdError('??????????????? ?????????/?????????/??????/???????????? ???????????? 8??? ?????? ??????????????????');
			} else {
				setPwdError('');
			}
			if (rePwdValue === pwdValue) {
				setRePwdError('');
			} else {
				setRePwdError('??????????????? ???????????? ????????????.');
			}
			if (nameValue.length <= 1) {
				setNameError('????????? ????????? ??????????????????');
			} else {
				setNameError('');
			}
			if (yearValue.length < 4) {
				setBirthError('????????? ???(???)??? 4????????? ??????????????????');
			} else if (yearValue.length == 4 && monthValue == '') {
				setBirthError('????????? ?????? ??????????????????');
			} else if (yearValue.length == 4 && monthValue !== '???' && dateValue.length !== 2) {
				setBirthError('????????? ?????? ????????? ?????????????????? ex) 1??? => 01???');
			} else {
				setBirthError('');
			}
			if (genderValue == '' || genderValue == '??????') {
				setGenderError('????????? ??????????????????');
			} else {
				setGenderError('');
			}
			if (phoneValueCheck == false) {
				setPhoneError('-??? ????????? ??????????????? 10-11????????? ?????????????????? ');
			} else {
        setPhoneError('');
        setCertiNumber(false)
			}
      if(certificationValue.length == 6){
        setPhoneError('');
        setSignUp(false)
      }else if(phoneValueCheck == true && certificationValue.length < 6){
        setPhoneError('???????????? 6????????? ?????????????????? ');
      }
		}, [idValue, pwdValue, rePwdValue, nameValue, yearValue, monthValue, dateValue, genderValue, phoneValue, certificationValue]);
    
  
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


	return (
		<SingupPageBlock>
			<div className='signup-inner-box'>
				<header className='login-header'>
					<NavLink to='/' className='logo-box center'>
						<h1 className='logo-text'>NAVER</h1>
					</NavLink>
				</header>

				<div className='login-content-box center'>
					{/* ????????? */}
					<div className='id-box'>
						<span className='content-title'>?????????</span>
						<input
							type='text'
							onChange={(e) => {
								setIdValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{idError}</span>
					</div>

					{/* ???????????? */}
					<div className='pwd-box'>
						<span className='content-title'>????????????</span>
						<input
							type='password'
							valur={pwdValue}
							onChange={(e) => {
								setPwdValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{pwdError}</span>
					</div>

					{/* ???????????? ????????? */}
					<div className='re-pwd-box'>
						<span className='content-title'>???????????? ?????????</span>
						<input
							type='password'
							onChange={(e) => {
								setRePwdValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{rePwdError}</span>
					</div>

					{/* ?????? */}
					<div className='name-box'>
						<span className='content-title'>??????</span>
						<input
							type='text'
							onChange={(e) => {
								setNameValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{nameError}</span>
					</div>

					{/* ???????????? */}
					<div className='birth-box'>
						<span className='content-title'>????????????</span>
						<div className='birth-content-box'>
							<input
								type='text'
								id='year'
								placeholder='???(4???)'
								onChange={(e) => {
									setYearValue(e.target.value);
								}}
							/>
							<select
								name='month'
								id='month'
								onChange={(e) => {
									setMonthValue(e.target.value);
								}}>
								<option value='???'>???</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='6'>6</option>
								<option value='7'>7</option>
								<option value='8'>8</option>
								<option value='9'>9</option>
								<option value='10'>10</option>
								<option value='11'>11</option>
								<option value='12'>12</option>
							</select>
							<input
								type='text'
								id='date'
								placeholder='???'
								onChange={(e) => {
									setDateValue(e.target.value);
								}}
							/>
						</div>
						<span className='error-msg'>{birthError}</span>
					</div>

					{/* ?????? */}
					<div className='gender-box'>
						<span className='content-title'>??????</span>
						<select
							name='gender'
							id='gender'
							onChange={(e) => {
								setGenderValue(e.target.value);
							}}>
							<option value='??????'>??????</option>
							<option value='male'>??????</option>
							<option value='female'>??????</option>
							<option value='none'>????????????</option>
						</select>
						<span className='error-msg'>{genderError}</span>
					</div>

					{/* ?????? ?????? ????????? */}
					<div className='email-box'>
						<span className='content-title'>?????? ?????? ?????????(??????)</span>
						<input type='text' placeholder='????????????' />
					</div>

					{/* ???????????? */}
					<div className='certification-box'>
						<span className='content-title'>????????????</span>
						<div className='certification-inner-box'>
							<input
								type='text'
								id='phone-number'
								placeholder='???????????? ??????'
								onChange={(e) => {
									setPhoneValue(e.target.value);
								}}
							/>
							<button
								className='certification-btn center'
								onClick={() => {
									setDisabled(!disabled);
									setToggle(!toggle);
                  startTimer()
								}}
                disabled={certiNumber}>
								???????????? ??????
							</button>
						</div>
						<input
							type='text'
							placeholder='??????????????? ???????????????'
							disabled={disabled}
							onChange={(e) => {
								setCertificationValue(e.target.value);
							}}
						/>
						{toggle === true ? (
							<span className='timer'>
								0{min}:{sec < 10 && '0'}{sec}
							</span>
						) : null}
						<span className='error-msg'>{phoneError}</span>
					</div>

					<NavLink className='signup-btn center' disabled={signup} onClick={()=>{location.href='/naver-login/'}}>
						????????????
					</NavLink>
				</div>
			</div>
		</SingupPageBlock>
	);
};

export default SingupPage;
