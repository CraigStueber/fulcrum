import Header from './compentents/head_footer/header';
import Footer from './compentents/head_footer/footer';
import Form from './compentents/form';
import Invoice from './compentents/invoice/invoice';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6">
            <Invoice />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
