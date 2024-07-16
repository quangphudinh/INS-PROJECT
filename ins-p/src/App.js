import './App.css';
import MainContent from './components/MainContent';
import RightContent from './components/RightContent';
import Header from './components/Header';
import LeftContent from './components/LeftContent';

function App() {
  return (
    <>
      {/* <body className='body'>
        <LeftContent />
        <div className='main'>
          <Header />
          <MainContent />
        </div>
        <RightContent />
      </body> */}

      <div class="main">
        <div class="box sidebar-1">
          <LeftContent />
          <div class="line"></div>
        </div>
        <div class="box sidebar-2">
          <RightContent />
        </div>
        <div class="article">
          <div class="box header"><Header /></div>
          <div class="box footer"><MainContent /></div>
        </div>
      </div>
    </>
  );
}

export default App;
