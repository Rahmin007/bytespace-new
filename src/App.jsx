import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './utils/routes';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.signIn} element={<SignInPage />} />
        <Route path={ROUTES.signUp} element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
