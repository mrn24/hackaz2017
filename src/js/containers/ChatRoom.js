import { connect } from 'react-redux';

import ChatRoom from '../components/ChatRoom';
import actions from '../actions';

const mapStateToProps = state => ({
  messages: state.chat.messages
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (e) => { e.preventDefault(); console.log(e);}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom);
