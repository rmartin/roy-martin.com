import React, { Component } from 'react'
import Link from 'gatsby-link'
import './index.scss'

class IndexPage extends Component {
  render() {
    return (
        <div className="intro">
          <div className="container">
            <div className="headshot"></div>
            <h1>Roy Martin</h1>
            <p>Technical Leader. Passionate about building, growing and mentoring teams with the latest methods and technology.</p>
            <div className="link-container">
              <div className="link"><a href="https://www.linkedin.com/in/roycmartin/" target="_blank"><i className="simple-icon icon-social-linkedin"></i><span>Linked In</span></a></div>
              <div className="link"><a href="https://www.github.com/rmartin" target="_blank"><i className="simple-icon icon-social-github"></i><span>Github</span></a></div>
              <div className="link"><a href="https://www.youtube.com/channel/UCo01NdFAR0cfIXSaB2IlzDg" target="_blank"><i className="simple-icon icon-social-youtube"></i><span>YouTube</span></a></div>
              <div className="link"><a href="https://codepen.io/roymartin/" target="_blank"><i className="simple-icon icon-note"></i><span>CodePen</span></a></div>
              <div className="link"><a href="https://www.instagram.com/roycmartin/" target="_blank"><i className="simple-icon icon-social-instagram"></i><span>Instagram</span></a></div>
            </div>
          </div>
        </div>
    )
  }
}

export default IndexPage