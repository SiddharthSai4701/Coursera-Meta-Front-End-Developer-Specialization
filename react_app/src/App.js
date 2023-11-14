import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

// App is the root component
function App() {

  return(
    <div>
      {/* Components rendered here are the children components */}
      <Header name="Sid" color="red"/>
      <Main greet="Hii"/>
      <Sidebar greet="Namaste!!"/>
    </div>
  )

}

export default App;
