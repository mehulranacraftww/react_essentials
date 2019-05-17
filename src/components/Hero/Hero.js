import React , { Component } from 'react';
import './Hero.css';



class Hero extends Component{
    render(){
        return(
            <div>
                <div className="grid__alias">
                    <div className="cwwbos_cre_content_1491478160">
                    <a id="cwwbos_full_offer" title={this.props.heading}>
                        <p className="cwwbos_text">{this.props.heading}</p>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;



