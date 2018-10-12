import { connect } from 'redux';
import Increment from '../actions/increment';
import Button from '../components/Button';

const mapStateToProps = (state) => {          // eslint-disable-line
  return {
    type: 'INCREMENT',
  };
};

const mapDispatchToProps = (dispatch) => {          // eslint-disable-line
  return {
    onClick: () => {
      dispatch(Increment);
    },
  };
};

const IncrementContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default IncrementContainer;
