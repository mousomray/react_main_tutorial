import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import GetContext from './GetContext';
import Users from './Users';
import User_2 from './User_2';
import Post from './Post';

function Context() {
    return (
        <div className="App">
            <GetContext>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Users />} />
                        <Route path='/user' element={<User_2 />} />
                        <Route path='/post' element={<Post />} />
                    </Routes>
                </Router>
            </GetContext>

        </div>
    );
}

export default Context;
