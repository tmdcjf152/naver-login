import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CheckPage from './check/CheckPage';
import LoginPage from './login/LoginPage';
import SingupPage from './signup/SingupPage';
import GlobalStyle from './style/GlobalStyle';

const AppBlock = styled.div``;

const App = () => {
	return (
		<>
			<GlobalStyle/>
				<Routes>
					<Route path='/' element={<LoginPage />} />;
					<Route path='/check' element={<CheckPage />} />;
					<Route path='/signup' element={<SingupPage />} />;
				</Routes>
		</>
	);
};

export default App;
