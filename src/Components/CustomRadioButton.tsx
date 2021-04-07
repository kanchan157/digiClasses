import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rbutton: {
            borderWidth: 1,
            borderLeftWidth: 0,
            minWidth: 50,
            borderColor: "#808495",
            borderStyle: "solid",
            color: "#CECFD0",
            '&:first-child': {
                borderLeftWidth: 1,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4
            },
            '&:last-child': {

                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
            },
        },

        selected: {
            backgroundColor: "#3B86FF",
            borderWidth: 1,
            borderLeftWidth: 0,
            minWidth: 50,
            borderColor: "#3B86FF",
            borderStyle: "solid",
            color: "#ffffff",

            '&:first-child': {
                borderLeftWidth: 1,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4
            },
            '&:last-child': {

                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
            },
        }

    }),
);
function CustomRadioButton(props: any) {
    const classes = useStyles();
    const global_data = useSelector((state: any) => state.stepperReducer);

    const [radioDefaultValue, setRadioDefaultValue] = useState(props.itemArr[props.index])
    // alert(props.itemArr[props.index])
    const changeRadioStaus = (e: any) => {
        console.log(e.target.innerText)
        setRadioDefaultValue(e.target.innerText);
        props.parentcall(e.target.innerText,props.id)
    }
    useEffect(() => {
        // console.log("props.itemArr[props.index]",props.index,props.itemArr)
        // console.log("props.itemArr[props.index]",props.itemArr[props.index])
        setRadioDefaultValue(props.itemArr[props.index])  
    }, [props])
    return (
        <div style={{ flexDirection: "row", flex: 1, display: "flex", maxWidth: "150px", textAlign: "center" }}>
            {
                props.itemArr.map((option: any, index: any) => {
                    return <div style={{ flexDirection: "column", flex: .5, padding: 8 }}
                        className={radioDefaultValue == option ? `${classes.selected}` : `${classes.rbutton}`} onClick={changeRadioStaus}>{option}</div>
                })
            }
        </div >
    )
}

export default CustomRadioButton
