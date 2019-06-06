import DataChart from '../views/DataChart';
import Basic from '../views/Basic';
import Form from '../views/Form';
import Message from '../views/Message';
import Alert from '../views/Alert';
import Spin from '../views/Spin';
import Progress from '../views/Progress';
import Checkbox from '../views/Checkbox';
import Cascader from '../views/Cascader';
export const routes = [
    {
        path: '/dataCount',
        component: DataChart
    },
    {
        path: '/basic',
        component: Basic
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: "/alert",
        component: Alert
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/spin',
        component: Spin
    },
    {
        path: '/progress',
        component: Progress
    },
    {
        path: '/checkbox',
        component: Checkbox
    },
    {
        path: '/cascader',
        component: Cascader
    }]