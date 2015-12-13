import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

import MyInput from './InputWithDefault';

const App = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (
      <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
        <MyInput name="email" title="Email" validations="isEmail" validationError="OVERRIDE: This is not a valid email" required />
        <MyInput name="email" title="Another Email" validations="isEmail" required />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Form>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('example'));
