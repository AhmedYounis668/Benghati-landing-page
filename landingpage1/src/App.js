import { BusinessBay } from "./Component/BusinessBay.js";
import { Cards } from "./Component/Cards.js";
import { Headerr } from "./Component/Headerr.js";
import { Imagereview } from "./Component/Imagereview.js";
import { MeetUs } from "./Component/MeetUs.js";
import { Prices } from "./Component/Prices.js";
import { Slidershow } from "./Component/Slidershow.js";
import { Time } from "./Component/Time.js";


function App() {
  return (
    <div className="App">
      <Slidershow/>
      <Headerr/>
      <Cards/>
      <Prices/>
      <Time/>
      <Imagereview/>
      <BusinessBay/>
      <MeetUs/>
    </div>
  );
}

export default App;
