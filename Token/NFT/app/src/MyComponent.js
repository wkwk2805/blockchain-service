import React, { useContext, useState } from "react";
import { DrizzleContext } from "@drizzle/react-plugin";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const drizzleContext = useContext(DrizzleContext.Context);

  const getNumber = async () => {
    const { drizzle } = drizzleContext;
    const z = await drizzle.contracts.SimpleStorage.methods.get().call();
    console.log(z);
  };

  const setNumber = async () => {
    const { drizzle } = drizzleContext;
    const result = await drizzle.contracts.SimpleStorage.methods
      .set(count)
      .send();
    const { events } = result.events.Change.returnValues;
    const {} = events;
  };

  const _onChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <>
      <input type="number" onChange={_onChange} />
      <button onClick={setNumber}>set</button>
      <button onClick={getNumber}>get</button>
    </>
  );
};
export default MyComponent;
