import React from 'react'
import {Button,makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    button:{
       
        padding:"75px"
    }
})

function ButtonComponent({name,func}) {
   const classes = useStyles()
    return (
        <div>
<Button variant="contained" color="primary" className = {classes.button} onClick = {func}>{name}</Button>
        </div>
    )
}

export default ButtonComponent
