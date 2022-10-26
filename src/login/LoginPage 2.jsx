import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { green } from '../style/theme';
import Logininput from './Logininput';

const LoginPageBlock = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
	.login-inner-box {
		width: 555px;
		height: 100%;
		padding: 1rem;
		.login-header {
			.language-box {
				display: flex;
				justify-content: flex-end;
				width: 100%;
				select {
					width: 80px;
					height: 30px;
					padding-left: 5px;
					border: 1px solid #ddd;
					font-size: 0.7rem;
					text-align:left;
				}
			}
			.logo-box {
				align-items: flex-end;
				width: 100%;
				height: 100px;
				margin-bottom: 2.5rem;
                .logo-text{
                    font-size: 2.5rem;
				color: ${green};
                font-family: 'Black Han Sans', sans-serif;
                }
			}
		}
        .login-input-box{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .search-box{
            width: 100%;
			height: 50px;
            a{
				font-size: 0.8rem;
				color: #999;
				&:nth-of-type(2){
					&::before{
						padding: 0rem 1rem;
						content: '|';
					}
					&::after{
						padding: 0rem 1rem;
						content: '|';
					}
				}
            }
        }
	}
`;

const LoginPage = () => {

	return (
		<LoginPageBlock className='flex-center'>
			<div className='login-inner-box'>
				<header className='login-header'>
					<div className='language-box'>
						<select name='language' id='language'>
							<option value='KR'>한국어</option>
							<option value='US'>English</option>
							<option value='CN'>中文(简体)</option>
							<option value='TW'>中文(台灣)</option>
						</select>
					</div>
					<NavLink to='/' className='logo-box center'>
						<h1 className='logo-text'>NAVER</h1>
					</NavLink>
				</header>
				<div className='login-input-box'>
					<Logininput />
				</div>
                <div className="search-box center">
                    <NavLink to='/'>비밀번호 찾기</NavLink>
                    <NavLink to='/'>아이디 찾기</NavLink>
                    <NavLink to='/check'>회원가입</NavLink>
                </div>
			</div>
		</LoginPageBlock>
	);
};

export default LoginPage;
