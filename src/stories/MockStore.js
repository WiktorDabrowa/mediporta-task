import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';


export const MockState = {
        pageSize:10,
        sortBy:'popular',
        sortDirection:'asc'
    }

export const Mockstore = ({ settingsState, children }) => (
    <Provider
        store={configureStore({
            reducer:{
                settings: createSlice({
                    name: 'settings',
                    initialState: settingsState,
                    reducers: {
                        setSetting: (state, action) => {
                            const payload = action.payload
                            state[payload.name] = payload.value
                        }
                    }
                }).reducer
            },
        })}
    >
        {children}
    </Provider>
)