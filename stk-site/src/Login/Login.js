import React from 'react';
import './Login.css';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { SessionProvider, LoginButton } from "@inrupt/solid-ui-react";


export default function Login() {

  

  return (
    <div className="Login">

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      





      <SessionProvider sessionId="some-id">
        <LoginButton
          oidcIssuer="https://inrupt.net"
          redirectUrl="https://localhost:3000"
        />

      </SessionProvider>
    </div>
  )
}