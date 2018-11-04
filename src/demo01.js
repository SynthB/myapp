import React from 'react';


export class Demo01 extends React.Component{
    handeliClick(a){
        alert(a)
    }

    render(){
        return (
            <button onClick={()=>this.handeliClick('1111')}>click me</button>
        )
    }
}

export class Demo02 extends React.Component{
    handeliClick(a){
        alert(a)
    }

    render(){
        return (
            <button onClick={()=>this.handeliClick('1111')}>click me</button>
        )
    }
}

