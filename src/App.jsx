import { useState } from "react";

import Bill from "./Bill";
import SelectPercentage from "./SelectPercentage";
import Total from "./Total";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = billAmount * ((percentage1 + percentage2) / 2 / 100);

  return (
    <main>
      <Bill billAmount={billAmount} onSetBillAmount={setBillAmount} />

      <SelectPercentage
        label="How did you like the service?"
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      />
      <SelectPercentage
        label="How did your freind like the service?"
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      />
      <Total billAmount={billAmount} tip={tip} />
    </main>
  );
}

export default App;
