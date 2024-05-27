import UnderConstructionImage from '../../assets/undraw_under_construction_-46-pa.svg';
import { Link } from 'react-router-dom';

function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <img src={UnderConstructionImage} alt="Page Not Found" className="w-64 mb-8" />
            <h1 className="text-3xl font-bold text-indigo-950 mb-4">We're working on it!</h1>
            <p className="text-gray-600 text-center mb-8">
                Oops! The page you are looking for is till under construction. Please check it later!.
            </p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Go back to the homepage
            </Link>
        </div>
    );
}

export default UnderConstruction;
