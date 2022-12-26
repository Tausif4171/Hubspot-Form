import "./App.css";
import MyPage from "./MyPage";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

function App() {
  return (
    <div className="App">
      <HubspotProvider>
        <MyPage />
      </HubspotProvider>
    </div>
  );
}

export default App;
