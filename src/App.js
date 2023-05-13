import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Tickets from './Pages/ShowsTickeks/Tickets';
import SingleTickect from './Pages/SingleShow/SingleTickect';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Tickets />} />
        <Route exact path="/ticket/:id" element={<SingleTickect />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
