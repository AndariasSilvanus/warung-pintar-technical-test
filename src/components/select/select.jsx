import React from "react";
import T from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MaterialUISelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import InputLabel from "@material-ui/core/InputLabel";

export const OptionType = T.shape({ value: T.string, label: T.string });
const propTypes = {
  options: T.arrayOf(OptionType),
  selectedOption: OptionType,
  onChange: T.func,
  label: T.string,
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Select = ({
  options = [],
  selectedOption,
  label,
  onChange,
  ...props
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    const idx = options.findIndex((e) => e.value === event.target.value);
    const value = idx !== -1 ? options[idx].value : null;
    onChange(value, idx);
  };

  return (
    <FormControl className={classes.formControl}>
      {label && <InputLabel>{label}</InputLabel>}
      <MaterialUISelect
        value={selectedOption ? selectedOption.value : null}
        onChange={handleChange}
        {...props}
      >
        {options.map((e, i) => (
          <MenuItem key={i} value={e.value}>
            {e.label}
          </MenuItem>
        ))}
      </MaterialUISelect>
    </FormControl>
  );
};

Select.propTypes = propTypes;
