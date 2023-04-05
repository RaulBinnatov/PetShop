import React, { Component } from 'react'
import Header2 from './Header2'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                <img src='./img/logo-1.png' alt='' />
                <div className='header2'>
                    <div className='searchCont'>
                        <input type='search' />
                        <img id='search1' src='./img/svg1.svg' />
                    </div>
                    <button>Çatdırılma <img src='./img/Group (3).svg' /> </button>
                    <div className='svgCont'>
                        <img src='./img/Vector (48).svg' />
                    <img id='person' src='./img/person.svg' />
                    <img src='./img/Vector (49).svg' />
                    <img src='./img/Vector (50).svg' />
                    <div className='language'>
                        <p>AZ</p>
                        <img src='./img/Vector (51).svg' />
                    </div>
                    </div>
                    
                </div>
               </div> 
              
            </div>
            
            
        )
    }
}

export default Header
