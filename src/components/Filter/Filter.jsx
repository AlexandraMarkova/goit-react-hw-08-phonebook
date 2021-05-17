import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact/contact-actions';
import { getFilter } from '../../redux/contact/contacts-selectors';
import TextField from '@material-ui/core/TextField';

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
const Filter = ({ value, onChange }) => (
  <div>
    <label style={styles.label}>
      <TextField
        id="outlined-basic"
        label=" Find contacts by name"
        variant="outlined"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
