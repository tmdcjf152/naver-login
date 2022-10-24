import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { green } from '../style/theme';

const CheckPageBlock = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
	/* 체크박스 공통 CSS */
	input[type='checkbox'] {
		display: none;
	}
	input[type='checkbox'] + label {
		position: relative;
		display: inline-block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #ddd;
		cursor: pointer;
		margin-right: 10px;
		&::before {
			position: absolute;
			top: 2.5px;
			left: 2.5px;
			content: '\f00c';
			font-family: FontAwesome;
			font-size: 12px;
			text-align: center;
			color: #aaa;
		}
	}
	input[type='checkbox']:checked + label {
		position: relative;
		background: ${green};
		&::before {
			position: absolute;
			top: 2.5px;
			left: 2.5px;
			content: '\f00c';
			font-family: FontAwesome;
			font-size: 12px;
			text-align: center;
			color: #fff;
		}
	}
	/* =================================== */

	.check-inner-box {
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
					text-align: left;
				}
			}
			.logo-box {
				align-items: center;
				width: 100%;
				height: 100px;
				margin-bottom: 0.5rem;
				.logo-text {
					font-size: 2.5rem;
					color: ${green};
					font-family: 'Black Han Sans', sans-serif;
				}
			}
		}
		.all-check-box {
			display: flex;
			align-items: center;
			flex-direction: column;
			section {
				width: 100%;
				padding: 1rem;
			}
			section:nth-of-type(1) {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 80px;
				label:nth-of-type(1) {
					position: relative;
					.all-check-text {
						position: absolute;
						top: -10px;
						left: 30px;
						display: block;
						width: 400px;
						padding-top: 2px;
						font-size: 13px;
						color: #000;
						font-weight: bold;
						text-decoration: underline;
						line-height: 18px;
					}
				}
			}
			section:nth-of-type(2) {
				width: 100%;
			}
			article {
				width: 100%;
				height: 70px;
				margin-top: 0.5rem;
				padding: 1rem;
				overflow: scroll;
				font-size: 0.7rem;
				border: 1px solid #ddd;
			}
			.border-none {
				border: none;
			}
		}
    .btn-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      a{
        width: 49%;
        height: 50px;
        &:nth-of-type(1){
          background: #999;
          color: #fff;
          font: bold 1rem/1 'apple';
        }
        &:nth-of-type(2){
          background: ${green};
          color: #fff;
          font: bold 1rem/1 'apple';
        }
      }
    }
	}
