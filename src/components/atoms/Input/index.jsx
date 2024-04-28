import Label from "./Label";
import Input from "./Input";

const InputFormLabel = (props) => {
  return (
    <div>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input name={props.name} type={props.type} placeholder={props.placeholder}></Input>
    </div>
  );
};

export default InputFormLabel;
