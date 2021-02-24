import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'date-fns';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "95%",
            margin: 3,
            
            // '& > * + *': {
            //     marginTop: theme.spacing(1),
            // },
        },
    }),
);

export default function MultiSearch(props) {
    const [filterValue, setfilterValue] = useState({})
    const classes = useStyles();
    const { setfilterField, filterField, applyFilter } = props
    const hasEventType = filterField.includes("event_type")
    const hasDateTime = filterField.includes("dateTime")
    const hasCameraID = filterField.includes("camera_id")
    const hasUrl = filterField.includes("url")

    const handleChange = (e) => {
        setfilterValue((prev) => {
            return {
                ...prev, [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        applyFilter(filterValue)
    }

    console.log("fileterValue", filterValue)
    return (
        <>
            <Grid container spacing={3} justifyContent="center" alignContent="center" alignItems="center" >
                <Grid item md={6} xs={12}>
                    <Autocomplete
                        fullWidth
                        multiple
                        limitTags={1}
                        id="multiple-limit-tags"
                        options={top100Films}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Select" fullWidth style={{
                                minWidth:400
                            }}/>
                        )}
                        onChange={(event, value) => setfilterField(value)}
                    />

                </Grid>
                <Grid item md={6} xs={12} style={{textAlign:"right" }}  >
                    
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Search</Button>
                </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center" >
                {hasEventType && <Grid item md={3} xs={12}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="event_type"
                        label="Event Type"
                        placeholder="Event Type"
                        name="event_type"
                        onChange={handleChange}
                    />
                </Grid>}

                {hasCameraID && <Grid item md={3} xs={12}>
                    <TextField
                    variant="outlined"
                    fullWidth
                        id="camera_id"
                        name="camera_id"
                        label="Camera ID"
                        placeholder="Camera ID"
                        onChange={handleChange}
                    />
                </Grid>}
                {hasUrl && <Grid item md={3} xs={12}>
                    <TextField
                    variant="outlined"
                    fullWidth
                        id="url"
                        name="url"
                        label="URL"
                        placeholder="URL"
                        onChange={handleChange}
                    />
                </Grid>
                }

                {hasDateTime && 
                <>
                    <Grid item md={3} xs={12}>
                        
                    <TextField
                    variant="outlined"
                    fullWidth
                        id="start_date"
                        name="start_date"
                        label="Start Date"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                    />
                    </Grid>
                    <Grid item md={3} xs={12}>
                    <TextField
                    variant="outlined"
                    fullWidth
                        id="end_date"
                        name="end_date"
                        label="End Date"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                    /> </Grid>
                    </>}

            </Grid>
        </>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    "event_type",
    "camera_id",
    "url",
    "dateTime"
]