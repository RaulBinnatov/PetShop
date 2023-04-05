import React, { Component } from 'react'
import { getVideos } from '../actions/Actions'
import Card from './Card'
import Name from './Name'

export class ContFirst extends Component {
    state = {
        images : []
     }
     componentDidMount(){
        getVideos()
        .then(resp=>{
            this.setState({images: resp})
        })
     }
  render() {
    const {images } = this.state
    const {title} = this.props
    return (
      <section>
      <Name title2={title} />
        <div className='first_cont_ch'>
          {
                images.map((cont, i)=>{
                    return(
                    <Card
                    key={i}
                    cont={cont}
                    />
                    )
                }
                )
         }
        </div>
         
      </section>
      
    )
  }
}

export default ContFirst
