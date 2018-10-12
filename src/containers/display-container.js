import { connect } from 'react-redux';
import Display from '../components/Display';

const defaultState = {
  count: 0,
};

const mapStateToProps = (state = defaultState) => ({ display: state.changeReducer.value });

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
