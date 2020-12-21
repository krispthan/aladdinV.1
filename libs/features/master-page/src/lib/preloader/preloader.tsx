import React, { Component } from 'react';

import './preloader.scss';

/* eslint-disable-next-line */
export interface PreloaderProps {
  loading:boolean;
}

export class Preloader extends Component  {
  constructor(props: PreloaderProps){
    super(props);
    this.state = {
      loading:true
    }
  }
  loaderTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(()=> resolve(),1000)
    })
  }
  componentDidMount = async () => {
    this.loaderTimeOut().then(()=>{
      this.setState({
        loading:false
      })
    })
  }
 render(){
  
   
   return(
   
      <div className="circle-loader">
 <div></div>
      </div>
 
   )
 }
};


