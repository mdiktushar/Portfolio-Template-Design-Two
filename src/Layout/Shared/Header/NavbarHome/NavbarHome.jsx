import React from "react";

const NavbarHome = () => {
  return (
    <header id="menu">
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <a className="navbar-brand" href="#menu">
                <img src="images/Logo/01.png" alt="" />
              </a>{" "}
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li className="active">
                  <a className="scroll" href="#menu">
                    Home
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#education">
                    Education
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#expriance">
                    Expriance
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#download">
                    Download
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* navbar-collapse */}
          </div>
          {/* container-fluid */}
        </div>
      </div>
    </header>
  );
};

export default NavbarHome;
