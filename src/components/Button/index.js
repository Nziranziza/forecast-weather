import { Button } from "@material-ui/core";

const CustomButton = ({ children, ...props}) => <Button variant="outlined" {...props}>{children}</Button>;

export default CustomButton;
