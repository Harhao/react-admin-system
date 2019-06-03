import {withRouter} from 'react-router-dom'
function Redirect(props){
    props.history.push('/login');
}
export default withRouter(Redirect);