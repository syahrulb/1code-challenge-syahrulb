import { useState } from 'react';
import bg from '../assets/image/bg.png';
import Header from '../component/Header.jsx';
import Address from '../component/Address.jsx';
import FontOutline from '../component/FontOutline.jsx';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import roomService from '../data/room-services'
import hotelService from '../data/hotel-services'
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import bigImage from "../assets/image/photos/big.png";
import miniSatuImage from "../assets/image/photos/mini-1.png";
import miniDuaImage from "../assets/image/photos/mini-2.png";
import miniTigaImage from "../assets/image/photos/mini-3.png";
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function HalamanUtama() {
    const [getRoomService ] = useState(roomService)
    const [getHotelService ] = useState(hotelService)
    const [value, setValue] = useState('hotel-overview');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return <>
        <Header />
        <Container>
            <Address />
            <img src={bg} width="100%" alt="baggian foto" />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Hotel OverView" value="hotel-overview" />
                        <Tab label="Service" value="service" />
                        <Tab label="Photo" value="photo" />
                        <Tab label="Rating" value="rating" />
                        <Tab label="About" value="about" />
                    </TabList>
                    </Box>
                    <TabPanel value="hotel-overview">
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={8}>
                                <Typography variant="h5" sx={{mb : 1}}>
                                    Room Description
                                </Typography>
                                <Typography variant="body2" align="justify" color="grey.700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam earum numquam atque, quo quos vero beatae qui at tempore officia deleniti consequuntur ad, optio pariatur non facilis quae delectus!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea quae ipsum officia sequi mollitia quisquam veniam quo delectus soluta inventore optio ipsam, laboriosam iure esse hic similique deleniti voluptates?
                                </Typography>
                                <Typography variant="h5" sx={{my : 1}} >
                                    Services
                                </Typography>
                                <Typography variant="body2" align="justify" color="grey.700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea quae ipsum officia sequi mollitia quisquam veniam quo delectus soluta inventore optio ipsam, laboriosam iure esse hic similique deleniti voluptates?
                                </Typography>
                                <Typography variant="h5" sx={{my : 1}} >
                                    Room Services
                                </Typography>
                                <Grid container spacing={1} direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start">
                                    {
                                        getRoomService.map(item=>{
                                            return <FontOutline key={item.judul} item={item}/>
                                        })
                                    }
                                </Grid> 
                                <Typography variant="h5" sx={{my : 1}} >
                                    Hotel Service
                                </Typography>
                                <Grid container spacing={1} direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start">
                                    {
                                        getHotelService.map(item=>{
                                            return <FontOutline key={item.judul} item={item}/>
                                        })
                                    }
                                </Grid> 
                                <Typography variant="h5" sx={{my : 1}} >
                                    Photos
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <ImageList
                                sx={{ width: '100%', height: '450px', transform: 'translateZ(0)', }}
                                variant="quilted"
                                cols={4}
                                gap={1}
                                // rowHeight={121}
                                >
                                    <ImageListItem cols={2} rows={2}>
                                        <img
                                            {...srcset(bigImage, "100%", 2, 2)}
                                            alt='selain ini'
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={1}>
                                        <img
                                            {...srcset(miniSatuImage, "100%", 2, 2)}
                                            alt='selain ini'
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={1}>
                                        <img
                                            {...srcset(miniDuaImage, "100%", 2, 2)}
                                            alt='selain ini'
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={1}>
                                        <img
                                            {...srcset(miniTigaImage, "100%", 2, 2)}
                                            alt='selain ini'
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                    <ImageListItem cols={1} rows={1}>
                                        <img
                                            {...srcset(miniTigaImage, "100%", 2, 2)}
                                            alt='selain ini'
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                        sx={{
                                            background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        }}
                                        title="item"
                                        position="buttom"
                                        actionPosition="right"
                                        actionIcon={
                                            <IconButton
                                              sx={{ color: 'white' }}
                                              aria-label={`star woe`}
                                            >
                                              <StarBorderIcon />
                                            </IconButton>
                                          }
                                        />
                                    </ImageListItem>
                                </ImageList>
                            </Grid>
                        </Grid>    
                    </TabPanel>
                    <TabPanel value="service">Item Two</TabPanel>
                    <TabPanel value="photo">Item Three</TabPanel>
                    <TabPanel value="rating">Item Three</TabPanel>
                    <TabPanel value="about">Item Three</TabPanel>
                </TabContext>
            </Box>
        </Container>
    </>;
}

export default HalamanUtama;