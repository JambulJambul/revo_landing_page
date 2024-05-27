import NotFoundIcon from '../../assets/undraw_page_not_found_re_e9o6.svg';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <img src={NotFoundIcon} alt="Page Not Found" className="w-64 mb-8" />
            <h1 className="text-3xl font-bold text-indigo-950 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 text-center mb-8">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Go back to the homepage
            </Link>
        </div>
    );
}

export default NotFound;
