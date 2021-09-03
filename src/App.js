import './App.css';
import {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    },1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#445a70';
      showAlert('Dark mode has been enabled','success');
      document.title = 'TextUtilis - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtilis is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = ' Install TextUtilis now!!'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtilis - Light Mode';
    }
  }

  return (
    <div>
      <Router>
      <Navbar title="TextUtilis" about="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
        
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode}></TextForm>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
