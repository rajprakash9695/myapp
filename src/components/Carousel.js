import React from 'react';
import Slider from 'react-slick';
import { Box, Paper, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const carouselData = [
    {
      title: 'Slide 1',
      description: 'This is the first slide.',
      imgUrl: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Slide 2',
      description: 'This is the second slide.',
      imgUrl: 'https://via.placeholder.com/500x300',
    },
    {
      title: 'Slide 3',
      description: 'This is the third slide.',
      imgUrl: 'https://via.placeholder.com/500x300',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {carouselData.map((slide, index) => (
        <Box width="50px" container> <Box key={index} sx={{ p: 2 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <img src={slide.imgUrl} alt={`Slide ${index + 1}`} style={{ width: '50%', height: 'auto' }} />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {slide.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {slide.description}
            </Typography>
          </Paper>
        </Box>
        </Box>
       
      ))}
    </Slider>
  );
};

export default Carousel;
