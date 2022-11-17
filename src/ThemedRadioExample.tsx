import React from "react";

import {
  colors,
  FormField,
  Radio,
  RadioGroup,
  PartialEmotionCanvasTheme,
  CanvasProvider,
  styled,
} from "@workday/canvas-kit-react";

const inverseRadioTheme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      primary: {
        main: colors.frenchVanilla100,
        contrast: colors.blueberry400,
      },
    },
  },
};

const BlueBackground = styled("div")({
  backgroundColor: colors.blueberry400,
  color: colors.frenchVanilla100,
  padding: 10,
});

export default function () {
  const [value, setValue] = React.useState("deep-dish");

  const handleChange = (value: string | number) => {
    setValue(`${value}`);
  };

  return (
    <FormField label="Choose Your Pizza Crust" useFieldset={true}>
      <CanvasProvider theme={inverseRadioTheme}>
        <BlueBackground>
          <RadioGroup name="crust" onChange={handleChange} value={value}>
            <Radio label="Deep dish" value="deep-dish" />
            <Radio label="Thin" value="thin" />
            <Radio label="Gluten free" value="gluten-free" />
            <Radio label="Cauliflower" value="cauliflower" />
          </RadioGroup>
        </BlueBackground>
      </CanvasProvider>
    </FormField>
  );
}
