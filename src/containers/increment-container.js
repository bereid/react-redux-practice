import { connect } from 'react-redux';
import Increment from '../actions/increment';
import Button from '../components/Button';

const mapStateToProps = (state) => {          // eslint-disable-line
  return {
    type: 'INCREMENT',
    title: 'Increment',
  };
};

const mapDispatchToProps = (dispatch) => {          // eslint-disable-line
  return {
    handleClick: () => {
      dispatch(Increment(1));
    },
  };
};

const IncrementContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default IncrementContainer;
