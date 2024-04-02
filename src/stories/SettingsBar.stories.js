import SettingsBar from '../components/SettingsBar';
import { Mockstore, MockState } from './MockStore';


export default {
    title: 'SettingsBar',
    component: SettingsBar,
    parameters: {
        layout: 'centered',
    },
    excludeStories: /.*MockState$/
}


export const Basic = {
    decorators: [
        (story) => (
            <Mockstore settingsState={MockState}>
                <div style={{minWidth: '400px'}}>
                    {story()}
                </div>
            </Mockstore>
        )
    ],
}
