import React, { Component } from 'react'

export class ReturnRequest extends Component {
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
												<option value="AL">No longer needed</option>
												<option value="AR">Bought by mistake</option>
												<option value="IL">Better price available</option>
												<option value="IA">Inaccurate website description</option>
												<option value="KS">Item defective or doesn't work</option>
												<option value="KY">Product damaged, but shipping box OK</option>
												<option value="LA">Item arrived too late</option>
												<option value="MN">Missing or broken parts</option>
												<option value="MS">Product and shipping box both damaged</option>
												<option value="MO">Wrong item was sent</option>
												<option value="OK">Received extra item I didn't buy</option>
												<option value="SD">Didn't approve purchase</option>
											</optgroup>
										</select>
									</div>
                                  </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 mb-3">
                                        <label class="form-label">Write your comment</label>
                                    <div class="form-group">
                                        <textarea class="form-control" name="example-textarea-input" rows="3" placeholder="Write your reason"></textarea>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
									<div class="col-md-4">
										<a href="" class="btn btn-primary btn-sm mt-3">Proceed to Return</a>
									</div>
                                </div>
								</div>
                            </div>
                        </div>
        )
    }
}

export default ReturnRequest
