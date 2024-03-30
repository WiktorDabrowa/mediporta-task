import { Table, TableBody, TableCell, TableContainer,
        TableHead, TableRow, CircularProgress } from '@mui/material';

export default function ContentList(props) {
    
    const data = props.data
    const sortBy = props.sortBy
    const sortDirection = props.sortDirection
    const isLoading = props.isLoading
    const error = props.error

    const loadingStyles = {
            backgroundColor:'#1976d250',
            position:'absolute',
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
    }

    const content = data.map((item) => {
        return (
            <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{item.name}</TableCell>
                <TableCell align='right'>{item.count}</TableCell>
            </TableRow>
        )
    })

    return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader size="small">
                <TableHead sx={{ borderBottom: '2px solid black'}}>
                    <TableRow>
                        <TableCell>Tag Name</TableCell>
                        <TableCell align='right'>Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ position: 'relative'}}>
                    {isLoading &&
                        <TableRow sx={loadingStyles}>
                            <CircularProgress />
                        </TableRow>
                    }
                    {error &&
                        <TableRow>
                            <TableCell sx={{color:'error.main'}}>{error}</TableCell>
                        </TableRow>
                    }
                    {content}
                </TableBody>
            </Table>
        </TableContainer>
    )
}