import React, { Component } from "react";
import './learning.css';



class Learning extends Component{
    constructor(props){
        super(props);

        this.state = {
            fruits:[
                {name:'Mango', weight:'120gm'},
                {name:'Apple', weight:'200gm'},
                {name:'Orange', weight:'50gm'},
            ]
        }
    }

    clickHandler = () => {

        //console.log('Hello Harindu is there');
        //alert('Welcome UDEMY')
        this.setState({
            fruits:[
                {name:'Samsung', weight:'120gm'},
                {name:'Apple', weight:'200gm'},
                {name:'Nokia', weight:'50gm'},
            ]

        })
    }

    render(){
        const style ={
            backgroundColor:'orange',
            font:'inherit',
            border:'2px solid marron',
            padding:'10px',
            cursor:'pointer'
        }
        return (
            <div>
                <button style={style} onClick={this.clickHandler}>Click Me</button>
                <h1 className="Card"> Fruits is {this.state.fruits[0].name} </h1>
                <h1 className="Card"> Fruits is {this.state.fruits[1].name} </h1>
                <h1 className="Card"> Fruits is {this.state.fruits[2].name} </h1>
                    
            </div>
            
        )    
    }

}

export default Learning

// state 

//clickHandler = Event Handler with Methods

//class components 