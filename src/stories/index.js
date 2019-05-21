import React from 'react';

import { storiesOf } from '@storybook/react';
import {users,profilePics,defaultPic} from '../index'
import Button from '../components/Button';
import Image from '../components/Image';
import InputField from '../components/InputField';
import Profile from '../components/Profile';
import Form from '../components/Form';


storiesOf('Button', module)
  .add('Normal button', () => (
    <div style={{height: '50px', width: '70px'}}>
      <Button content = "click" type = "button"  />
    </div>
  ))
  .add('Form button', () => (
    <div style={{height: '50px', width: '70px'}}>
      <Button content = "submit" type = "submit"  />
    </div>
  ));

storiesOf('Image',module)
  .add('Square image', () => (
    <Image isRounded={false} url="https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg" alt="profile picture" />
  ))
  .add('Round image', () => (
    <Image isRounded={true} url="https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg" alt="profile picture" />
  ));

storiesOf('Input Field',module)
  .add('Text field', () => (
    <div style = {{height: '50px', width: '200px'}}>
      <InputField label="username"/>
    </div>
  ))
  .add('Password field', () => (
    <div style = {{height: '50px', width: '200px'}}>
      <InputField label="password"/>
    </div>
  ));

storiesOf('Profile',module)
  .add('Profile', () => (
    <Profile user={users[0].username} profilePic={profilePics[users[0].username]} defaultPic={defaultPic}/>
  ))
  .add('different user',() => (
    <Profile user={users[1].username} profilePic={profilePics[users[1].username]} defaultPic={defaultPic}/>
  ))
  .add('No profile picture',() => (
    <Profile user={users[3].username} defaultPic={defaultPic}/>
  ));
 
storiesOf('Form',module)
  .add('Login form',() => (
    <div style={{height: '315px', width: '350px', border: '1px solid', backgroundColor: 'white'}}>
      <Form credentials={['username','password']} submitContent="Login" />
    </div>
  ))
  .add('Different fields', () => (
    <div style={{height: '315px', width: '350px', border: '1px solid', backgroundColor: 'white'}}>
      <Form credentials={['email']} submitContent="Login" />
    </div>
  ))
  .add('With error message',() => (
    <div style={{height: '315px', width: '350px', border: '1px solid', backgroundColor: 'white'}}>
      <Form credentials={['username','password']} submitContent="Login" errorMessage="User not found" />
    </div>
  ))