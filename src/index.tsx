import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/home';
import { LoginPage } from './routes/login';
import GgComponents from './routes/NotFound';
import { PostsPage } from './routes/posts';
import { ProfilePage } from './routes/profile';
import { RegisterPage } from './routes/register';
import { Settings } from './routes/settings';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/profile' element={<ProfilePage />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='register' element={<RegisterPage />} />
			<Route path='/*' element={<GgComponents.Gg404Page />} />
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();