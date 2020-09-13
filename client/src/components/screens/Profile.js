import React from 'react'

const Profile = ()=>{
    return(
        <div style={{maxWidth: "550px", margin:" 0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img style={{
                        width:"160px",
                        height:"160px",
                        borderRadius:"80px"
                    }}
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-jimmy-page-1970-chris-walter.jpg"
                    />
                </div>
                <div>
                    <h4>Jimmy Page</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width: "108%"}}>
                        <h6><b>10</b> posts</h6>
                        <h6><b>40</b> followers</h6>
                        <h6><b>1</b> following</h6>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <img className="item" src="https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"/>
                <img className="item" src="https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"/>
                <img className="item" src="https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"/>
                <img className="item" src="https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"/>
                <img className="item" src="https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"/>
                <img className="item" src="https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"/>
            </div>        
        </div>
    )
}

export default Profile