import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
const d = new Date();
const GetCurrentyear = d.getFullYear();
const fixMonth = d.getMonth() + 1;
const GetCurrentmonth = ('0' + fixMonth).slice(-2)
const GetCurrentday = d.getDate();
const GetYearYYYY = `${GetCurrentyear}-${GetCurrentmonth}-${GetCurrentday}`
const SetTarget = (props) => {
    return (
        <TextField id={props.id} label="Target Date" type="date" defaultValue={GetYearYYYY}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={props.onChange}
        />
    )
}

export default SetTarget