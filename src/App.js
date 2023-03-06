import Navbar from "./Components/CustomNavbar";
import Hero from './Components/Hero';
import About from "./Components/About";
import Contact from "./Components/Contact";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import Blog from "./Components/Blog";
import {Routes, Route} from 'react-router-dom';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from "./Components/Account";
import Signup from "./Components/Signup";
import "bootstrap/dist/css/bootstrap.css"


function App() {
  
  
  return (
    
    <AuthContextProvider>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/createpost" element={<Protected><CreatePost /></Protected>} />
    <Route path="/login" element={<Login />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/signup" element={<Signup />} />
    <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
   </Routes>

   </AuthContextProvider>
  );
}

export default App;
