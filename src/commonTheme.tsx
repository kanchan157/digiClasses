import { createMuiTheme } from "@material-ui/core";

export const commonTheme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#3B86FF",
      contrastText:"#fff"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#3B86FF',
    },

  },
  typography: {
    h1: {
      fontSize: "22px",
      lineHeight: "27px",
    },
    h2: {
      fontSize: "20px",
      lineHeight: "25px",
    },
    h3: {
      fontSize: "18px",
      lineHeight: "23px",

    },
    h4: {
      fontSize: "16px",
      lineHeight: "20px",

    },
    h5: {
      fontSize: "15px",
      lineHeight: "25px",

    },
    h6: {
      fontSize: "14px",
      lineHeight: "18px",

    },
    body1:{
      fontSize: "12px",
      lineHeight: "20px",
    }

  },
});

// .wrapper {
//     color: "#000000";
//     font-family: "Calibri";
//     background-color: "#F9FAFE";
// }

// .h1 {
//     font-size: 22px !important;
//     line-height: 27px !important
// }

// .h2 {
//     font-size: 20px !important;
//     line-height: 25px !important;
// }

// .h3 {
//     font-size: 18px !important;
//     line-height: 23px !important;
// }

// .h4 {
//     font-size: 16px !important;
//     line-height: 20px !important;
// }

// .h5 {
//     font-size: 15px !important;
//     line-height: 25px !important;
// }

// .h6 {
//     font-size: 12px !important;
//     line-height: 15px !important;
// }

// .h7 {
//     font-size: 11px !important;
//     line-height: 18px !important;
// }

// .fontCalibri {
//     font-family: "Calibri";
// }

// .fontNormal {
//     font-weight: "300";
// }

// .fontSemiBold {
//     font-weight: "500";
// }

// .fontBold {
//     font-weight: "700";
// }