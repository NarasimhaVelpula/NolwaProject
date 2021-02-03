import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MyOders extends Component {
    constructor(){
        super()
        this.state={
            orders:[{
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
            },
            {
                orderDate:"Sep 16, 2020",
            orderNumber:"320891190",
            destination:{
                name:"Muhammad Rahees", 
            line1:"Al Harsh Planet View. KuniyilKavu Road- Calicut." ,
            line2:"Kuniyil Kavu Temple opposite",
            state:"Kerala" ,
            country:"India",
            pincode:"673001", 
            PhoneNumber : "9539966998"},
            orderStatus:"Pending verification", 
            }]
    }
    }
    render() {
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
            <div class="card mb-0">
                <div class="card-header">
                    <h3 class="card-title">My Orders</h3>
                </div>
                <div class="card-body">
                    <div class="my-favadd table-responsive border-top userprof-tab">
                            <table class="table mb-0">
                                <thead class="bg-grey text-white">
                                    <tr>
                                        <th>#</th>
                                        <th>Order Date</th>
                                        <th>Order No.</th>
                                        <th>Destination</th>
                                        <th>Order Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.orders.map((item,ind)=>{
                                        return(
                                            <tr class="border-bottom">
                                            <td class="vam">{ind+1}</td>
                                            <td class="vam">{item.orderDate}</td>
                                            <td class="vam"><Link to="deliverd-page"><u> {item.orderNumber} </u></Link></td>
                                            <td class="vam">
                                                {item.destination.name},<br />
                                                {item.destination.line1}, <br />
                                                {item.destination.line2}, <br />
                                                {item.destination.state}, <br  />
                                                {item.destination.country} - {item.destination.pincode} <br/>
                                                Phone Number : {item.destination.PhoneNumber} 
                                                </td>
                                                <td class="vam">{item.orderStatus}</td>
                                        </tr>
                                        )
                                    })}
                                    
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyOders
