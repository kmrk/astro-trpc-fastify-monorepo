import { useState } from "react";

import { client } from "../lib/client";

const Demo = () => {
  const [r, setR] = useState<string>("OldValue");
  client.list.query().then((t) => {
    console.log("gett:::", t);
    setR(t + "");
  });

  return <div>{r}</div>;
};

export default Demo;
