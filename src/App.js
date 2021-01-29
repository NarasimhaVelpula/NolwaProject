  //import logo from './logo.svg';
import './App.css';
import Blog from './Blog';
import React from 'react'
import blog1 from './blog/blog1.jpg'
import blog2 from './blog/blog2.jpg'
import blog3 from './blog/blog3.jpg'
import blog4 from './blog/blog4.jpg'
import blog5 from './blog/blog5.jpg'
import blog6 from './blog/blog6.jpg'
import blog7 from './blog/blog7.jpg'
import blog8 from './blog/blog8.jpg'
import blog9 from './blog/blog5.jpg'
import SortCard from './SortCard'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      ind:0,
      blogs:[{
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"dogs",
        image:blog1
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"cats",
        image:blog2
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"rabbits",
        image:blog3
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"dogs",
        image:blog4
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"cats",
        image:blog5
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"rabbits",
        image:blog6
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"dogs",
        image:blog7
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"cats",
        image:blog8
      },
      {
        Name:"PostTilte1",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"rabbits",
        image:blog9
      },
      {
        Name:"PostTilte12",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"dogs",
        image:blog1
      },
      {
        Name:"PostTilte12",
        date:"January-29-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"cats",
        image:blog2
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"rabbits",
        image:blog3
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"dogs",
        image:blog4
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"cats",
        image:blog5
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"rabbits",
        image:blog6
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"dogs",
        image:blog7
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"cats",
        image:blog8
      },
      {
        Name:"PostTilte12",
        date:"January-30-2021",
        comment_count:"4",
        desc:"Ut enim ad minima veniam, quis exercitationem into enim ad minima veniam, quis nostrum itationem ",
        category:"rabbits",
        image:blog9
      }, 
    ],
      categories:['dogs','cats','rabbits'],
      selectedCategory:"",
    }
  }
  handlePage=(e)=>{
    this.setState({ind:e*9 })
  }
  handleChangeCategory=(cat)=>{
    console.log(cat.target.value)
    this.setState({selectedCategory:cat.target.value,ind:0})
  }
render(){
  let row1=[]
  let row2=[]
  let row3=[]
  let navigator=[]
  let sortedBlogs=this.state.blogs.filter(item=>{
    if(this.state.selectedCategory==="" || item.category===this.state.selectedCategory){
      return item
    }
    return null
  })
  //console.log(sortedBlogs)
  try{
  for(let i=0+this.state.ind;i<this.state.ind+3;i++){
    row1.push(<Blog title={sortedBlogs[i].Name} desc={sortedBlogs[i].desc} image={sortedBlogs[i].image} commentCount={sortedBlogs[i].comment_count} date={sortedBlogs[i].date} />)
  }
 
  for(let i=3+this.state.ind;i<this.state.ind+6;i++){
    row2.push(<Blog title={sortedBlogs[i].Name} desc={sortedBlogs[i].desc} image={sortedBlogs[i].image} commentCount={sortedBlogs[i].comment_count} date={sortedBlogs[i].date} />)
     }
  
  for(let i=6+this.state.ind;i<this.state.ind+9;i++){
    row3.push(<Blog title={sortedBlogs[i].Name} desc={sortedBlogs[i].desc} image={sortedBlogs[i].image} commentCount={sortedBlogs[i].comment_count} date={sortedBlogs[i].date} />)  
  }
}
catch{
  
}
  for(let i=0;i<sortedBlogs.length/9;i++){
    navigator.push(<li class="page-item"><a class="page-link" onClick={()=>{this.handlePage(i)}} href="#">{i+1}</a></li>)
  }
  return (
    <>
    <div className="topbar"> <div className="header">{this.state.blogs.length} Results Found</div><div className="SortCard"><SortCard catfun={this.handleChangeCategory} categories={this.state.categories}/></div></div>
    
    <div className="container">
      <div className="card-group bottom-border">
         {row1}
    </div>
    <div className="card-group bottom-border">
       {row2}
    </div>
    <div className="card-group bottom-border">
      {row3}
    </div>
    <ul class="pagination mb-0">
											<li class="page-item page-prev disabled">
												<a class="page-link"  href="#" tabindex="-1" onClick={()=>{this.handlePage(this.state.ind-1)}}>Prev</a>
											</li>
                      
										{navigator}
											<li class="page-item page-next">
												<a class="page-link" href="#" onClick={()=>{this.handlePage(this.state.ind+1)}}>Next</a>
											</li>
										</ul>
    </div>
    </>
  );
}
}

export default App;
