import React, { Component } from 'react'
import CreateRoomPage from './CreateRoomPage'
import RoomJoinPage from './RoomJoinPage'

import {BrowserRouter as Router,
Switch,
Link,
Redirect,
Route} from 'react-router-dom';
export class home extends Component {
  render() {
    return (
     <Router>
      <Switch>
        <Route path='/join' element={RoomJoinPage}/>
        <Route path='/create' element={CreateRoomPage}/>
      </Switch>
     </Router> 
    )
  }
}

export default home