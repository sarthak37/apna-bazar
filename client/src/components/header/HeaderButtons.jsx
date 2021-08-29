import React from 'react'
import { Box,Button, makeStyles, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#800080',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        marginLeft: '70%',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontSize: 12,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'
    }
})
function HeaderButtons() {
    const classes = useStyle();
    return (
        <div>
            <Box className={classes.wrapper}>
                <Link><Button variant="contained" className={classes.login}>Login</Button></Link>
                <Link><Typography style = {{marginTop: 5}}>More</Typography></Link>
                <Link to='/' className={classes.container}>
                <Badge badgeContent={4} color="secondary">
  <ShoppingCart />
</Badge>
                    <Typography style={{marginLeft: 10}}>Cart</Typography>
                </Link>
            </Box>
        </div>
    )
}

export default HeaderButtons
