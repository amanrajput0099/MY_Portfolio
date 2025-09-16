import Layout from "./Components/Layout/Layout";
import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
import Educations from "./pages/Educations/Educations";
import Projetcs from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import WorkExp from "./pages/workExp/WorkExp";
import MobileNav from "./Components/MobileNav/MobileNav";

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
import { Contacts } from "./pages/Contacts/Contacts";

function App() {
  return (
    < >
    <ToastContainer/>
    <MobileNav/>
    <Layout/>
    <div className="container">
<About/>
<Educations/>
<Techstack/>
<Projetcs/>
<WorkExp/>
{/* <Contact/> */}
<Contacts/>
    </div>
    <div className="footer mb-3 ms-3">
      <h4 className="text-center">
        Made with ❤😍 Aman &copy; 2025
      </h4>
    </div>
    <ScrollToTop 
    smooth 
    color="#f29f67"
    style={{backgroundColor:'#1e1e12c',borderRadius:'80px',}}/>
    
    </>
  );
}

export default App;
