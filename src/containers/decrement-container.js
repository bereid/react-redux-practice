import { connect } from 'react-redux';
import Decrement from '../actions/decrement';
import Button from '../components/Button';

const mapStateToProps = () => ({
  type: 'DECREMENT',
  title: 'Decrement',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(Decrement(1));
  },
});

const DecrementContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default DecrementContainer;
