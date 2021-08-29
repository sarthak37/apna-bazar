import { makeStyles, Box, Typography, Button, Divider } from '@material-ui/core';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constants/data';
import Countdown from 'react-countdown';
import { Opacity } from '@material-ui/icons';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };

  const useStyle = makeStyles({
      image: {
          height: 150
      },
      component: {
          marginTop: 12,
          background: '#FFFFFF'
      },
      deal: {
          padding: '15px 20px',
          display: 'flex'
      },
      dealText: {
          fontSize: 22,
          fontWeight: 600,
          lineHeight: '32px',
          marginRight: 25
      },
      timer: {
          color: '#7f7f7f',
          marginLeft: '10px',
          display: 'flex',
          alignItems: 'center'
      },
      Button: {
          marginLeft: 'auto',
          background: '#800080',
          borderRadius: '5px',
          fontSize: 14
      },
      text: {
          fontSize: 14,
          marginTop: 5,
          
      },
      wrapper: {
          padding: '35px 15px'
      }
      
  })

function Slide({ timer, title }) {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left </span>;
  }

    return (
        <div>
            <Box className={classes.component}>
                <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                timer &&
                <>
                <img src = {timerURL} style={{width: 24}} />
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />,
                <Button variant="contained" color="primary" className={classes.Button}>View All</Button>
                </>
}
                </Box>
                <Divider />
                <Carousel 
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={false}
            autoPlay={true}
            autoPlaySpeed={100000000000000000000}
            showDots={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            >
  {
      products.map(product => (
          <Box textAlign = "center" className={classes.wrapper}>
          <img src = {product.url} className={classes.image}/>
          <Typography className={classes.text} style = {{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
          <Typography className={classes.text}  style = {{fontWeight: 100, color: 'green'}}>{product.discount}</Typography>
          <Typography className={classes.text}  style = {{fontWeight: 100, color: '#212121' ,Opacity:'0.6'}}>{product.tagline}</Typography>
          </Box>
      ))
  }
</Carousel>
</Box>
        </div>
    )
}

export default Slide
