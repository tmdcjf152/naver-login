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
				setIdError('아이디를 확인해주세요');
			} else {
				setIdError('');
			}
			if (pwdValueCheck == false) {
				setPwdError('하나이상의 대문자/소문자/숫자/특수문자 조합으로 8자 이상 입력해주세요');
			} else {
				setPwdError('');
			}
			if (rePwdValue === pwdValue) {
				setRePwdError('');
			} else {
				setRePwdError('비밀번호가 일치하지 않습니다.');
			}
			if (nameValue.length <= 1) {
				setNameError('정확한 이름을 작성해주세요');
			} else {
				setNameError('');
			}
			if (yearValue.length < 4) {
				setBirthError('태어난 연(년)도 4자리를 입력해주세요');
			} else if (yearValue.length == 4 && monthValue == '') {
				setBirthError('태어난 월을 선택해주세요');
			} else if (yearValue.length == 4 && monthValue !== '월' && dateValue.length !== 2) {
				setBirthError('태어난 일을 제대로 입력해주세요 ex) 1일 => 01일');
			} else {
				setBirthError('');
			}
			if (genderValue == '' || genderValue == '성별') {
				setGenderError('성별을 선택해주세요');
			} else {
				setGenderError('');
			}
			if (phoneValueCheck == false) {
				setPhoneError('-를 포한한 휴대폰번호 10-11자리를 입력해주세요 ');
			} else {
        setPhoneError('');
        setCertiNumber(false)
			}
      if(certificationValue.length == 6){
        setPhoneError('');
        setSignUp(false)
      }else if(phoneValueCheck == true && certificationValue.length < 6){
        setPhoneError('인증번호 6자리를 입력해주세요 ');
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
					{/* 아이디 */}
					<div className='id-box'>
						<span className='content-title'>아이디</span>
						<input
							type='text'
							onChange={(e) => {
								setIdValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{idError}</span>
					</div>

					{/* 비밀번호 */}
					<div className='pwd-box'>
						<span className='content-title'>비밀번호</span>
						<input
							type='password'
							valur={pwdValue}
							onChange={(e) => {
								setPwdValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{pwdError}</span>
					</div>

					{/* 비밀전호 재확인 */}
					<div className='re-pwd-box'>
						<span className='content-title'>비밀번호 재확인</span>
						<input
							type='password'
							onChange={(e) => {
								setRePwdValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{rePwdError}</span>
					</div>

					{/* 이름 */}
					<div className='name-box'>
						<span className='content-title'>이름</span>
						<input
							type='text'
							onChange={(e) => {
								setNameValue(e.target.value);
							}}
						/>
						<span className='error-msg'>{nameError}</span>
					</div>

					{/* 생년월일 */}
					<div className='birth-box'>
						<span className='content-title'>생년월일</span>
						<div className='birth-content-box'>
							<input
								type='text'
								id='year'
								placeholder='년(4자)'
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
								<option value='월'>월</option>
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
								placeholder='일'
								onChange={(e) => {
									setDateValue(e.target.value);
								}}
							/>
						</div>
						<span className='error-msg'>{birthError}</span>
					</div>

					{/* 성별 */}
					<div className='gender-box'>
						<span className='content-title'>성별</span>
						<select
							name='gender'
							id='gender'
							onChange={(e) => {
								setGenderValue(e.target.value);
							}}>
							<option value='성별'>성별</option>
							<option value='male'>남자</option>
							<option value='female'>여자</option>
							<option value='none'>선택안함</option>
						</select>
						<span className='error-msg'>{genderError}</span>
					</div>

					{/* 본인 확인 이메일 */}
					<div className='email-box'>
						<span className='content-title'>본인 확인 이메일(선택)</span>
						<input type='text' placeholder='선택입력' />
					</div>

					{/* 번호인증 */}
					<div className='certification-box'>
						<span className='content-title'>휴대전화</span>
						<div className='certification-inner-box'>
							<input
								type='text'
								id='phone-number'
								placeholder='전화번호 입력'
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
								인증번호 받기
							</button>
						</div>
						<input
							type='text'
							placeholder='인증번호를 입력하세요'
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
						가입하기
					</NavLink>
				</div>
			</div>
		</SingupPageBlock>
	);
};

export default SingupPage;
