import { Grid, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectSettings, setSetting } from './settingsSlice.js';


export default function SettingsBar() {

    const settings = useSelector(selectSettings);
    const dispatch = useDispatch()

    function handleChange(e) {
        dispatch(setSetting(
            {name: e.target.name, value: e.target.value},
        ));
    }

    return (
            <Grid container sx={{ padding:'20px' }}>
                <Grid item xs={3}>
                    <FormControl variant='standard' fullWidth>
                        <InputLabel id='pagesize'>Page Size</InputLabel>
                        <Select 
                            labelId='pagesize'
                            value={settings.pageSize}
                            onChange={handleChange}
                            name='pageSize'
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl variant='standard' fullWidth>
                        <InputLabel id='sort-by'>Sort By</InputLabel>
                        <Select
                            labelId='sort-by'
                            value={settings.sortBy}
                            name='sortBy'
                            onChange={handleChange}
                        >
                            <MenuItem value={'name'}>Name</MenuItem>
                            <MenuItem value={'popular'}>Count</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <FormControl variant='standard' fullWidth>
                        <InputLabel id='sort-dir'>Sort Direction</InputLabel>
                        <Select
                            labelId='sort-dir'
                            value={settings.sortDirection}
                            name='sortDirection'
                            onChange={handleChange}
                        >
                            <MenuItem value={'desc'}>Descending</MenuItem>
                            <MenuItem value={'asc'}>Ascending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
    )
}