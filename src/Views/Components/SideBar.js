import React, { Component } from 'react'

//import { Chat } from './Chat'
//import {Profile} from './Profile'
import {connect} from 'react-redux'
import {NavLink,Link} from 'react-router-dom'
export class SideBar extends Component {
    render() {
        return (
            <div class="col-xl-3 col-lg-12 col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">My Account</h3>
              </div>
              <div class="card-body text-center item-user border-bottom">
                <div class="profile-pic">
                  <div class="profile-pic-img">
                    <span class="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
                    <img src={this.props.profile.file} class="brround" alt="user" />
                  </div>
                  <Link to="seller-profile.html" class="text-dark"><h4 class="mt-3 mb-0 font-weight-semibold">{this.props.profile.firstName+" "+this.props.profile.lastName}</h4></Link>
                </div>
              </div>
              <div class="item1-links  mb-0">
                <NavLink exact to="/account" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-user"></i></span> My Profile
                </NavLink>
                <NavLink to="myads.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-diamond"></i></span> My Items
                </NavLink>
                <NavLink to="myfavorite.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-heart"></i></span> My Favorite
                </NavLink>
                <NavLink to="notifications.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-bell"></i></span> Notification
                </NavLink>
                <NavLink to="payments.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-credit-card"></i></span> Payments
                </NavLink>
                <NavLink to="/orders" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-basket"></i></span> Orders
                </NavLink>
                <NavLink to="inquiry.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-envelope"></i></span> Inquiry 
                                </NavLink>
                                <NavLink to="membership.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-badge"></i></span> Membership 
                </NavLink>
                <NavLink to="/chat" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="fa fa-comment-o"></i></span> Chat 
                </NavLink>
              
                <NavLink to="add-item.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-plus"></i></span> Add Item 
                </NavLink>
                <NavLink to="settings.html" activeClassName="active d-flex border-bottom" className="d-flex  border-bottom">
                  <span class="icon1 mr-3"><i class="icon icon-settings"></i></span> Settings
                </NavLink>
                <NavLink to="#" class="d-flex">
                  <span class="icon1 mr-3"><i class="icon icon-power"></i></span> Logout
                </NavLink>
              </div>
            </div>
                      
          </div>
                   
        
        )
    }
}
const MapStateToProps=(state)=>{
    return state
  }
  export default connect(MapStateToProps)(SideBar)
