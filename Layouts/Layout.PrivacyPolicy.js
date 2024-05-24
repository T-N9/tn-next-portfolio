import React from "react";
import Transitions from "../components/Animated/Transitions";


/* Components */
import {
  PrivacyPolicy,
} from "../components";

const PrivacyPolicyLayout = () => {

  return (
    <>
      <Transitions>
        <PrivacyPolicy/>
      </Transitions>
    </>
  );
};

export default PrivacyPolicyLayout;
