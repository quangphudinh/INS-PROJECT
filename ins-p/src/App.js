import './App.css';
import MainContent from './components/MainContent';
import RightContent from './components/RightContent';
import Header from './components/Header';
import LeftContent from './components/LeftContent';

function App() {
  return (
    <>
      <body className='body'>
        <LeftContent />
        <div className='main'>
          <Header />
          <MainContent />
        </div>
        <RightContent />
      </body>
    </>
  );
}

export default App;
