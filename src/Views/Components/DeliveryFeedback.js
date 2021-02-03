import React, { Component } from 'react'

export class DeliveryFeedback extends Component {
    constructor(){
        super()
        this.state={
            orderStatus:"Delivered",
            orderTime:"Tuesday, September 8, 2020",
            rating:0,
            comments:"",
            customerName:"Nolwa Customer",

        }
    }
    render() {
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
						<div class="card mb-0">
							<div class="card-header">
								<h3 class="card-title">Delivery Feedback</h3>
							</div>
							<div class="card-body">
								<div class="row row_box">
                                   <div class="col-md-4">
                                    <img src="assets/images/pet/acessories2.jpg" alt="" width="150" height="90" />                                       
                                   </div>
                                   <div class="col-md-8">
                                    <h4 class="font-weight-bold text-success">{this.state.orderStatus}</h4>
                                    <span>This item was delivered on {this.state.orderTime}</span>
                                   </div>
                                </div>
                                <div class="row">
                                    <h4>Rate your delivery experience</h4> 
                                    <div class="col-md-12">
                                    <fieldset class="rating">
                                        <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                        <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Excellent - 4.5 stars"></label>
                                        <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                        <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Good - 3.5 stars"></label>
                                        <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Fair - 3 stars"></label>
                                        <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Fair - 2.5 stars"></label>
                                        <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Poor - 2 stars"></label>
                                        <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Poor - 1.5 stars"></label>
                                        <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Awful - 1 star"></label>
                                        <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Awful - 0.5 stars"></label>
                                    </fieldset>
                                </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" name="example-textarea-input" rows="3" placeholder="Please enter comments here about your experience"></textarea>
                                    </div>
                                    <span>The name <b>{this.state.customerName}</b> will be displayed with your feedback. <a href="" class="text-primary">Use a different name</a> </span>
                                </div>
                                <div class="col-md-4">
                                    <a href="" class="btn btn-primary btn-sm mt-3">Submit Feedback</a>
                                </div>
                                </div>
								</div>
							</div>
						</div>
        )
    }
}

export default DeliveryFeedback
