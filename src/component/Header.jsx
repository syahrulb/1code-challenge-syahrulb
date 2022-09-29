import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import headerLogo from '../assets/image/header-logo.png'
import Typography from '@mui/material/Typography';
function Header() {
    return <>
        <AppBar position="static" 
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1
              }}
        >
            <Toolbar>
            <Grid container  sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:"center"
            }}>
                <Grid item xs={2} md={2} sx={{ flexDirection: 'row' }}  >
                    <YouTubeIcon sx={{color:'grey.900', mr: 1}} />
                    <InstagramIcon sx={{color:'grey.900', mr: 1}} />
                    <FacebookIcon sx={{color:'grey.900'}} />
                </Grid>
                <Grid item xs={2} md={2}>
                <img 
                    src={headerLogo}
                    alt="new"
                />
                </Grid>
                <Grid item xs={2} md={2}>
                    <Typography variant="subtitle1"  sx={{color:'grey.500'}}>
                        708-508-4500
                    </Typography>
                </Grid>
            </Grid>

            </Toolbar>
        </AppBar>
    </>;
}

export default Header;