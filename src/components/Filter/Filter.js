import PropTypes from 'prop-types';
import './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder="..."
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
