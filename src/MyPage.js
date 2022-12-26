import React, {useEffect} from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

function MyPage(props) {
//   const { loaded, error, formCreated } = useHubspotForm({
//     portalId: "23633466",
//     formId: "5641b914-ab3b-4e0d-a6de-a1869c557d6c",
//     target: "#my-hubspot-form",
//   });

useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
        // @TS-ignore
        if (window.hbspt) {
            // @TS-ignore
            window.hbspt.forms.create({
                portalId: '6485032',
                formId: '9fc93abc-a8c7-48de-a6d5-2a3c1583e64f',
                target: '#my-hubspot-form'
            })
        }
    });
}, []);

  return ( 
    <div style={{margin:"0px 120px"}}>
      <h1 style={{color:"#ff7a59"}}>Hubspot Form</h1>
      <div id="my-hubspot-form"></div>
    </div>
  );
}

export default MyPage;
