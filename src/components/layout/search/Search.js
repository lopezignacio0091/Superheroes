import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import _ from 'lodash';




const Search = () => {
    const { superheroes } = useSelector(state => state.SuperheroeReducer);

    const onChangeSearch = (e) => {
        const x = _.filter(superheroes,(z) => _.includes(z.name.toLowerCase(), e.target.value.toLowerCase()));
        console.log(x);
    }
    return (
        <div>
            <Grid item xs={12}>
                <InputLabel>Buscar</InputLabel>
                <TextField type="text" variant="outlined" onChange={(e) => {onChangeSearch(e)}} />

            </Grid>
        </div>
    )
}
export default Search;