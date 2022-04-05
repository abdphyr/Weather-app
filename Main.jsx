import "../styles/main.scss"
import Data from './Data';
import Navbar from './Navbar';
import Box from '@mui/material/Box';

const Main = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.secondary',
                borderRadius: 1,
                p: 0
            }}
            > 
                <Navbar />
                <div className='container'>
                    <Data />
                </div>
        </Box>
    );
};

export default Main;