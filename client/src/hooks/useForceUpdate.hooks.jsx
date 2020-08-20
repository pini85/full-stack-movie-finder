import React, { useState } from "react";

//create your forceUpdate hook
const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue(value => ++value);
};

export default useForceUpdate;
