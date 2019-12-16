import React from 'react'

class Footer extends React.Component{

    render(){
        let date = new Date();
        return(
            <div className='footer'>
                &copy; { date.getFullYear() } — <strong>UpStream</strong>
            </div>
        )
    }
}

export default Footer