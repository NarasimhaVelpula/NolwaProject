import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Views/Components/Profile'
import {BrowserRouter as Router} from 'react-router-dom'

import {Switch, Route} from 'react-router-dom'
//import Chat from './Chat'
import SideBar from './Views/Components/SideBar'
import Chat from './Views/Components/Chat'
export class App extends Component {

  render() {
    
    return (
      <>
     
<Router>
<section class="sptb">
            
            <div class="container">
              <div class="row">
                <SideBar />
                <Switch>
                        <Route exact path="/" component={Profile} props={this.props.profile} />
                        <Route path="/account" component={Profile} />
                        <Route exact path="/chat" component={Chat} />
                    </Switch>
                          </div>
      
                  </div>
          </section>
          
</Router>
        
     </>
    )
  }
}
const MapStateToProps=(state)=>{
  return state
}
export default connect(MapStateToProps)(App)
