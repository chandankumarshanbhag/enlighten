import React from "react";

export default function (){
    let time = new Date().getHours();
    let msg = "";
    console.log(time);
    if(time>=5&&time<12){
        msg = "Good morning"
    }
    else if(time>=12&&time<17){
        msg = "Good afternoon"
    }
    else if(time>=12&&time<15){
        msg = "Good afternoon"
    }
    else{
        msg = "Good evening"
    }
    // else if(time>=15&&time<19){
    //     msg = "Good evening"
    // }
    // else{
    //     msg = "Good night"
    // }
    


    return <>{msg}</>;
}