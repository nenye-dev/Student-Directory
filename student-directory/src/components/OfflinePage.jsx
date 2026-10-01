import { WifiOff } from 'lucide-react';

function OfflinePage() {
    return (
        <div className="internet-loss-page">
            <WifiOff />
            <p>Connection Lost. <br />
            Please check your Internet Connection and Try Again.</p>
        </div>
    );
}

export default OfflinePage;
