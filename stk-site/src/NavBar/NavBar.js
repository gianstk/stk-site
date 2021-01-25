import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css'
import {
  Menu,
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
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Suebtrakul'
            as={ Link }
            to=''
            active={activeItem === 'Suebtrakul'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='projects'
            as={ Link }
            to='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='art gallery'
            as={ Link }
            to='gallery'
            active={activeItem === 'art gallery'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='me'
            as={ Link }
            to='about'
            active={activeItem === 'me'}
            onClick={this.handleItemClick}
          />

          <Menu.Item position='right'
            name='login'
            as={ Link }
            to='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu>
        
        
      </div>
    )
  }
  
}