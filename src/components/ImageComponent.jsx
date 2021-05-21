import React from 'react'
import {Card, CardMedia, makeStyles, CardHeader} from "@material-ui/core"
import imageList from "./imageList"

const useStyles = makeStyles({
    image:{
        height:"400px",
       
    
        objectFit:"contain",
    }
})

function ImageComponent({count}) {
    const classes  =useStyles()
    console.log(imageList)

    return (
        <div>
            <Card>
                <CardHeader title="Say.. Hello Image Slider.." subheader={`Image ${count}`}></CardHeader>
                <CardMedia image = {`${imageList[count].src}`}  className = {classes.image}>
                </CardMedia>
        
            </Card>
        </div>
    )
}

export default ImageComponent
