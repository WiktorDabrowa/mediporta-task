import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        pageSize: 10,
        sortBy: 'popular',
        sortDirection: 'desc',
    },
    reducers: {
        setSetting: (state, action) => {
            const payload = action.payload
            state[payload.name] = payload.value
        }
    }
})


export default settingsSlice.reducer
export const selectSettings = (state) => state.settings
export const { setSetting } = settingsSlice.actions