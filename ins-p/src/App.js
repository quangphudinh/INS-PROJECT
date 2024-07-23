import './App.css';
import MainContent from './components/MainContent';
import RightContent from './components/RightContent';
import Header from './components/Header';
import LeftContent from './components/LeftContent';

function App() {
    return (
        <>
            {/* <div class="main">
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
      </div> */}

            <div class="section-main">
                <div class="inner-wrap">
                    <div class="sidebar-left">
                        <LeftContent />
                    </div>
                    <div class="main-content">
                        <div class="inner-head">
                            <Header />
                        </div>
                        <div class="inner-post">
                            <MainContent />
                        </div>
                    </div>
                    <div class="sidebar-right">
                        <RightContent />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
