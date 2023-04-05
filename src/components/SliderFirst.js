import React, { Component } from 'react'
import Name from './Name'

export class SliderFirst extends Component {
    
    state = {
        slide: 0,
        contRef: React.createRef()
    }

    changeSlide(count) {
        console.log(count);
        for (let i = 0; i < this.state.contRef.current.children.length; i++) {
            this.state.contRef.current.children[i].style.transform = `translateX(-${850 * count}px)`
        }
    }

    PrewSlid = () => {
        let count = this.state.slide

        if (count < this.state.contRef.current.children.length / 2) {
            count++;
        } else {
            count = 0
        }

        this.changeSlide(count)
        this.setState({ slide: count })
    }

    NextSlid = () => {
        let count = this.state.slide

        if (count > 0) {
            count--;
        } else {
            count = this.state.contRef.current.children.length/2
        }

        this.changeSlide(count)
        this.setState({ slide: count })
    }
    
    render() {
        const {title} =this.props

        const { contRef } = this.state;
        return (

            <div className='background'>
                <Name title2 ={title} />
                <div className='SliderFirst'>
                    <div onClick={this.PrewSlid} >
                        <img id='m1' src='./img/Vector (58).svg' />
                    </div>

                    <div ref={contRef} className='SliderCont' >

                        <div className='SliderCard'>
                            <img src='./img/image 3 (1).png' />
                            <img id='m5' src='./img/image 2 (1).png' />
                            <img src='./img/DogCat.png' />
                        </div>
                        <div className='SliderCard'>
                            <img src='./img/image 2 (1).png' />
                            <img id='m5' src='./img/DogCat.png' />
                            <img src='./img/image 3 (1).png' />
                        </div>
                    </div>

                    <div onClick={this.NextSlid} >
                        <img id='m2' src='./img/Vector (59).svg' />
                    </div>

                </div>
            </div>
        )
    }
}


export default SliderFirst
