import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name.."
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label className={s.label} htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number.."
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
