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
          <li className="gnav-item"><a href="#links">links</a></li>
          <li className="gnav-item"><a href="#works">works</a></li>
        </ul>
      </div>
    </nav>
    {/* <!-- /gnav --> */}

    {/* <!-- about --> */}
    <section id="links">
      <div class="inner">
      <h2>Links</h2>
        <div class="box">
          <p>twitter</p>
          <a href="https://twitter.com/kam_twi"></a>
        </div>

        <div class="box">
          <p>はてなブログ</p>
          <a href="https://kam.hatenadiary.com"></a>
        </div>

        <div class="box">
          <p>GitHub</p>
          <a href="https://github.com/kamikigit"></a>
        </div>

        <div class="box">
          <p>Qiita</p>
          <a href="https://qiita.com/kam_qiita"></a>
        </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
    </section>
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
        <p className="header-title font-effect-anaglyph">Kamiki's Portfolio</p>
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
