import React, { Component } from 'react'
import image from './blog/blog1.jpg'
export class Blog extends Component {
    
    render() {
        return (
            <div className="card">
                <div className="img-card">
                <img className="cover-img" src={this.props.image} alt="img" />
                </div>
                <div className="card-body">
                <div className="row">
                <div className="date">
                <i class="fa fa-calendar" aria-hidden="true"></i> {this.props.date}
                </div>
                <div style={{float:"right"}}>
                <i class="fa fa-comment-o text-muted mr-2"></i>{this.props.commentCount} Comments
                </div>
                </div>

                    <h4 className="post-title">{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                    <button className="btn btn-primary btn-sm">Read More <i class="fe fe-chevrons-right ml-1"></i></button>
                </div>
            </div>
        )
    }
}

export default Blog
