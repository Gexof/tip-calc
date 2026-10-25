import Bill from "./Bill";
import SelectPercentage from "./SelectPercentage";
import Total from "./Total";

function App() {
  return (
    <main>
      <Bill />
      <SelectPercentage label="How did you like the service?" />
      <SelectPercentage label="How did your freind like the service?" />
      <Total />
    </main>
  );
}

export default App;
