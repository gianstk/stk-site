import React, { Component } from 'react';

import './About.css';
import { CSSTransition } from 'react-transition-group';
import { Grid, Image, Container, Header, Segment } from 'semantic-ui-react';

// import koi from '../../public/illustrator/koiWave.png';

class About extends Component {
  state = {
    transitionIn: false,
  }

  componentDidMount = () => {
    this.setState({
      transitionIn: true
    });
  }

  render() {   
      return (
          <CSSTransition
                          in={this.state.transitionIn}
                          // in={true}
                          timeout={1000}
                          classNames="About-transition"
                          appear
                          unmountOnExit
                          onEnter={() => console.log("Enter!", this.state)}
                          onExited={() => console.log("Exit!", this.state)}
                        >
              <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid centered stackable verticalAlign='middle'>
                  <Grid.Row>
                    
                    <Grid.Column floated='right' width={6}>
                      <Container fluid>
                        <Image src={window.location.origin + '/profile.jpg'} className="img-profile" centered/>  
                      </Container>                      
                    </Grid.Column>


                    <Grid.Column floated='left' width={6}>
                      <Container text>
                        <Header as='h1' style={{fontSize: '3em', leftPadding: '8em'}}>Gian | Suebtrakul</Header>
                        <p style={{ fontSize: '1.2em', textAlign: 'justify' }}>Gian is a software engineer and illustrator, being passionated in learning new technologies and applying them to enhance the way we live as he is looking forward to world where there are no boundaries and inequality as everone has been facilitated by technological developments. Additionally, he does believe that both logic from the science side should always come with the creativity from the arts and designs to reach the full potential of the new inventions.</p>
                        <p style={{ fontSize: '1.2em', textAlign: 'justify' }}>Being raised in Bangkok for almost the whole life and then moving to Sydney to broad his mind and knowledge, he got opportunities to learn various trends of technology such as Web Application Development, Machine Learning, and especially Blockchain & Decentralized Services. This seems to be one of the technologies that could entirely change the way we live when there is no monopoly in digital assets (such as personal data in social network platform these days).</p>
                      </Container>
                    </Grid.Column>

                  </Grid.Row>

                  <Grid.Row style={{paddingTop: '3em'}}>
                    ALSKDJALKSJDLKAJSD
                  </Grid.Row>
                </Grid>
              </Segment>

          </CSSTransition>
      );
    


    
    

    
  }
}

export default About;