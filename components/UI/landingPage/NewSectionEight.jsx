import { Box, Rating, Stack, Typography, useTheme } from '@mui/material';

// import man3 from '../../../components/asset/man3.png'
// import man4 from '../../../components/asset/man4.png'

// import man5 from '../../../components/asset/man5.png'
// import lady1 from '../../../components/asset/lady1.png'
// import lady4 from '../../../components/asset/lady4.png'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useTheme } from '@mui/material';

function NewSectionEight() {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    customPaging: (i) => <Box key={i} className="custom-slick-slide" />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1
          // Adjust marginLeft based on the lg breakpoint
          // marginLeft: '-200px'
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
  };

  // Your card data
  const cardData = [
    {
      name: 'Jenny S.',
      rating: 5,
      review:
        "ChildrenKARE is wonderful. I was looking for daycare center but living in a big city, it seemed like a daunting task to even know where to start or to find options to consider. That's where  helped me through their network of providers.",
      image: "/man3.png"
    },
    // {
    //   name: 'Michael D.',
    //   rating: 5,
    //   review:
    //     'As a working parent, finding quality childcare can be stressful. ChildrenKARE made it a easy! We discovered a fantastic preschool for our son, and the reviews from other parents were incredibly helpful in making our decision. Highly recommend!',
    //   image: man1
    // },
    // {
    //   name: 'Mike M.',
    //   rating: 4,
    //   review:
    //     "ChildrenKARE is like a one-stop-shop for childcare solutions. We found a lovely daycare for our twins, and the reviews and ratings from other parents gave us confidence in our choice. It's a must-visit site for any parent",
    //   image: man2
    // },
    {
      name: 'David L.',
      rating: 5,
      review:
        'A reliable resource for parents seeking childcare options. We found a nurturing and educational environment for our daughter through ChildrenKARE. The platform provides authentic and up to date data of daycare centers',
      image: '/man4.png'
    },
    
    {
      name: 'Chris R.',
      rating: 5,
      review:
        'Amazing selection of daycares and preschools on ChildrenKARE! We were able to compare options, read reviews, and make an informed decision. The platform truly simplifies the childcare search process.',
      image: '/man4.png'
    },

    {
      name: 'Sarah B.',
      rating: 4,
      review:
        'The ChildrenKARE website is user-friendly and comprehensive. It made finding a daycare for our little one surprisingly easy. We appreciate the transparency and the wealth of information available to help us make the right choice.',
      image: '/lady4.png'
    },
  
  ];

  return (
    <Stack sx={{ pt: 8, pb: 8, overflowX: 'hidden', background: '#BBE2F2' }}>
      <Stack sx={{ px: { md: 0, xs: 0 }, py: { md: 0, xs: 5 } }}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            alignItems: 'center',
            px: { md: 0, xs: 5 }
          }}
        >
          <Stack>
            <Typography
              variant="subheading1"
              sx={{
                textAlign: 'center',
                fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
                width: { md: '600px', xs: '100%' },
                '& span': {
                  color: '#4680FF'
                }
              }}
            >
              They <span> love</span> CompanyName, Now your turn 😍
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="bodytext"
              sx={{
                textAlign: 'center',
                pt: 2,
                width: { lg: '700px', md: '700px', sm: '100%', xs: '100%' }
              }}
            >
              We take pride in our software solutions, consistently rated 4.6/5 by our satisfied customers. It brings us joy to share the positive feedback we have received from our valued clients.
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ mt: 5, pr: { md: 0, xs: 1 } }}>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <Box
                key={index}
                className="custom-slick-slide" // Apply a custom class to each slide
                sx={{
                  background: '#fff',
                  px: { md: 4, xs: 2 },
                  py: 2,
                  boxShadow: 0.5,
                  border: '1px solid #EAEAEA',
                  m: 2,
                  minHeight: '180px',
                  borderRadius: 2,
                  width: '95%', // Set the width to 95%
                 
                  '&.custom-slick-slide': {
                    width: '95% !important' // Set the width to 95%
                  }
                }}
              >
                <Stack sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { md: 'start', xs: 'center' } }}>
                  <img src={card.image} alt={card.name} height="55px" width="55px" />
                  <Stack sx={{ pl: 2 }}>
                    <Typography variant="bodytext" sx={{ fontWeight: 700 }}>
                      {card.name}
                    </Typography>
                    <Rating name="size-medium" defaultValue={card.rating} readOnly />
                    <Typography variant="bodytext" sx={{ mt: 1 }}>
                      {card.review}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default NewSectionEight;
