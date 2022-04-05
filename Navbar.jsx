
import { useContext } from "react";
import {ColorModeContext} from "./Wrapper"
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar=()=>{
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return(
        <div className='topNav'>
            <h3><a href="https://abdlendingpage.netlify.app" target="_blank">Weather</a></h3>
            <div className="dark">
                <IconButton sx={{ ml: 0 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </div>
        </div>
     )
}

export default Navbar;