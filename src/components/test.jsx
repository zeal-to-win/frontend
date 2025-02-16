import { useState } from "react";
import { formatDate, capitalizeString } from "@zeal-to-win/utils";

function Test() {
  const [name, setName] = useState("world");

  return (
    <div>
      <h1>Hello {capitalizeString(name)}!</h1>
      <p>Today is {formatDate(new Date())}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Test;
