import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Tickets from './Pages/Tickets';
import SingleTickect from './Pages/SingleTickect';
import Navbar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Tickets/>} />
          <Route exact path="/ticket/:show" element={<SingleTickect/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
