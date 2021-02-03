import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Views/Components/Profile'
import {BrowserRouter as Router} from 'react-router-dom'

import {Switch, Route} from 'react-router-dom'
//import Chat from './Chat'
import SideBar from './Views/Components/SideBar'
import Chat from './Views/Components/Chat'
import MyOders from './Views/Components/MyOders'
import { DeliveryPage } from './Views/Components/DeliveryPage'
import { SellerFeedback } from './Views/Components/SellerFeedback'
import { DeliveryFeedback } from './Views/Components/DeliveryFeedback'
import { ProductReview } from './Views/Components/ProductReview'
import ReturnRequest from './Views/Components/ReturnRequest'
import Settings from './Views/Components/Settings'
import Notification from './Views/Components/Notification'
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
                        <Route exact path="/orders" component={MyOders} />
                        <Route exact path="/deliverd-page" component={DeliveryPage} />
                        <Route exact path="/sellerFeedback" component={SellerFeedback} />
                        <Route exact path="/deliveryFeedback" component={DeliveryFeedback} />
                        <Route exact path="/productReview" component={ProductReview} />
                        <Route exact path="/returnRequest" component={ReturnRequest} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/notifications" component={Notification} />
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
