import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <div className="footer">
          This project was coded by Zuzana Zitkova and is open sourced on{' '}
          <a
            href="https://github.com/ZuzanaZitkova/react-app-forecast"
            target="_blank"
            rel="noopener norefferer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
