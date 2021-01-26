import React, { Component } from 'react';
import './Home.css';
import { CSSTransition } from 'react-transition-group';


class Home extends Component {

  state = {
    header: false
  }

  componentDidMount = () => {
    this.setState({header: true});
  };

  componentWillUnmount = () => {
    this.setState({header: false});
  }


  render() {
    return (
      <div>
      
      <CSSTransition 
          in={this.state.header}
          timeout={500}
          classNames="Home-transition"
          appear
          unmountOnExit

          onEnter={() => console.log("Enter!", this.state)}
          onExited={() => console.log("Exit!", this.state)}
          // unmountOnExit
          // onEntered={true}

        >

      <div className="Home">
        
        <h1>Suebtrakul Site</h1>
        <p>TESTING PARAGRAPH FOR HOME PAGE</p>
      </div>

      </CSSTransition>

      </div>
    );
  }
}

export default Home;