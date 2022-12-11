import React, { useEffect /*  */} from "react";
import Transitions from "../components/Animated/Transitions";

import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import { AllCredits } from "../components";

const CreditPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Home"));
  }, []);

  return (
    <Transitions>
      <AllCredits />
    </Transitions>
  );
};

export default CreditPageLayout;
