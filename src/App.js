import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div  >
      <Router>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
