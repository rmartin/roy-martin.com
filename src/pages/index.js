import React, { Component } from 'react'
import Link from 'gatsby-link'
import TypeIt from 'typeit'
import { FullPage, Slide } from 'react-full-page';



class Type extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props);
  }

  render() {
    return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
  }
}

class IndexPage extends Component {
  render() {
    return (

      <FullPage>
        <Slide>
          <div className="slide">
            <h1 className="hero-home-large">
              <Type
                // strings={['echo \'Hello World.\'', 'node start-roy-martin.js', 'Starting roy-martin.com', 'Loading Dependencies', 'Reticulating Splines']}
                strings={['Hello World.']}
                loop={false}
                loopDelay={5000}
                breakLines={false}
                startDelete={true}
                speed={40}
              />
            </h1>
          </div>
        </Slide>
        <Slide className="roy">
          <div className="slide about">
            <div>
              <h5>About</h5>
              <h1>Roy Martin</h1>
              <p>Portland based developer, technical leader, entrepreneur, dad and student of life.</p>
              <div className="link-container">
                <div className="link"><a href="https://www.github.com/rmartin" target="_blank"><i className="simple-icon icon-social-github"></i><span>Github</span></a></div>
                <div className="link"><a href="https://www.linkedin.com/in/roycmartin/" target="_blank"><i className="simple-icon icon-social-linkedin"></i><span>Linked In</span></a></div>
                <div className="link"><a href="https://www.youtube.com/channel/UCo01NdFAR0cfIXSaB2IlzDg" target="_blank"><i className="simple-icon icon-social-youtube"></i><span>YouTube</span></a></div>
                <div className="link"><a href="https://codepen.io/roymartin/" target="_blank"><i className="simple-icon icon-note"></i><span>CodePen</span></a></div>
                <div className="link"><a href="https://open.spotify.com/user/1222448983?si=RJYubpWiS-uB9Z9PrFsAng" target="_blank"><i className="simple-icon icon-music-tone-alt"></i><span>Spotify</span></a></div>
                <div className="link"><a href="https://www.instagram.com/roycmartin/" target="_blank"><i className="simple-icon icon-social-instagram"></i><span>Instagram</span></a></div>
              </div>
            </div>
          </div>
        </Slide>
      </FullPage>
    )
  }
}

export default IndexPage
