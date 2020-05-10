import React from 'react';
import { Alert } from 'react-bootstrap';

const Notification = ({ variant, message, onClose }) => {
  return (
    <Alert variant={variant} dismissible onClose={onClose}>
      {message}
    </Alert>
  );
};

export default Notification;
