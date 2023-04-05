import React, { Component } from 'react'
import Header2 from './Header2'

export class First extends Component {
    render() {
        return (
            <div>

                <div className='first_main'>
                    <Header2 />
                    <div className='first_main_text'>
                        <h3>Yüksək keyfiyyət & sərfəli
                            qiymətə ev heyvanları üçün
                            <span> yem axtarırsınız?</span> </h3>
                            <button>Daxil ol</button>
                            <div className='first_main_img'>
                                <img src='./img/Ellipse 27.svg'/>
                                <img src='./img/Ellipse 31.svg'/>
                                <img src='./img/Ellipse 27.svg'/>
                                <img src='./img/Ellipse 27.svg'/>
                            </div>
                            
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default First
