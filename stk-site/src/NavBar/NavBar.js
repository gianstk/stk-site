import React from 'react';

import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Sidebar,
  Menu,
  Segment,
  Icon,
  Header,
  Image,
} from 'semantic-ui-react';

const NavBar = props => {


  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>

      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default NavBar;