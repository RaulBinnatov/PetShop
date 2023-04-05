import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_first'>
                    <img src='./img/image 6 (1).png' />
                    <img src='./img/image 7.png' />
                    <img src='./img/image 8 (1).png' />
                    <img src='./img/image 9 (2).png' />
                    <img src='./img/image 10 (1).png' />
                </div>
                <div className='line'></div>
                <div className='footer2'>
                    <div className='footer_text'>
                        <a href="*" >Brendlər</a>
                        <a href="*">Bizimlə əlaqə saxlayın</a>
                        <a href="*">Sifarişlərinizi izləyin</a>

                    </div>
                    <div className='footer_input'>
                        <input type='text' />
                        <div className='input_svg'> <img src='./img/Vector (54).svg' /></div>
                    </div>
                    <div className='installer'>
                        <img src='./img/googleplay.png' />
                        <img src='./img/appstore.png' />
                    </div>
                    <div className='social_med'>
                        <img src='./img/Vector (55).svg' />
                        <img src='./img/Vector (56).svg' />
                        <img src='./img/Vector (57).svg' />
                        <img src='./img/Dark_Blue.svg' />
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer
