import { Button, Grid, Link } from '@material-ui/core'
import React, { useState } from 'react'


const Header = (props:any) => {
    const[isSkip,setIsSkip] = useState(props.isSkip || false)

    return (
        <div>
            <Grid container direction="row" alignItems="center" style={{padding:10, paddingRight:25}}>
                <Grid item xs={10} sm={8}  style={{ borderWidth: 2 }}>
                    {isSkip && <Link>
                        Skip
                    </Link>}
                </Grid>

                <Grid item xs={2} sm={4} style={{ borderWidth: 2, textAlign:'right'}}>
                   {props.isBack && <Link style={{marginRight:20, borderBottom:1}}>
                        Back
                    </Link>}
                    <Button variant="contained" color="primary" style={{ textTransform: 'none' }} onClick={(e: any) => { props.parentcall() } }>
                        {props.saveBtnTitle ? props.saveBtnTitle : 'Save & Proceed'}

                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default Header