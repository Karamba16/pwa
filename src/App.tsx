import "./Styles/Main.sass"
import "./Styles/Reset.sass"
import { useState } from 'react'
import Header from "./Components/Header/Header";
import {Student} from "./utils/types";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import {Route, Routes, Navigate, HashRouter} from 'react-router-dom';
import StudentPage from "./pages/StudentPage/StudentPage";
import StudentsList from "./pages/StudentsList/StudentsList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HomePage from "./pages/HomePage/HomePage";

function App() {

    const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(undefined)

    return (
        <HashRouter>

            <div className="App">

                <div className="wrapper">

                    <Header />

                    <div className="content-wrapper">

                        <Breadcrumbs selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}/>

                        <Routes>

                            <Route path="/" element={<Navigate to="/home" replace />} />

                            <Route path="/home" element={<HomePage />} />

                            <Route path="/profile" element={<ProfilePage />} />

                            <Route path="/students" element={<StudentsList />} />

                            <Route path="/students/:id" element={<StudentPage selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} />} />

                        </Routes>

                    </div>

                </div>

            </div>

        </HashRouter>
    )
}

export default App
