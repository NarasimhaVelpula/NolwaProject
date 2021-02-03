import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class DeliveryPage extends Component {
    constructor(){
        super()
        this.state={
            orderDate:"Sep 10, 2020",
            orderNumber:"320891090",
            destination:{
                name:"Muhammad Rahees", 
            line1:"Al Harsh Planet View. KuniyilKavu Road- Calicut." ,
            line2:"Kuniyil Kavu Temple opposite",
            state:"Kerala" ,
            country:"India",
            pincode:"673001", 
            PhoneNumber : "9539966998"},
            orderStatus:"Delivered",
            paymentMethod:"Visa ending in 8907",
            subtotal:"SR 250.00",
            discount:"SR 0.00",
            AmountBilled:"SR 250.00",
            AcessoriesName:"Acessories Name",
            colour:"BLACK/WHITE/VIVDOR",
            size:"10",
            productId:"EF7298 ",
            quantity:1,
            price:"SR 250",
            courierPatner:"FedEx ",
            trackingId:"#32089521090 "
        }
    }
    getImage=status=>{
        //console.log(status)
        if(status==="Delivered"){
            return (<img class="mt-7" src="assets/images/order/status5.png" alt="" />)
        }
        if(status==="Pending for Approval"){
            return(<img class="mt-7" src="assets/images/order/status1.png" alt="" />)
        }
        if(status==="Confirmed"){
            return(<img class="mt-7" src="assets/images/order/status2.png" alt="" />)
        }
        if(status==="Ready for Dispatch"){
            return(<img class="mt-7" src="assets/images/order/status3.png" alt="" />)
        }
        if(status==="Dispatch"){
            return(<img class="mt-7" src="assets/images/order/status4.png" alt="" />)
        }
        if(status==="Cancelled"){
            return(<img class="mt-7" src="assets/images/order/status6.png" alt="" />)
        }
    }
    render() {
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
						<div class="card mb-0">
							<div class="card-header">
								<h3 class="card-title">Your Order Details</h3>
							</div>
							<div class="card-body">
								<div class="my-favadd table-responsive border-top userprof-tab">
										<table class="table mb-0">
											<thead class="bg-grey text-white">
												<tr>
													<th>Order Details : {this.state.orderNumber}</th>
												</tr>
											</thead>
											<tbody>
												<tr class="border-bottom">
													<td>
                                                      <div class="row">
                                                          <div class="col-md-5">
                                                            <span class="font-weight-bold">SHIPPING DETAILS:</span>  <br />
                                                            <span class="font-weight-200">{this.state.destination.name},</span>  <br />
                                                            <span class="font-weight-200">{this.state.destination.line1},</span>  <br />
                                                            <span class="font-weight-200">{this.state.destination.line2},</span>  <br />
                                                            <span class="font-weight-200">{this.state.destination.state},</span> <br /> 
                                                            <span class="font-weight-200">{this.state.destination.country} - {this.state.destination.pincode},</span>  <br />
                                                            <span class="font-weight-200">Phone Number : {this.state.destination.PhoneNumber}</span> 
                                                          </div>
                                                          <div class="col-md-7">
                                                              <div class="mb-4">
                                                                <span class="font-weight-bold">ORDER SUMMARY:</span>  <br />
                                                                <div class="row font-weight-200">
                                                                    <div class="col-md-6 mt-2">Order Date</div>
                                                                    <div class="col-md-6 mt-2">: {this.state.orderDate}</div>
                                                                    <div class="col-md-6 mt-2">Order Status</div>
                                                                    <div class="col-md-6 mt-2">: {this.state.orderStatus}</div>
                                                                    <div class="col-md-6 mt-2">Payment Method</div>
                                                                    <div class="col-md-6 mt-2">: {this.state.paymentMethod}</div>
                                                                </div> 

                                                              </div>
                                                            <span class="font-weight-bold">COST SUMMARY:</span>  <br />
                                                            <div class="row font-weight-200 mb-4">
                                                                <div class="col-md-9 mt-2">Merchandise Subtotal (incl item discounts)</div>
                                                                <div class="col-md-3 mt-2">: {this.state.subtotal}</div>
                                                                <div class="col-md-9 mt-2">Order Discounts</div>
                                                                <div class="col-md-3 mt-2">: (-) {this.state.discount}</div>
                                                               <hr class="sthr" />
                                                               <div class="col-md-9 bta">Amount Billed (Inclusive of SR 15.27 tax)</div>
                                                                <div class="col-md-3 bta">: {this.state.AmountBilled}  </div>
                                                            </div> 
                                                          </div>
                                                      </div>
                                                    </td>
                                                    <tr class="border-bottom">
                                                        <td>
                                                            <div class="row">
                                                             <div class="col-md-4 mt-3">
																<img src="assets/images/pet/acessories2.jpg" alt="" />										 </div>
                                                             <div class="col-md-8 mt-3">
                                                               <div class="row">
                                                                   <div class="col-md-6">
                                                                    <span class="font-weight-bold">ORDER SUMMARY:</span>  <br />
                                                                    <span class="font-weight-semibold">{this.state.AcessoriesName}</span>  <br />
                                                            <span class="font-weight-200">COLOUR: {this.state.colour}</span>  <br />
                                                            <span class="font-weight-200">SIZE: {this.state.size}</span>  <br />
                                                            <span class="font-weight-200">Product ID: {this.state.productId}</span> <br /> 
                                                            <span class="font-weight-200">Quantity:{this.state.quantity}</span>  <br />
                                                            <span class="font-weight-200">Price: {this.state.price}</span>  
                                                                   </div>
                                                                   <div class="col-md-6">
                                                                    <span class="font-weight-bold">DELIVERY DETAILS:</span>  <br />
                                                            <span class="font-weight-200">Courier Partner: {this.state.courierPatner} </span>  <br />
															<span class="font-weight-200">Tracking ID: {this.state.trackingId}</span>  <br />
															
																   </div>
                                                               </div>
                                                              
                                                              {this.getImage(this.state.orderStatus)}
                                                               
															 </div>
															 <div class="col-md-3">
																<Link to="sellerFeedback" class="btn btn-outline-primary mt-5 btn-block">Leave seller feedback</Link>
															 </div>
															 <div class="col-md-3">
																<Link to="deliveryFeedback" class="btn btn-outline-primary mt-5 btn-block">Leave delivery feedback</Link>
															 </div>
															 <div class="col-md-3">
																<Link to="productReview" class="btn btn-outline-primary mt-5 btn-block">Write a product review</Link>
															 </div>
															 <div class="col-md-3">
																<Link to="returnRequest" class="btn btn-outline-red mt-5 btn-block">REQUEST RETURN</Link>
															 </div>
                                                            </div>
                                                        </td>
                                                    </tr>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
                    
        )
    }
}

export default DeliveryPage
