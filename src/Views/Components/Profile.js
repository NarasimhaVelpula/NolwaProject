import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateProfile} from './../../Actions'
export class Profile extends Component {
    constructor(props){
        super(props)
        //console.log(props.profile.firstName)
        this.state={
                firstName:props.profile.firstName,
                lastName:props.profile.lastName,
                email:props.profile.email,
                phoneNumber:props.profile.phoneNumber,
                address:props.profile.address,
                city:props.profile.city,
                postalCode:props.profile.postalCode,
                country:props.profile.country,
                facebook:props.profile.facebook,
                google:props.profile.google,
                twitter:props.profile.twitter,
                pinterest:props.profile.pinterest,
                aboutMe:props.profile.aboutMe,
				profileImage:props.profile.profileImage,
				file:props.profile.file
        }
    }
    handleChange=(e)=>{
       // console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }
    handleImageChange=(e)=>{
		this.setState({profileImage:e.target.files[0]})
		this.setState({file: URL.createObjectURL(e.target.files[0])})
    }
    handleSubmit=()=>{
		console.log("handling submit")
        this.props.updateProfile(this.state)
    }
    fileData=()=>{
        if(this.state.profileImage){
           // console.log(this.state.profileImage.name)
            return this.state.profileImage.name
        }
        else{
            return "Choose File"
        }
    }
    render() {
        return (
                <div className="col-xl-9 col-lg-12 col-md-12">
						<div className="card mb-0">
							<div class="card-header">
								<h3 className="card-title">Profile</h3>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">First Name</label>
											<input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Last Name</label>
											<input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Email address</label>
											<input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}/>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Phone Number</label>
											<input type="number" className="form-control" placeholder="Number" value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleChange}/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label className="form-label">Address</label>
											<input type="text" className="form-control" placeholder="Home Address" value={this.state.address} name="address" onChange={this.handleChange}/>
										</div>
									</div>
									<div className="col-sm-6 col-md-4">
										<div className="form-group">
											<label className="form-label">City</label>
											<input type="text" className="form-control" placeholder="City" value={this.state.city} name="city" onChange={this.handleChange}/>
										</div>
									</div>
									<div className="col-sm-6 col-md-3">
										<div className="form-group">
											<label className="form-label">Postal Code</label>
											<input type="number" className="form-control" placeholder="ZIP Code" value={this.state.postalCode} name="postalCode" onChange={this.handleChange}/>
										</div>
									</div>
									<div className="col-md-5">
										<div className="form-group">
											<label className="form-label">Country</label>
											<select className="form-control select2-show-search border-bottom-0 w-100 select2-show-search" data-placeholder="Select" value={this.state.country} name="country" onChange={this.handleChange}>
												<optgroup label="Countries">
													<option>--Select--</option>
													<option value="1">Germany</option>
													<option value="2">USA</option>
													<option value="3">Canada</option>
													<option value="4">Usa</option>
													<option value="5">Afghanistan</option>
													<option value="6">Albania</option>
													<option value="7">China</option>
													<option value="8">Denmark</option>
													<option value="9">Finland</option>
													<option value="10">India</option>
													<option value="11">Kiribati</option>
													<option value="12">Kuwait</option>
													<option value="13">Mexico</option>
													<option value="14">Pakistan</option>
												</optgroup>
											</select>
										</div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Facebook</label>
											<input type="text" className="form-control" placeholder="https://www.facebook.com/" value={this.state.facebook} onChange={this.handleChange} name="facebook" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Google</label>
											<input type="text" className="form-control" placeholder="https://www.google.com/" value={this.state.google} onChange={this.handleChange} name="google" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Twitter</label>
											<input type="text" className="form-control" placeholder="https://twitter.com/" value={this.state.twitter} onChange={this.handleChange} name="twitter" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Pinterest</label>
											<input type="text" className="form-control" placeholder="https://in.pinterest.com/" value={this.state.pinterest} onChange={this.handleChange} name="pinterest"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label className="form-label">About Me</label>
											<textarea rows="5" className="form-control" placeholder="Enter About your description" value={this.state.aboutMe} onChange={this.handleChange} name="aboutMe"></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group mb-0">
											<label className="form-label">Upload Image</label>
											<div className="custom-file">
												<input type="file" className="custom-file-input"  name="profileImage" onChange={this.handleImageChange} />
												<label className="custom-file-label">{this.fileData()}</label>
											</div>
										</div>
									</div>
								</div>
							</div>
                            <div className="card-footer">
								<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Updated Profile</button>
							</div>
                            </div>
                            </div>
								
            
        )
    }
}
const MapStateToProps=(state)=>{
    
    return state
}
const MapActionToDispatch=(dispatch)=>{
    return{
        updateProfile:(st)=>{dispatch(updateProfile(st))}
    }
}

export default connect(MapStateToProps,MapActionToDispatch)(Profile)
