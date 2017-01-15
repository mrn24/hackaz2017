import React from 'react';

const Message = ({ data }) => (
  <li>{ data.text }</li>
);

Message.propTypes = {
  data: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

export default Message;
