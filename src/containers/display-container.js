import { connect } from 'react-redux';
import Display from '../components/Display';

const defaultState = {
  count: 0,
};

const mapStateToProps = (state = defaultState) => {
  console.log(state);
  return ({ display: state.changeReducer.value });
};

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
