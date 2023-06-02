import styles from './App.css'; // DONT REMOVE
import Header from './components/Header';
// import TestingComponent from './components/TestingComponent';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />

      {/* <TestingComponent /> */}
    </div>
  );
}

export default App;
