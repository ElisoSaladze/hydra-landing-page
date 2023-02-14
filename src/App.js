import './App.css';
import Navbar from './components/Navbar';
import First from './components/First';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Tech from './components/Tech';
import Process from './components/Process';
import Form from './components/Form';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <First />
      <Contact />
      <Introduction />
      <Services />
      <Tech />
      <Process />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
