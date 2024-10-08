import { useState,useEffect } from "react";

import { client } from "../lib/client";

const Demo = () => {
  const [r, setR] = useState<string>("OldValue");

  useEffect(()=>{
    const runx= async ()=>{
      const result = await client.list.query();
      setR(result);
    }
    runx();
  }, [])
  
  client.list.query().then((t) => {
    console.log("gett:::", t);
    setR(t + "");
  });

  return <>{r}<div className="text-red-500 m-10 text-4xl ">TestTailWindInTsx</div> </>;
};

export default Demo;
