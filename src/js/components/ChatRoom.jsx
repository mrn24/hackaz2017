import React from 'react';

import Messages from './Messages';
import style from '../../css/ChatRoom.css';

const ChatRoom = props => (
  <div>
    <div className="row">
      <div className="col-lg-12">
        <Messages messages={props.messages} />
      </div>
    </div>
    <div className={`${style.form} row`}>
      <div className="col-lg-12">
        <form className="input-group" onSubmit={props.sendMessage}>
          <input type="text" className="form-control" placeholder="Message..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Go!</button>
          </span>
        </form>
      </div>
    </div>
  </div>
);

ChatRoom.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  sendMessage: React.PropTypes.func.isRequired
};

export default ChatRoom;
