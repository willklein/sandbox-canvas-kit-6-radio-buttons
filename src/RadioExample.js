import React from "react";

import {
  resetUniqueIdCount,
  setUniqueSeed,
  FormField,
  Radio,
  RadioGroup,
} from "@workday/canvas-kit-react";

resetUniqueIdCount();
setUniqueSeed("ck-radio-");

export default function () {
  const [value, setValue] = React.useState("deep-dish");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <FormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name="crust" onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </FormField>
  );
}
