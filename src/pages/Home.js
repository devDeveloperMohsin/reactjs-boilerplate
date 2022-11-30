import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Counter from '../components/Counter';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: 100 }} />
        
        <br />
        <Link to="/hello">Hello Page</Link>
        
      </header>

      <Counter />
    </div>
  );
}

export default Home;
