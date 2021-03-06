import React from "react";
import "./Jumbotron.css";
import Particles from "react-particles-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from "./../About/About";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

function Jumbotron() {
  return (
    <Router>

      <section id="jumbotron">
        <div className="landing">
          <div className="home-wrap">
            <div id="particles-js">
              <Particles params={particleOpt} height="100vh" />
            </div>
            <div className="caption">
              <h1>Technology makes the world a new place</h1>
              <h3>
                Compugear is a leader in providing smart, cutting-edge technology
                solutions for global organizations of all sizes
              </h3>
              <Link className="btn btn-outline-light btn-lg" to="/aboutus">
                Who we are
              </Link>
              <a className="btn btn-outline-light btn-lg" href="#">
                products
              </a>
            </div>
          </div>
        </div>
        <div className="mask-block"></div>
      </section>

      <Switch>
        <Route path="/aboutus">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default Jumbotron;
