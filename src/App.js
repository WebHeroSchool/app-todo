import logo from './logo.svg';
import './App.css';
import {count, length} from './Number';

const flag = true;
const name = 'World';
const nameTwo = 'People';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{
          color: '#000',
          fontSize: 34,
          fontWeight: 700
        }}>
          Hello {flag ? name : nameTwo}!
        </p>
        <p>
          {flag && 'Flag is true'}
        </p>
        {44 + 33}
        {undefined}
        {null}
        {true}
        {false}
        <p>
          {'count * length = '}
          {count * length}
        </p>
      </header>
    </div>
  );
}

export default App;
