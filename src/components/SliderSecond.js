import React, { Component } from 'react'
import Name from './Name';

export class SliderSecond extends Component {

    state = {
        slide: 0,
        contRef: React.createRef()
    }
    changeSlide(count) {
        console.log(count);
        for (let i = 0; i < this.state.contRef.current.children.length; i++) {
            this.state.contRef.current.children[i].style.transform = `translateX(-${1150 * count}px)`
        }
    }

    PrewSlid = () => {
        let count = this.state.slide

        if (count < this.state.contRef.current.children.length/2) {
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
           <div>
             <Name title2={title}/>
            <div className='slider_sec'>
                
                <div onClick={this.PrewSlid} >
                    <img id='m1' src='./img/Vector (58).svg' />
                </div>
                <div className='slider_sec2' ref={contRef}>
                    <div className='s2d'>
                        <div className='slidersecCard'>
                            <img src='./img/distribution 1.png' />
                            <p>Heyvanların catdırılması</p>
                        </div>
                        <div className='slidersecCard'>
                            <img src='./img/Vector (60).svg' />
                            <p>Baytarlıq xidməti</p>
                        </div>
                        <div className='slidersecCard'>
                            <img src='./img/Syringe.svg' />
                            <p>Peyvənd baxımı</p>
                        </div>
                        <div className='slidersecCard'>
                            <img src='./img/pet-food 1.svg' />
                            <p>Sağlam qidalar</p>
                        </div>
                    </div>

                    <div className='s2d'>
                        <div className='slidersecCard'>
                            <img src='./img/pet-food 1.svg' />
                            <p>Baytarlıq xidməti</p>
                        </div>
                        <div className='slidersecCard'>
                            <img src='./img/Syringe.svg' />
                            <p>Sağlam qidalar</p>
                        </div>
                        <div className='slidersecCard'>
                            <img src='./img/Vector (60).svg' />
                            <p>Heyvanların catdırılması</p>
                        </div>
                        <div className='slidersecCard'>
                            <img src='./img/distribution 1.png' />
                            <p>Sağlam qidalar</p>
                        </div>
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

export default SliderSecond
