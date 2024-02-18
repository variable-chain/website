// components/ZohoForm.js
import Image from "next/image";
import React, { useEffect } from "react";
import styles from './ZohoForm.module.scss';

const ZohoForm = () => {
  const referenceSetter = (image: any) => {
    // Your onLoad logic goes here
  };
  useEffect(() => {
    // Add code to execute after the component mounts
    // This is where you can paste the Zoho Campaigns form embed code
    // Make sure to sanitize and properly handle the script tags in the HTML code
  }, []);

  useEffect(() => {
    const imageElement = document.getElementById("refImage");

    if (imageElement) {
      imageElement.addEventListener("load", () =>
        referenceSetter(imageElement)
      );

      // Cleanup the event listener when the component unmounts
      return () => {
        imageElement.removeEventListener("load", () =>
          referenceSetter(imageElement)
        );
      };
    }
  }, []);

  return (
        <>
        <div id="sf3z1c142d5b4f5c4654e98e4ce8364c62f58515d24cd7f6619ab7a7072a764a253e" data-type="signupform">
	<div id="customForm">
		<div className="quick_form_8_css" data-name="SIGNUP_BODY">
			<div>
				<span  id="SIGNUP_HEADING"></span>
				<div>
					<div id="Zc_SignupSuccess" >
						<table width="100%" >
							<tbody>
								<tr>
									<td width="10%">
										{/* <img className="successicon" src="https://zc1.maillist-manage.in/images/challangeiconenable.jpg" align="absmiddle" /> */}
									</td>
									<td>
										{/* <span id="signupSuccessMsg" >&nbsp;&nbsp;Thank you for Signing Up</span> */}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<form method="POST" id="zcampaignOptinForm" action="https://zc1.maillist-manage.in/weboptin.zc" target="_zcSignup">
					{/* <div id="errorMsgDiv">Please correct the marked field(s) below.</div> */}
					<div >
						<div id="Zc_SignupSuccess" >
							<div>
								{/* <img className="successicon" src="https://campaigns.zoho.com/images/challangeiconenable.jpg" /> */}
							</div>
							<div>
								<span id="signupSuccessMsg"></span>
							</div>
						</div>
                        <div className={styles.form_container}>
						<input type="email" className={styles.form_container_input} required  placeholder="john.doe@email.com" data-changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL"/>
						<input type="submit" className={styles.form_container_btn}  name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Subscribe for updates"/>

                        </div>
					</div>
					<div>
					</div>
					<input type="hidden" id="fieldBorder" value=""/>
					<input type="hidden" id="submitType" name="submitType" value="optinCustomView"/>
					<input type="hidden" id="emailReportId" name="emailReportId" value=""/>
					<input type="hidden" id="formType" name="formType" value="QuickForm"/>
					<input type="hidden" name="zx" id="cmpZuid" value="1df9e2c0b2"/>
					<input type="hidden" name="zcvers" value="2.0"/>
					<input type="hidden" name="oldListIds" id="allCheckedListIds" value=""/>
					<input type="hidden" id="mode" name="mode" value="OptinCreateView"/>
					<input type="hidden" id="zcld" name="zcld" value="1234928813315727"/>
					<input type="hidden" id="zctd" name="zctd" value="1234928813315661"/>
					<input type="hidden" id="document_domain" value=""/>
					<input type="hidden" id="zc_Url" value="zc1.maillist-manage.in"/>
					<input type="hidden" id="new_optin_response_in" value="0" />
					<input type="hidden" id="duplicate_optin_response_in" value="0" />
					<input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
					<input type="hidden" id="zc_formIx" name="zc_formIx" value="3z1c142d5b4f5c4654e98e4ce8364c62f58515d24cd7f6619ab7a7072a764a253e" />
					<input type="hidden" id="viewFrom" value="URL_ACTION" />
					{/* <span id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span> */}
				</form>
			</div>
		</div>
	</div>
	{/* <img src="https://zc1.maillist-manage.in/images/spacer.gif" id="refImage" onLoad="referenceSetter(this)" /> */}
</div>
<input type="hidden" id="signupFormType" value="QuickForm_Horizontal" />
<div id="zcOptinOverLay" contextMenu="return false"></div>
<div id="zcOptinSuccessPopup" >
	<span  id="closeSuccess">
		{/* <img src="https://zc1.maillist-manage.in/images/videoclose.png"/> */}
	</span>
	<div id="zcOptinSuccessPanel"></div>
</div>
    </>
  )}

export default ZohoForm;
