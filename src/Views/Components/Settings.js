import React, { Component } from 'react'

export class Settings extends Component {
    constructor(){
        super()
        this.state={
            publicName:"",
            location:"",
            currentPassword:"",
            newPassword:"",
            confirmPassword:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleCancelforUser=()=>{
        this.setState({
            publicName:"",
            location:"",
        })
    }
    handleCancelforPassword=()=>{
        this.setState({
            currentPassword:"",
            newPassword:"",
            confirmPassword:""
        })
    }
    render() {
        return (
            <div className="col-lg-9 col-md-12">
            <div className="card mb-3">
                <div className="card-header">
                    <h3 className="card-title">Create your public profile</h3>
                </div>
                <div className="card-body">
                    <h5 className="text-center font-weight-semibold">Public Profile allows you to share a little bit about yourself with other Nolwa customers. This is how you will be shown to other shoppers on Nolwa when you post Reviews, Lists, and more.</h5>
                    <form className="form-horizontal" >								
                    <div className="row mt-7">
                        <div className="col-md-4 ">
                        <div className="form-group "> 
                            <div className="profile-pic">
                                <div className="profile-pic-img public float-center">
                                    <img src="assets/images/faces/male/25.jpg" className="brround profile-pic mb-7" alt="user" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group ">
                            <label className="form-label">Public Name</label>
                            <input type="text" className="form-control" placeholder="Name associated with your account" value={this.state.publicName} name="publicName" onChange={this.handleChange} />
                            </div>
                        <div className="form-group ">
                            <label className="form-label">Location</label>
                            <input type="text" className="form-control" placeholder="Location associated with your account" value={this.state.location} name="location" onChange={this.handleChange} />
                            </div>
                    </div>
                </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button  className="btn btn-primary">Save Changes</button> 
                    <button onClick={this.handleCancelforUser} className="btn btn-secondary">Cancel</button>
                </div>
            </div>
            <div className="card mb-0">
                <div className="card-header">
                    <h3 className="card-title">Change Password</h3>
                </div>
                <div className="card-body">
                    <form className="form-horizontal" >
                        <div className="form-group ">
                            <div className="row">
                                <div className="col-md-3">
                                    <label className="form-label">Current Password</label>
                                </div>
                                <div className="col-md-9">
                                            <input type="password" className="form-control" placeholder="Enter Current Password" value={this.state.currentPassword} name="currentPassword" onChange={this.handleChange} />
                                </div>
                            </div>
                            </div>
                            <div className="form-group ">
                            <div className="row">
                                <div className="col-md-3">
                                    <label className="form-label">New Password</label>
                                </div>
                                <div className="col-md-9">
                                            <input type="password" className="form-control" placeholder="Enter New Password" value={this.state.newPassword} name="newPassword" onChange={this.handleChange}/>
                                </div>
                            </div>
                            </div>
                            <div className="form-group ">
                            <div className="row">
                                <div className="col-md-3">
                                    <label className="form-label">Confirm Password</label>
                                </div>
                                <div className="col-md-9">
                                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Save Changes</a>
                    <button onClick={this.handleCancelforPassword} className="btn btn-secondary">Cancel</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Settings
