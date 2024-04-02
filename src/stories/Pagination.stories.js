import Pagination from '../components/Pagination';
import { fn } from '@storybook/test';


export default {
    title: 'Pagination',
    component: Pagination,
    args: { onClick: fn() },
    parameters: {
        layout: 'centered',
    },
}

export const Basic = {
    args: {
        page: 1,
        hasMore: true,
        setPage: fn()
    }
}