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
      .id-box{
position: relative;
          &::before{
            position: absolute;
            top: 40px;
            right: 20px;
            content: "@naver.com";
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
      .email-box{
        margin-bottom: 2.5rem;
      }
			.certification-box {
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
						font: bold 1rem/1 'apple';
						color: #fff;
					}
				}
      }
      .signup-btn{
        width: 450Px;
        height: 50px;
        margin-top: 1rem;
        background: ${green};
        font: bold 1rem/1 'apple';
        color: #fff;
      }
      }
	}
`;

const SingupPage = () => {
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
						<input type='text'  />
						<span className='error-msg'>에러메세지</span>
					</div>

					{/* 비밀번호 */}
					<div className='pwd-box'>
						<span className='content-title'>비밀번호</span>
						<input type='password' />
						<span className='error-msg'>에러메세지</span>
					</div>

					{/* 비밀전호 재확인 */}
					<div className='re-pwd-box'>
						<span className='content-title'>비밀번호 재확인</span>
						<input type='password' />
						<span className='error-msg'>에러메세지</span>
					</div>

					{/* 이름 */}
					<div className='name-box'>
						<span className='content-title'>이름</span>
						<input type='text' />
						<span className='error-msg'>에러메세지</span>
					</div>

					{/* 생년월일 */}
					<div className='birth-box'>
						<span className='content-title'>생년월일</span>
						<div className='birth-content-box'>
							<input type='text' id='year' placeholder='년(4자)' />
							<select name='month' id='month'>
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
							<input type='text' id='date' placeholder='일' />
						</div>
						<span className='error-msg'>에러메세지</span>
					</div>

					{/* 성별 */}
					<div className='gender-box'>
						<span className='content-title'>성별</span>
						<select name='gender' id='gender'>
							<option value=''>성별</option>
							<option value='male'>남자</option>
							<option value='female'>여자</option>
							<option value='none'>선택안함</option>
						</select>
						<span className='error-msg'>에러메세지</span>
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
							<input type='text' id='phone-number' placeholder='전화번호 입력' />
							<span className='certification-btn center'>인증번호 받기</span>
						</div>
						<input type='text' placeholder='인증번호를 입력하세요' />
						<span className='error-msg'>에러메세지</span>
					</div>

          <span className='signup-btn center'>
            가입하기
          </span>
				</div>
			</div>
		</SingupPageBlock>
	);
};

export default SingupPage;
