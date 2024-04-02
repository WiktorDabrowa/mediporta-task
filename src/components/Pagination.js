import { Box, ButtonGroup, Button } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

export default function Pagination(props) {

    const page = props.page;
    const setPage = props.setPage;
    const hasMore = props.hasMore;

    function handleChange(e) {
        // eslint-disable-next-line
        switch (e.target.value) {
            case "prev":
                setPage(page-1);
                break;
            case "next":
                setPage(page+1);
                break;
        }
    }

    return (
        <Box display='flex' justifyContent='center' padding={1}>
            <ButtonGroup variant='contained'>
                <Button value='prev' onClick={handleChange} disabled={page <= 1} >
                    <KeyboardArrowLeftRoundedIcon sx={{ pointerEvents: 'none'}}></KeyboardArrowLeftRoundedIcon>
                </Button>
                <Button disabled>{page}</Button>
                <Button value='next' onClick={handleChange} disabled={!hasMore}>
                    <KeyboardArrowRightRoundedIcon sx={{ pointerEvents: 'none'}}></KeyboardArrowRightRoundedIcon>
                </Button>
            </ButtonGroup>
        </Box>
    )
}