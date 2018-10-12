import { connect } from 'redux';
import Decrement from '../actions/decrement';
import Button from '../components/Button';

const mapStateToProps = (state) => {          // eslint-disable-line
  return {
    type: 'DECREMENT',
  };
};

const mapDispatchToProps = (dispatch) => {          // eslint-disable-line
  return {
    onClick: () => {
      dispatch(Decrement);
    },
  };
};

const DecrementContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default DecrementContainer;
