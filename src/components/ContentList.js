import { Table, TableBody, TableCell, TableContainer,
        TableHead, TableRow, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSettings } from './settingsSlice';


export default function ContentList(props) {
    
    const data = props.data.items || []
    const appState = props.appState
    const error = props.error
    const page = props.page
    const settings = useSelector(selectSettings)

    const firstItemIndex = (page-1) * settings.pageSize + 1


    const loadingStyles = {
            backgroundColor:'#1976d250',
            position:'absolute',
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
    }

    const content = data.map((item, itemIndex) => {
        return (
            <TableRow hover key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ width: '0px' }} align='left'>{firstItemIndex+itemIndex}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align='right'>{item.count}</TableCell>
            </TableRow>
        )
    })

    return (
        <TableContainer sx={{ maxHeight: 440, borderBottom: '1px solid black', borderTop: '1px solid black',}}>
            <Table stickyHeader size="small">
                <TableHead sx={{ borderBottom: '2px solid black'}}>
                    <TableRow>
                        <TableCell align='left'>No.</TableCell>
                        <TableCell>Tag Name</TableCell>
                        <TableCell align='right'>Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ position: 'relative'}}>
                    {appState === 'loading' &&
                        <TableRow sx={loadingStyles}>
                            <CircularProgress />
                        </TableRow>
                    }
                    {appState === 'error' &&
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell sx={{color:'error.main'}}>{error}</TableCell>
                        </TableRow>
                    }
                    {appState !== 'error' && content}
                </TableBody>
            </Table>
        </TableContainer>
    )
}