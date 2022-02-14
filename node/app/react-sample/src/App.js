import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [small, setSmall] = useState(false);
  useEffect(() =>{
    if (typeof window !=="undefined"){
      window.addEventListener("scroll", () => 
        setSmall(window.pageYOffset > 10)
      );
    }
  }, []);
  return (
    <div className="wrapper">
    <main className="content">
      {/* header */}
      {small ? <HeaderSmall /> : <HeaderBig />}
      {/*  /header  */}

    {/* <!-- gnav --> */}
    <nav className="gnav">
      <div className="gnav-inner">
        <ul className="gnav-list">
          <li className="gnav-item"><a href="#about">about</a></li>
          <li className="gnav-item"><a href="#works">works</a></li>
        </ul>
      </div>
    </nav>
    {/* <!-- /gnav --> */}

    {/* <!-- about --> */}
    <div id="about">
      <p>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/>


      </p>
    </div>
    {/* <!-- /about--> */}

    {/* works */}
    <div id ="works">
      </div>
    {/* /works */}

  {/* <!-- footer --> */}
  <footer className="footer">
    <div className="copyright">&copy;Kamiki</div>
  </footer>
  {/* <!-- /footer --> */}

    </main>
  </div>
  );
}

function HeaderBig(){
  return (
    <header className = "header big">
      <div className="header-inner">
        <p className="header-title font-effect-anaglyph">Kamiki</p>
        <p className="header-subtitle ">Hello World :)</p>
      </div>
    </header>
  );
}

function HeaderSmall(){
  return (
    <header className = "small">
      <div className="header-inner">
        <p className="header-title font-effect-anaglyph small">Kamiki</p>
        <p className="header-subtitle small">Hello World :)</p>
      </div>
    </header>
  );
}

export default App;
