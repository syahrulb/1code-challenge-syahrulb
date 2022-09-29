import Grid from '@mui/material/Grid';
import addressLogo from '../assets/image/address-logo.png'
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './address.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import StarHalfIcon from '@mui/icons-material/StarHalf';
function Address() {
    return <>
        <Grid container  sx={{
            my:2
        }}>
            <Grid item xs={2}>
                <img 
                        src={addressLogo}
                        alt="new"
                />
            </Grid>
            <Grid item xs={6} sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
            }}>
                <Typography variant="h5" gutterBottom sx={{
                    mb:2
                }}>
                    Pan Pacific Sonargaon/ Dhaka,BD
                </Typography>
                <Typography variant="subtitle2" sx={{alignItems:"center"}}  gutterBottom>
                    <span className={styles.spanx} >
                        <LocationOnIcon sx={{bgcolor:'grey.200',mr:1 }} fontSize="small" /> 
                        107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh                   
                    </span>
                    <br />
                    <span className={styles.spanx}>
                        <PhoneIcon sx={{bgcolor:'grey.200', mr:1 }} fontSize="small" />
                        Panpacific.Com: 550-208-00808
                    </span>
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
                }}>
                <p className={styles.p}>
                    <span className={styles.ratingBig}>
                        4.5
                    </span>
                    <span>
                        /5
                    </span>
                </p>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <StarIcon sx={{
                        color:'orange'
                    }}/>
                    <StarIcon sx={{
                        color:'orange'
                    }}/>
                    <StarIcon sx={{
                        color:'orange'
                    }}/>
                    <StarIcon sx={{
                        color:'orange'
                    }}/>
                    <StarHalfIcon sx={{
                        color:'orange'
                    }}/>
                </Box>
            </Grid>
        </Grid>
    </>;
}

export default Address;