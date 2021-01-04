import React from 'react'

function Show({url}) {
    return (
        <div>
            {
                <div>-----URL-----<br/>{url}<br/><br/></div>
            }
            {
                <div>-----IMAGES-----<br/></div>
            }
            {                
                url.map((item, index) => 
                    <img key={index} src={item} alt="" />
                )
            }
        </div>
    )
}

export default Show
