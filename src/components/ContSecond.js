import React, { Component } from 'react'
import { getInfo } from '../actions/Actions'
import CardSec from './CardSec'
import Name from './Name'

export class ContSecond extends Component {
  state = {
    images : []
 }
 componentDidMount(){
    getInfo()
    .then(resp=>{
        this.setState({images: resp})
    })
 }
  render() {
    const {title} = this.props
    const {images } = this.state
    return (
      <div>
        <Name title2 ={title}/>
        <div className='sec_buttons'>
            <button id='btn1'>Ən çox satılan məhsullar</button>
            <button>Yeni məhsullar</button>
            <button>Seçilən məhsullar</button>
        </div>
        <div className='cont_sec'>
          {
            images.map((cont,i)=>{
              return(
                 <CardSec
               key={i}
               cont={cont}
               />
              )
              
            })
            
          }
           
        </div>
      </div>
    )
  }
}

export default ContSecond
