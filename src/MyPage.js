import React from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

function MyPage(props) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "23633466",
    formId: "5641b914-ab3b-4e0d-a6de-a1869c557d6c",
    target: "#my-hubspot-form",
  });

  return ( 
    <div style={{margin:"0px 120px"}}>
      <h1>Hubspot Form</h1>
      <div id="my-hubspot-form"></div>
    </div>
  );
}

export default MyPage;
