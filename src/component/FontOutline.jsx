
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const FontOutline = ({item}) => {
    const {model ='', judul, icon : Icon}  = item;
    if (model =='fontawesome') {
        return  <Grid item sm={4}>                     
                    <Chip sx={{ p:1.5 }} label={judul} variant="outlined" icon={ <FontAwesomeIcon icon={['fas', Icon ]} /> } />
                </Grid>;
    } else {
        return  <Grid item sm={4}>                     
                    <Chip sx={{ p:1.5 }} label={judul} variant="outlined" icon={<Icon />} />
                </Grid>;
    }
}

FontOutline.propTypes = {
    item: PropTypes.object
};
export default FontOutline;
