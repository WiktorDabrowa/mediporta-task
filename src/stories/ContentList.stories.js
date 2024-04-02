import ContentList from '../components/ContentList';
import { Mockstore, MockState } from './MockStore';

let previousRandomNumber = 10000000

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * previousRandomNumber)
    previousRandomNumber = randomNumber
    return randomNumber
}

const mockData = {
    items: [
        {name: 'Javascript', count: generateRandomNumber()},
        {name: 'Python', count: generateRandomNumber()},
        {name: 'C++', count: generateRandomNumber()},
        {name: 'Storybook', count: generateRandomNumber()},
        {name: 'Robot Framework', count: generateRandomNumber()},
        {name: 'IaC', count: generateRandomNumber()},
        {name: 'CI/CD', count: generateRandomNumber()},
        {name: 'Docker', count: generateRandomNumber()},
        {name: 'React', count: generateRandomNumber()},
        {name: 'Django', count: generateRandomNumber()},
    ],
}

export default {
    title: 'ContentList',
    component: ContentList,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (story) => (
            <Mockstore settingsState={MockState}>
                <div style={{minWidth:'400px'}}>
                    {story()}
                </div>
            </Mockstore>
        )
    ],
    argTypes: {
        error: {
            control: {
                type: 'text'
            }
        },
        appState: {
            control: {
                type: 'select',
            },
            options: ['ok', 'loading', 'error']
        }
    }
}

export const Basic = {
    args: {
        data: mockData,
        appState: 'ok',
        error: null,
        page: 1,
    }
}

export const Loading = {
    args: {
        data: mockData,
        appState: 'loading',
        error: null,
        page: 1,
    }
}

export const Error = {
    args: {
        data: mockData,
        appState: 'error',
        error: 'Error occured!',
        page: 1,
    }
}
