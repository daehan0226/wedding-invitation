import { pink, cyan, brown  } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
        pink,
        cyan,
        brown,
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
});

theme = responsiveFontSizes(theme);

theme.typography.h4 = {
    fontSize: '1.5625rem',
    [theme.breakpoints.down('tablet')]: {
        fontSize: '1.4rem',
    },
};

theme.typography.h6 = {
    fontSize: '1.2rem',
    [theme.breakpoints.down('tablet')]: {
        fontSize: '0.8rem',
    },
};

theme.typography.h6 = {
    fontSize: '1.2rem',
    [theme.breakpoints.down('tablet')]: {
        fontSize: '0.8rem',
    },
};

theme.typography.body1 = {
    fontSize: '1rem',
    [theme.breakpoints.down('tablet')]: {
        fontSize: '0.9rem',
    },
};

theme.typography.body2 = {
    fontSize: '0.875rem',
    [theme.breakpoints.down('tablet')]: {
        fontSize: '0.7rem',
    },
};
export default theme;
