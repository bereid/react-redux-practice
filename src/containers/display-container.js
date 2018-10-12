import { connect } from 'redux';
import Display from '../components/Display';

const defaultDisplay = 0;

const mapStateToProps = (state = defaultDisplay) => ({ display: state });

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
