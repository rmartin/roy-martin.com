import React, { Component } from 'react'
import Link from 'gatsby-link'
// import ReactTypewrite from 'react-typewrite'
import TypeIt from 'typeit'
import Terminal from 'terminal-in-react';


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

  manRoyMartin = () => '<b>Name</b><br/>Roy Martin<br/><b>Synopsis</b><br/>I am a developer, technical leader, entrepreneur and student of life.<br/>[END]<br/>'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        {/* <h1>
        <Type 
            strings={['echo \'Hello World.\'', 'node start-roy-martin.js', 'Starting roy-martin.com', 'Loading Dependencies', 'Reticulating Splines']}
            loop={false}
            loopDelay={5000}
            breakLines={false}
            startDelete={true}
            speed={40}
          />
        </h1> */}
        <Terminal
          color='black'
          backgroundColor='white'
          outputColor='black'
          barColor='black'
          prompt='black'
          showActions={false}
          hideTopBar={true}
          allowTabs={false}
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'man': this.manRoyMartin,
            'man roy-martin': this.manRoyMartin,
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Welcome to the personal site of Roy Martin. Type "help" to get started.'
        />

      </div>)
  }
}

export default IndexPage
