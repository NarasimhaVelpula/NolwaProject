import React, { Component } from 'react'

export class NotificationManagement extends Component {
    render() {
        return (
            <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card mb-0">
                <div class="card-header">
                    <h3 class="card-title">Notification Management</h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap">
                            <thead >
                                <tr>
                                    <th>Notification</th>
                                    <th>SMS</th>
                                    <th>Email</th>
                                    <th>Mobile Notification</th>
                                    <th>Notification Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Customer Sign Up Notification</th>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">SMS</span>
                                    </label></td>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">Email</span>
                                    </label></td>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">Mobile Notification</span>
                                    </label></td>
                                    <td>
                                        <textarea rows="4" class="form-control" placeholder="Enter Notification content"></textarea>
                                    </td>
                                </tr>												
                                <tr>
                                    <th>Membership subscription Notification</th>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">SMS</span>
                                    </label></td>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">Email</span>
                                    </label></td>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">Mobile Notification</span>
                                    </label></td>
                                    <td>
                                        <textarea rows="4" class="form-control" placeholder="Enter Notification content"></textarea>
                                    </td>
                                </tr>												
                                <tr>
                                    <th>Seller registration</th>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">SMS</span>
                                    </label></td>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">Email</span>
                                    </label></td>
                                    <td> <label class="custom-switch pl-0">
                                        <input id="petacc" type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" checked />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">Mobile Notification</span>
                                    </label></td>
                                    <td>
                                        <textarea rows="4" class="form-control" placeholder="Enter Notification content"></textarea>
                                    </td>
                                </tr>												
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
       

        )
    }
}

export default NotificationManagement
