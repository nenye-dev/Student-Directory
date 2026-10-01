import { useState, useEffect } from 'react';

function useStudentsData() {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const fetchStudents = () => {
        fetch('https://dummyjson.com/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setStudents(data.users);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            })
            .catch(() => {
                setError(true);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setError(false);
            setIsLoading(false);
            fetchStudents();
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return { students, isLoading, error, isOnline };
}

export default useStudentsData;
