import React from 'react'

const Home = ()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Jimmy</h5>
                <div className="card-image">
                    <img
                    style={{width:"100%"}}
                    src="https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"rgb(237, 73, 86)"}}>favorite</i>
                    <h6>title</h6>
                    <p>what a post</p>
                    <input type="text" placeholder="Comment..."/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Jimmy</h5>
                <div className="card-image">
                    <img
                    src="https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"rgb(237, 73, 86)"}}>favorite</i>
                    <h6>title</h6>
                    <p>what a post</p>
                    <input type="text" placeholder="Comment..."/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Jimmy</h5>
                <div className="card-image">
                    <img
                    src="https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"rgb(237, 73, 86)"}}>favorite</i>
                    <h6>title</h6>
                    <p>what a post</p>
                    <input type="text" placeholder="Comment..."/>
                </div>
            </div>
        </div>
    )
}

export default Home