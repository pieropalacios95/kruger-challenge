import { createTheme } from '@mui/material/styles'

export var theme = createTheme()

theme = createTheme({
    palette:{
        primary:{
            main:'#3260A8'
        },
        secondary:{
            main:'#F4F4F4'
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                variant:'contained'
            },
            styleOverrides:{
                root:{
                    backgroundColor:'#6583BF',
                    marginTop:'20%'
                }
            }
        },
        MuiTextField:{
            defaultProps:{
                variant:'standard'
            },
            styleOverrides:{
                root:{
                    marginTop:'10%'
                }
            }
        }
    }
})