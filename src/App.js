


import React,{useState,useEffect} from 'react'
import {Grid,makeStyles, AppBar,Toolbar,Typography} from "@material-ui/core"
import ImageComponent from "./components/ImageComponent"
import ButtonComponent from "./components/ButtonComponent"
import './app.css'
import alanBtn from '@alan-ai/alan-sdk-web';
import imageList from "./components/imageList"
require('dotenv').config()



const useStyles = makeStyles({
  container:{
      margin:"0",
      padding:"0",
      height:"100vh",
      width:"100%",
      background:"linear-gradient(45deg,red,blue)",
      boxSizing:"border-box",

      
  },
  button_container:{

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%"


  },
  
  image : {

    padding:"10px"
  }
})



function App() {
  const classes  =useStyles();


  const [count,setCount] = useState(0);

useEffect(()=>{
console.log("component mount");
alanBtn({ 
    key:process.env.KEY ,
    onCommand: (commandData) => {
if(commandData.command === "next"){
  console.log(commandData);
  setCount(commandData.data);
 
}

if(commandData.command === "previous"){
  console.log(commandData);
  setCount(commandData.data);
 
}
     
     
    },
  });

},[])

  
console.log(process.env.KEY);
 

  


  const nextImage= ()=>{
    setCount((e)=>e+1);
    if(count === imageList.length -1 ){
      setCount(0);
    }
  }

  const previousImage= ()=>{
    setCount((e)=>e-1);
    if(count ===0){
      setCount( imageList.length -1 );
    }
  }


  return (


      <Grid container  className = {classes.container} alignContent="center" justify="center" spacing={4} >
      <AppBar><Toolbar><Typography variant="h6">Voice Image Slider</Typography></Toolbar></AppBar>
        <Grid item  className = {classes.button_container} sm={2} xs={12}><ButtonComponent name = "Say,  Previous Image"  func = {previousImage}></ButtonComponent></Grid>
        <Grid item className = {classes.image} sm={4} xs={12}><ImageComponent count={count} ></ImageComponent></Grid>
        <Grid item  className = {classes.button_container} sm={2} xs={12}><ButtonComponent name = "Say,  Next Image"   func = {nextImage} ></ButtonComponent></Grid>
      </Grid>


  );
}

export default App;
