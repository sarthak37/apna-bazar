import React from 'react'
import { navData } from '../../constants/data';
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    component: {
        display:'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between'
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 66
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
})

function Navbar() {
    const classes = useStyle();
    return (
        <div>
            <Box className ={classes.component}>
                {
                    navData.map(data => (
                        <Box className={classes.container}>
                        <img src = {data.url}  className={classes.image}/>
                <Typography className={classes.text}>{data.text}</Typography>
                </Box>
                    ))
                }
                
            </Box>
        </div>
    )
}

export default Navbar
