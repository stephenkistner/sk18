// /app/components/WelcomeMessage.jsx

import React from 'react';

export default class WelcomeMessage extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.data.title}.</h1>
      </header>
    )
  }
}
