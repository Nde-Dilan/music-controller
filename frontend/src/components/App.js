import React, {Component} from "react";
import home from "./home.js";
import CreateRoomPage from "./CreateRoomPage.js";
import RoomJoinPage from "./RoomJoinPage.js";

export default class App extends Component{
    constructor(props){
         super(props);
         this.state={
            
         }
    }
    render(){
        return (
            <div>
            <home/>
          
            </div>
        )
    }
}



