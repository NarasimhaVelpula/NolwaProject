import React, { Component } from 'react'

export class ReturnRequest extends Component {
    constructor(){
        super()
        this.state={
            itemName:"ItemName",
            ReasonsForReturn:[
                "No longer needed",
                "Bought by mistake",
                "Better price available",
                "Inaccurate website description",
                "Item defective or doesn't work",
                "Product damaged, but shipping box OK",
                "Item arrived too late",
                "Missing or broken parts",
                "Product and shipping box both damaged",
                "Wrong item was sent",
                "Received extra item I didn't buy",
                "Didn't approve purchase",
            ],
            Comments:"",
        }
    }
    handleChange=e=>{
        this.setState({Comments:e.target.value})
    }
    render() {
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
						<div class="card mb-0">
							<div class="card-header">
								<h3 class="card-title">Request Return</h3>
							</div>
							<div class="card-body">
								<div class="row border-bottom">
                                    <div class="col-md-4 mb-3">
                                     <img src="assets/images/pet/acessories2.jpg" alt="" width="150" height="90" />                                       
                                    </div>
                                    <div class="col-md-8 mb-3">
                                     <h4 class="font-weight-bold mt-5">Item name</h4>
                                    </div>
                                 </div>								
                                <div class="row mt-3">
                                  <div class="col-md-12">
									<div class="form-group">
										<label class="form-label">Reason for your return</label>
										<select class="form-control select2" data-placeholder="Choose your reason">
											<optgroup label="Choose your reason">
												<option value="AL">Choose your reason</option>
												{this.state.ReasonsForReturn.map(item => {
                                                    return(<option value={item}>{item}</option>)
                                                })}
											</optgroup>
										</select>
									</div>
                                  </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 mb-3">
                                        <label class="form-label">Write your comment</label>
                                    <div class="form-group">
                                        <textarea class="form-control" name="example-textarea-input" value={this.state.Comments} rows="3" placeholder="Write your reason" onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
									<div class="col-md-4">
										<button class="btn btn-primary btn-sm mt-3">Proceed to Return</button>
									</div>
                                </div>
								</div>
                            </div>
                        </div>
        )
    }
}

export default ReturnRequest
