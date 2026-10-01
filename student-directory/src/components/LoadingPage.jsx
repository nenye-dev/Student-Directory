import { LoaderCircle } from 'lucide-react';

function LoadingPage() {
    return (
        <div className="loading-page">
            <LoaderCircle />
            <h3 class="loading-state">Loading Students...</h3>
            <p>This might take a few seconds</p>
        </div>
    );
}

export default LoadingPage;
