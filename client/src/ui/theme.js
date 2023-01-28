import { pink, cyan, brown, grey } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
        grey,
        pink,
        cyan,
        brown,
        text: {
            black: '#000',
            white: '#fff'
        },
        primary: {
            'main': '#000',
            '#1': '#DFB8AA',
            '#2': '#45CDC2',
            '#3': '#43727A',
            '#4': '#FFE6DE',
            '#5': '#F4B688',
            '#6': '#43727A',
        }
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
