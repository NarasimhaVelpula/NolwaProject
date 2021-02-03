import React, { Component } from 'react'

export class Notification extends Component {
    constructor(){
        super()
        this.state={
            notifications:[
                {
                    title:"Notification Title",
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.",
                    time:"Jun-21-2019 , 16:54"
                },
                {
                    title:"Notification Title",
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.",
                    time:"Jun-21-2019 , 16:54"
                },
                {
                    title:"Notification Title",
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.",
                    time:"Jun-21-2019 , 16:54"
                },
                {
                    title:"Notification Title",
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.",
                    time:"Jun-21-2019 , 16:54"
                },
                {
                    title:"Notification Title",
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.",
                    time:"Jun-21-2019 , 16:54"
                },
                {
                    title:"Notification Title",
                    msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.",
                    time:"Jun-21-2019 , 16:54"
                },

            ]
        }
    }
    render() {
        return (
            <div class="col-xl-9 col-lg-12 col-md-12">
            <div class="card mb-0">
                <div class="card-header">
                    <h3 class="card-title">Notifications</h3>
                </div>
                <div class="card-body">
                    {this.state.notifications.map(item=>{
                        return(

                      
                    <div class="my-favadd table-responsive border userprof-tab">
                        <div class="media mt-0 mb-0">
                            <div class="card-aside-img">
                                <a href="#"></a>
                                <img src="assets/images/products/h1.png" alt="img" />
                            </div>
                            <div class="media-body">
                                <div class="card-item-desc ml-4 p-0 mt-2">
                                    <a href="#" class="text-dark"><h4 class="font-weight-semibold">Notification Title</h4></a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in totam quos, perspiciatis porro soluta repellat asperiores perferendis enim libero vitae atque dicta vero voluptatibus rem reiciendis. Esse, laudantium numquam.</p>
                                    <a class="float-right"><i class="fa fa-clock-o mr-1"></i> Jun-21-2019 , 16:54</a><br />
                                </div>
                            </div>
                        </div>
                    </div>
                     )
                    })}
                  
                    
                </div>
            </div>
            </div>
        )
    }
}

export default Notification
