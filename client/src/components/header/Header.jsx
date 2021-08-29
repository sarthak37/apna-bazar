import { AppBar, Box,Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import Searchbar from './Searchbar';
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#800080',
        height: '55px'
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: 'flex',
       
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    }
})

const ToolBar = withStyles({
    root: {
        minHeight: 55,
    }
})(Toolbar);

function Header() {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to = '/' className={classes.component}>
                <img src={logoURL} className={classes.logo}/>
                <Box className={classes.container}>
                <Typography className={classes.subHeading}>
                    Explore <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                </Typography>
                <img src={subURL} className={classes.subURL}/>
                </Box>
                </Link>
                <Searchbar />
                <HeaderButtons />
            </ToolBar>
        </AppBar>
    )
}

export default Header
