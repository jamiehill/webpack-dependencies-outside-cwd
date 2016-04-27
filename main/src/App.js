import View from '../../sibling/View';
import ReactDOM from 'react-dom';
import moment from 'moment';

const rootEl = document.getElementById('element');
const now = moment().format('dddd, MMMM Do YYYY');
ReactDOM.render(<View message={now}/>, rootEl);