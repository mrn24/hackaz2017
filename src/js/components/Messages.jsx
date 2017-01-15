import React from 'react';

import Message from './Message';
import style from '../../css/Messages.css';

const Messages = ({ messages }) => (
  <div>
    <ul className={style.chatBox}>
      {messages.map(m => <Message key={m.id} data={m} />)}
    </ul>
  </div>
);

Messages.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Messages;
