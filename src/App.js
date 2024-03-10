import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './component/view/rootroutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </div>
  );
}

export default App;
