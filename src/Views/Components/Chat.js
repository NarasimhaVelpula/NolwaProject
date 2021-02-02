import React, { Component } from 'react'
import {connect} from 'react-redux'
export class Chat extends Component {
    constructor(){
        super()
       
        this.state={
            messages:[
                {type:"incoming_msg",msg:"Test which is a new approach to have all solutions",time:"11:01 AM    |    June 9"},
                {type:"outgoing_msg",msg:"Test which is a new approach to have all solutions",time:"11:01 AM    |    June 9"},
                {type:"incoming_msg",msg:"Test, which is a new approach to have",time:"11:01 AM    |    Yesterday"},
                {type:"outgoing_msg",msg:"Apollo University, Delhi, India Test",time:"11:01 AM    |    Today"},
                {type:"incoming_msg",msg:"We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.",time:"11:01 AM    |    Today"},
                {type:"outgoing_msg",msg:"Test which is a new approach to have all solutions",time:"11:01 AM    |    June 9"},
                {type:"incoming_msg",msg:"Test, which is a new approach to have",time:"11:01 AM    |    Yesterday"},
                {type:"outgoing_msg",msg:"Apollo University, Delhi, India Test",time:"11:01 AM    |    Today"},
                {type:"incoming_msg",msg:"We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.",time:"11:01 AM    |    Today"},
    
            ],
            recentChats:[
                {customerName:"Customer Name", msg:"Test, which is a new approach to have all solutions astrology under one roof.",date:"Jul 16"},
                {customerName:"Customer Name", msg:"Test, which is a new approach to have all solutions astrology under one roof.",date:"Jul 16"},
                {customerName:"Customer Name", msg:"Test, which is a new approach to have all solutions astrology under one roof.",date:"Jul 16"},
                {customerName:"Customer Name", msg:"Test, which is a new approach to have all solutions astrology under one roof.",date:"Jul 16"},
            ],
            searchCriteria:"",
        }
    }
    handleSearch=(e)=>{
        this.setState({searchCriteria:e.target.value})
    }
    render() {
      console.log(this.props)
        let exp1=RegExp(this.state.searchCriteria,'i')
        let recentChats=this.state.recentChats.filter(item=>{
            if(item.customerName.search(exp1)!==-1){
                return item
            }
            return null
        })
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
						<div class="card mb-0">
                            <div class="card-header">
								<h3 class="card-title">Chat</h3>
							</div>
                             <div class="card-body">
                                <div class="messaging">
                                    <div class="inbox_msg">
                                      <div class="inbox_people">
                                        <div class="headind_srch">
                                          <div class="recent_heading">
                                            <h4>Recent</h4>
                                          </div>
                                          <div class="srch_bar">
                                            <div class="stylish-input-group">
                                              <input type="text" class="search-bar"  placeholder="Search" onChange={this.handleSearch}/>
                                              <span class="input-group-addon">
                                              <button type="button"> <i class="fa fa-search" aria-hidden="true" ></i> </button>
                                              </span> </div>
                                          </div>
                                        </div>
                                        <div class="inbox_chat">
                                            {recentChats.map(item=>{
                                                return(
                                                    <div class="chat_list active_chat">
                                                    <div class="chat_people">
                                                      <div class="chat_img"> <img src="assets/images/faces/male/17.jpg" alt="sunil" /> </div>
                                                      <div class="chat_ib">
                                                        <h5>{item.customerName}<span class="chat_date">{item.date}</span></h5>
                                                        <p>{item.msg}</p>
                                                      </div>
                                                    </div>
                                                  </div>)
                                            })}   
                                        </div>
                                      </div>
                                      <div class="mesgs">
                                        <div class="msg_history">
                                            {this.state.messages.map(item=>{
                                                if(item.type==="incoming_msg"){
                                                    return (
                                                        <div class="incoming_msg">
                                            <div class="incoming_msg_img"> <img src="assets/images/faces/male/17.jpg" alt="sunil" /> </div>
                                            <div class="received_msg">
                                              <div class="received_withd_msg">
                                                <p>{item.msg}</p>
                                                <span class="time_date"> {item.time}</span></div>
                                            </div>
                                          </div>
                                                    )
                                                }
                                            else{
                                                return(
                                                <div class="outgoing_msg">
                                                <div class="sent_msg">
                                                  <p>{item.msg}</p>
                                                  <span class="time_date"> {item.time}</span> </div>
                                              </div>)
                                            }
                                            })}
                                          
                                          
                                        </div>
                                        <div class="type_msg">
                                          <div class="input_msg_write">
                                            <input type="text" class="write_msg" placeholder="Type a message" />
                                            <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                     </div>

                             </div>
                        </div>
                        </div>
			
        )
    }
}

const MapStateToProps=(state)=>{
  return state
}
export default connect(MapStateToProps)(Chat)
