import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            <p>404 - Not Found</p>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default NotFoundPage;
