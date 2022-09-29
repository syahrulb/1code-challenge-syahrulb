import Grid from '@mui/material/Grid';
import addressLogo from '../assets/image/address-logo.png'
import Typography from '@mui/material/Typography';
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
                <Typography variant="h5" gutterBottom>
                    Pan Pacific Sonargaon/ Dhaka,BD
                </Typography>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
    </>;
}

export default Address;