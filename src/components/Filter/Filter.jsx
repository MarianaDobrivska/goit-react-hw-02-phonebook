import { Component } from 'react';

export class Filter extends Component {
  onInputChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <label htmlFor="filter">
        {' '}
        Find contacts by name
        <input
          onChange={this.onInputChange}
          type="text"
          name="filter"
          id="filter"
          value={this.props.value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    );
  }
}
