import React, { useState } from "react";

const Hook = props =>{
const [fruiteState, setFruitState]=  useState ({
        fruits:[
            {name:'Mango', weight:'120gm'},
            {name:'Apple', weight:'200gm'},
            {name:'Orange', weight:'50gm'},
        ]

    });
    
    const clickHandler = () => {

        //console.log('Hello Harindu is there');
        //alert('Welcome UDEMY')
        setFruitState({
            fruits:[
                {name:'Samsung', weight:'120gm'},
                {name:'Apple', weight:'200gm'},
                {name:'Nokia', weight:'50gm'},
            ]

        })
    }

        return (
            <div>
                <button onClick={clickHandler}>Change Me</button>
                <h1> Fruits is {fruiteState.fruits[0].name} </h1>
                <h1> Fruits is {fruiteState.fruits[1].name} </h1>
                <h1> Fruits is {fruiteState.fruits[2].name} </h1>
                    
            </div>
            
        )    
    

}

export default Hook



    

   
