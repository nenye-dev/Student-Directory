import { Search } from 'lucide-react';

function StudentNotFound({ searchText }) {
    return (
        <div className="user-not-found">
            <Search />
            <p>Student Not Found...</p>
            <p>We couldn't find any student named "{searchText}"</p>
        </div>
    );
}

export default StudentNotFound;