`;

const CheckPage = () => {
	return (
		<CheckPageBlock>
			<div className='check-inner-box'>
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

				<article className='all-check-box'>
					<section className='all-check'>
						<input type='checkbox' name='check-all' id='check-all' />
						<label for='check-all'>
							<span className='all-check-text'>
								<strong>네이버 이용약관, 개인정보 수집 및 이용, 위치기반서비스 이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.</strong>
							</span>
						</label>
					</section>

					<section className='check-one'>
						<input type='checkbox' name='save-id' id='save-id' />
						<label for='save-id' />
						<span>
							네이버 이용약관 동의 <span className='green'>(필수)</span>
						</span>
						{/* 네이버 이용약관 */}
						<article>
							<h3>여러분을 환영합니다.</h3>
							<br />
							<p>
								네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는
								네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스
								이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
							</p>
							<br />
							<p>
								네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을
								내시어 주의 깊게 살펴봐 주시기 바랍니다.
							</p>
							<br />
							<p>다양한 네이버 서비스를 즐겨보세요.</p>
							<br />
							<p>
								네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션,
								콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
							</p>
							<p>
								여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인
								내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하 ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
							</p>
							<br />
							<p>
								네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한
								필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을
								제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
							</p>
							<br />
							<p>
								네이버 서비스에는 기본적으로 본 약관이 적용됩니다만 네이버가 다양한 서비스를 제공하는 과정에서 부득이 본 약관 외 별도의 약관, 운영정책 등을
								적용하는 경우(예, 네이버페이, V LIVE 등)가 있습니다. 그리고 네이버 계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가
								정한 고유의 약관, 운영정책 등이 적용될 수 있습니다. 이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
							</p>
							<br />
							<p>회원으로 가입하시면 네이버 서비스를 보다 편리하게 이용할 수 있습니다.</p>
							<br />
							<p>
								여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, 네이버는 이에 대한 승낙을 통해 회원 가입 절차를 완료하고 여러분께 네이버
								서비스 이용 계정(이하 ‘계정’)을 부여합니다. 계정이란 회원이 네이버 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기
								위해 설정한 회원 식별 단위를 말합니다. 회원은 자신의 계정을 통해 좀더 다양한 네이버 서비스를 보다 편리하게 이용할 수 있습니다. 이와 관련한
								상세한 내용은 계정 운영정책 및 고객센터 내 네이버 회원가입 방법 등에서 확인해 주세요.
							</p>
							<br />
							<p>
								네이버는 단체에 속한 여러 구성원들이 공동의 계정으로 네이버 서비스를 함께 이용할 수 있도록 단체회원 계정도 부여하고 있습니다. 단체회원
								구성원들은 하나의 계정 및 아이디(ID)를 공유하되 각자 개별적으로 설정한 비밀번호를 입력하여 계정에 로그인하고 각종 서비스를 이용하게 됩니다.
								단체회원은 관리자와 멤버로 구성되며, 관리자는 구성원 전부로부터 권한을 위임 받아 단체회원을 대표하고 단체회원 계정을 운용합니다.
							</p>
							<br />
						</article>
					</section>
					<section>
						<input type='checkbox' name='save-id' id='save-id' />
						<label for='save-id' />
						<span>
							개인정보 수집 및 이용 동의 <span className='green'>(필수)</span>
						</span>
						{/* 개인정보 수집 */}
						<article>
							<h3>여러분을 환영합니다.</h3>
							<br />
							<p>
								네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는
								네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스
								이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
							</p>
							<br />
							<p>
								네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을
								내시어 주의 깊게 살펴봐 주시기 바랍니다.
							</p>
							<br />
							<p>다양한 네이버 서비스를 즐겨보세요.</p>
							<br />
							<p>
								네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션,
								콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
							</p>
							<p>
								여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인
								내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하 ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
							</p>
							<br />
							<p>
								네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한
								필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을
								제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
							</p>
							<br />
							<p>
								네이버 서비스에는 기본적으로 본 약관이 적용됩니다만 네이버가 다양한 서비스를 제공하는 과정에서 부득이 본 약관 외 별도의 약관, 운영정책 등을
								적용하는 경우(예, 네이버페이, V LIVE 등)가 있습니다. 그리고 네이버 계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가
								정한 고유의 약관, 운영정책 등이 적용될 수 있습니다. 이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
							</p>
							<br />
							<p>회원으로 가입하시면 네이버 서비스를 보다 편리하게 이용할 수 있습니다.</p>
							<br />
							<p>
								여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, 네이버는 이에 대한 승낙을 통해 회원 가입 절차를 완료하고 여러분께 네이버
								서비스 이용 계정(이하 ‘계정’)을 부여합니다. 계정이란 회원이 네이버 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기
								위해 설정한 회원 식별 단위를 말합니다. 회원은 자신의 계정을 통해 좀더 다양한 네이버 서비스를 보다 편리하게 이용할 수 있습니다. 이와 관련한
								상세한 내용은 계정 운영정책 및 고객센터 내 네이버 회원가입 방법 등에서 확인해 주세요.
							</p>
							<br />
							<p>
								네이버는 단체에 속한 여러 구성원들이 공동의 계정으로 네이버 서비스를 함께 이용할 수 있도록 단체회원 계정도 부여하고 있습니다. 단체회원
								구성원들은 하나의 계정 및 아이디(ID)를 공유하되 각자 개별적으로 설정한 비밀번호를 입력하여 계정에 로그인하고 각종 서비스를 이용하게 됩니다.
								단체회원은 관리자와 멤버로 구성되며, 관리자는 구성원 전부로부터 권한을 위임 받아 단체회원을 대표하고 단체회원 계정을 운용합니다.
							</p>
							<br />
						</article>
					</section>
					<section>
						<input type='checkbox' name='save-id' id='save-id' />
						<label for='save-id' />
						<span>
							위치기반서비스 이용약관 동의 <span className='gray'>(선택)</span>
						</span>
						{/* 위치기반 */}
						<article>
							<h3>여러분을 환영합니다.</h3>
							<br />
							<p>
								네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는
								네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스
								이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
							</p>
							<br />
							<p>
								네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을
								내시어 주의 깊게 살펴봐 주시기 바랍니다.
							</p>
							<br />
							<p>다양한 네이버 서비스를 즐겨보세요.</p>
							<br />
							<p>
								네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션,
								콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
							</p>
							<p>
								여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의 네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인
								내용은 각 서비스 상의 안내, 공지사항, 네이버 웹고객센터(이하 ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
							</p>
							<br />
							<p>
								네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한
								필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을
								제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.
							</p>
							<br />
							<p>
								네이버 서비스에는 기본적으로 본 약관이 적용됩니다만 네이버가 다양한 서비스를 제공하는 과정에서 부득이 본 약관 외 별도의 약관, 운영정책 등을
								적용하는 경우(예, 네이버페이, V LIVE 등)가 있습니다. 그리고 네이버 계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가
								정한 고유의 약관, 운영정책 등이 적용될 수 있습니다. 이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
							</p>
							<br />
							<p>회원으로 가입하시면 네이버 서비스를 보다 편리하게 이용할 수 있습니다.</p>
							<br />
							<p>
								여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, 네이버는 이에 대한 승낙을 통해 회원 가입 절차를 완료하고 여러분께 네이버
								서비스 이용 계정(이하 ‘계정’)을 부여합니다. 계정이란 회원이 네이버 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기
								위해 설정한 회원 식별 단위를 말합니다. 회원은 자신의 계정을 통해 좀더 다양한 네이버 서비스를 보다 편리하게 이용할 수 있습니다. 이와 관련한
								상세한 내용은 계정 운영정책 및 고객센터 내 네이버 회원가입 방법 등에서 확인해 주세요.
							</p>
							<br />
							<p>
								네이버는 단체에 속한 여러 구성원들이 공동의 계정으로 네이버 서비스를 함께 이용할 수 있도록 단체회원 계정도 부여하고 있습니다. 단체회원
								구성원들은 하나의 계정 및 아이디(ID)를 공유하되 각자 개별적으로 설정한 비밀번호를 입력하여 계정에 로그인하고 각종 서비스를 이용하게 됩니다.
								단체회원은 관리자와 멤버로 구성되며, 관리자는 구성원 전부로부터 권한을 위임 받아 단체회원을 대표하고 단체회원 계정을 운용합니다.
							</p>
							<br />
						</article>
					</section>
					<section>
						<input type='checkbox' name='save-id' id='save-id' />
						<label for='save-id' />
						<span>
							프로모션 정보 수신 동의<span className='gray'>(선택)</span>{' '}
						</span>
						{/* 프로모션 정보 */}
						<article className='border-none'>
							네이버에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(네이버앱 알림 또는 문자), 이메일로 받아보실 수 있습니다. 일부 서비스(별도 회원 체계로
							운영하거나 네이버 가입 이후 추가 가입하여 이용하는 서비스 등)의 경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도 수신 동의에
							대해 별도로 안내하고 동의를 받습니다.
						</article>
					</section>
				</article>
        <div className="btn-box">
          <NavLink className='center' to='/'>취소</NavLink>
          <NavLink className='center' to='/signup'>확인</NavLink>
        </div>
			</div>
		</CheckPageBlock>
	);
};

export default CheckPage;
