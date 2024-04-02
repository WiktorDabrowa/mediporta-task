import SettingsBar from './SettingsBar';
import ContentList from './ContentList';
import Pagination from './Pagination';

import Container from '@mui/material/Container';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSettings } from './settingsSlice';
import { useState, useEffect } from 'react';


export default function TagBrowser() {

    const settings = useSelector(selectSettings)
    const [appState, setAppState] = useState('ok') // 'ok'/'loading'/'error'
    const [error, setError] = useState(null)
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const hasMore = data.has_more

    const containerStyle = {
        border: 1,
        borderRadius: 2,
        boxShadow: 5,
        pointerEvents: appState === 'loading' ? 'none' : 'auto',
        position: 'relative'
    }

    const fetchUrl = `https://api.stackexchange.com/2.3/tags?\
        page=${page}&\
        pagesize=${settings.pageSize}&\
        order=${settings.sortDirection}&\
        sort=${settings.sortBy}&\
        site=stackoverflow
    `.replace(/\s/g,'')

    useEffect(() => {
        axios.get(fetchUrl)
            .then(response => {
                if (response.status === 200) {
                    return response.data
                }
            })
            .then((data) => {
                setData(data)
                setAppState('ok')
            })
            .catch(function(error) {
                const message = error.response.data.error_message || "Unknown error"
                const statusCode = error.response.status;
                setError(`Error ${statusCode} occured: ${message}`)
                setData({})
                setAppState('error')
            })
        setError(null)
        setAppState('loading')
      }, [fetchUrl]);

    return (
        <Container sx={containerStyle} maxWidth='sm' disableGutters>
            <SettingsBar />
            <ContentList 
                data={data}
                error={error}
                appState={appState}
                page={page}
                />
            <Pagination 
                page={page}
                setPage={setPage}
                hasMore={hasMore}
                />
        </Container>
    )
}