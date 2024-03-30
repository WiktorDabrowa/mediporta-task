import SettingsBar from './SettingsBar';
import ContentList from './ContentList';
import Pagination from './Pagination';

import { Container, Divider } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TagBrowser() {

    const [settings, setSettings] = useState({
        pageSize: 30,
        sortBy: 'popular',
        sortDirection: 'desc'
    })

    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [page, setPage] = useState(25)
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)

    const containerStyle = {
        border: 1,
        borderRadius: 2,
        boxShadow: 5,
        pointerEvents: isLoading ? 'none' : 'auto',
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
                    console.log(response)
                    return response.data
                }
            })
            .then((data) => {
                setData(data.items)
                setHasMore(data.items.has_more)
                setIsLoading(false)
            })
            .catch(function(error) {
                console.log(error)
                const message = error.response.data.error_message || "Unkown error"
                const statusCode = error.response.status;
                setError(`Error ${statusCode} occured: ${message}`)
                setData([])
                setIsLoading(false)
            })
        setError(null)
        setIsLoading(true)
      }, [settings, page]);

    return (
        <Container sx={containerStyle} maxWidth='sm' disableGutters>
            <SettingsBar
                settings={settings}
                setSettings={setSettings}
                />
            <ContentList 
                data={data}
                sortBy={settings.sortBy}
                sortDirection={settings.sortDirection}
                error={error}
                isLoading={isLoading}
                />
            <Divider variant='middle'/>
            <Pagination 
                page={page}
                setPage={setPage}
                hasMore={hasMore}
            />
        </Container>
    )
}