import { useState } from "react";
import Context from "./Context";

const ContextProivder = (props) => {
  const [cartscreen, setcartscreen] = useState(false);

  return (
    <Context.Provider value={{ cartscreen, setcartscreen }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProivder;
