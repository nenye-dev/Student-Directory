import { useState, useEffect } from 'react'
import Header from './components/header.jsx'
import Body1 from './components/Body1.jsx'
import LoadingPage from './components/LoadingPage.jsx'
import OfflinePage from './components/OfflinePage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import StudentNotFound from './components/StudentNotFound.jsx'
import StudentsList from './components/StudentsList.jsx'
import useStudentsData from './hooks/useStudentsData.js'
import './App.css'





function App() {
    const { students, isLoading, error, isOnline } = useStudentsData();
    const [searchText, setSearchText] = useState(localStorage.getItem('searchText') || '');
    const [selectedCity, setSelectedCity] = useState(localStorage.getItem('selectedCity') || 'All Cities');

    useEffect(() => {
        localStorage.setItem('searchText', searchText);
    }, [searchText]);

    useEffect(() => {
        localStorage.setItem('selectedCity', selectedCity);
    }, [selectedCity]);

    const filteredStudents = students.filter((student) => {
        const matchesUsername = student.username
            .toLowerCase()
            .includes(searchText.toLowerCase());
        const matchesCity = selectedCity === 'All Cities' ||
            student.address.city === selectedCity;
        return matchesUsername && matchesCity;
    });

    const cities = [...new Set(students.map((student) => {
        return student.address.city;
    }))];
    return (
        <>
            <Header />
            <div className="page">
                <Body1
                    searchText={searchText}
                    setSearchText={setSearchText}
                    cities={cities}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    isOnline={isOnline}
                    error={error}
                />
                {isLoading && <LoadingPage />}
                {!isOnline && <OfflinePage />}
                {error && <ErrorPage />}
                {isOnline && !isLoading && !error && filteredStudents.length === 0 && (
                    <StudentNotFound searchText={searchText} />
                )}
                {isOnline && !isLoading && !error && filteredStudents.length > 0 && (
                    <StudentsList filteredStudents={filteredStudents} />
                )}
            </div>
        </>
    );
}

export default App
