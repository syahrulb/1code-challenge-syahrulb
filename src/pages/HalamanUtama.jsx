import Header from '../component/Header.jsx';
import Address from '../component/Address.jsx';
import Container from '@mui/material/Container';
import bg from '../assets/image/bg.png';
function HalamanUtama() {
    return <>
        <Header />
        <Container>
            <Address />
            <img src={bg} width="100%" alt="baggian foto" />
        </Container>
    </>;
}

export default HalamanUtama;