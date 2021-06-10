import {
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const CustomSelect = ({ options = [], labelName, labelId, ...props }) => {
  return (
    <FormControl>
      <InputLabel id={labelId}>{labelName}</InputLabel>
      <Select size="small" labelId={labelId} {...props}>
        {options.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
      {!props.value && (
        <FormHelperText>Please select city to see forecast</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;
