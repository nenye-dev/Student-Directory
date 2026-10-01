import { CircleX } from 'lucide-react';

function ErrorPage() {
    return (
        <div className="error-page">
            <CircleX />
            <h3>Unable to Load Students.</h3>
            <p>Something went wrong while fetching the<br />student directory.</p>
        </div>
    );
}

export default ErrorPage;
