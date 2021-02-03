import React, { Component } from 'react'

export class ProductReview extends Component {
    constructor(){
        super()
        this.state={
            rating:0,
            itemName:"ItemName",
            file:"",
            heading:"",
            review:"",
            name:"",
        }
    }
    handleRating=(e)=>{
        this.setState({rating:e.target.value})
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addingReview
    render() {
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
            <div class="card mb-0">
                <div class="card-header">
                    <h3 class="card-title">Create Review</h3>
                </div>
                <div class="card-body">
                    <div class="row border-bottom">
                        <div class="col-md-4 mb-3">
                         <img src="assets/images/pet/acessories2.jpg" alt="" width="150" height="90" />                                       
                        </div>
                        <div class="col-md-8 mb-3">
                         <h4 class="font-weight-bold mt-5">{this.state.itemName}</h4>
                        </div>
                     </div>
                    <div class="row mt-3 border-bottom">
                        <h4>Overall rating</h4> 
                        <div class="col-md-12">
                        <fieldset class="rating" onChange={this.handleRating}>
                            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="Excellent - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="Good - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Fair - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="Fair - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Poor - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="Poor - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Awful - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="Awful - 0.5 stars"></label>
                        </fieldset>
                    </div>
                    </div>

                    <div class="row mt-3 ">
                      <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label" for="exampleInputEmail1">Add a photo or video</label>
                            <span class="mb-3">Shoppers find images and videos more helpful than text alone.</span>
                        </div>
                      </div>
                    </div>								
                    <div class="row  mt-3 border-bottom">
                      <div class="col-md-4">
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="example-file-input-custom" />
                                <label class="custom-file-label">Choose file</label>
                            </div>
                        </div>
                      </div>
                    </div>								
                    <div class="row mt-3">
                      <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label" for="exampleInputEmail1">Add a headline</label>
                            <input type="text" class="form-control" id="name1" name="heading" onChange={this.handleChange} value={this.state.heading} placeholder="What's most important to know?" />
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3 border-bottom">
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Write your review</label>
                        <div class="form-group">
                            <textarea class="form-control" name="example-textarea-input" name="review" onChange={this.handleChange} value={this.state.review} rows="3" placeholder="What did you like or dislike? What did you use this product for?"></textarea>
                        </div>
                        <label class="form-label">Choose your public name</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fa fa-user-circle tx-16 lh-0 op-6"></i>
                                </div>
                            </div><input class="form-control" name="name" onChange={this.handleChange} value={this.state.name} placeholder="This is how you'll appear to other customers" type="text" />
                        </div>
                        <span>Don’t worry, you can always change this on your profile</span>
                    </div>
                    </div>
                    <div class="row">
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

export default ProductReview
