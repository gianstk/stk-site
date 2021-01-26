import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css'
import {
  Menu,
  Grid,
} from 'semantic-ui-react';

import { 
  Link
} from 'react-router-dom';

export default class NavBar extends Component {
  state = { activeItem: "Suebtrakul" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
 

  render() {
    const { activeItem } = this.state
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8} textAlign="center">
            <Menu pointing secondary fluid size="huge" widths={4}>
            <Menu.Item position="left"
              width={2}
              name='Suebtrakul'
              as={ Link }
              to=''
              active={activeItem === 'Suebtrakul'}
              onClick={this.handleItemClick}
              huge
            />

            <Menu.Item position="left"
              width={2}
              name='projects'
              as={ Link }
              to='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />

            <Menu.Item position="right"
              width={2}
              name='art gallery'
              as={ Link }
              to='gallery'
              active={activeItem === 'art gallery'}
              onClick={this.handleItemClick}
            />

            <Menu.Item position="right"
              width={2}
              name='me'
              as={ Link }
              to='about'
              active={activeItem === 'me'}
              onClick={this.handleItemClick}
            />

            {/* <Menu.Item position="right"
              name='login'
              as={ Link }
              to='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            /> */}
          </Menu>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
        
    )
  }
  
}