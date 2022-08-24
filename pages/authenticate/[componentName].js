import { useRouter } from "next/router";
import LoginComponent from "../../src/components/popups/popup-wrapper/Login/LoginComponent";
import PopupWrapper from "../../src/components/popups/popup-wrapper/PopupWrapper";

function ModalDynamicComponent() {
  const router = useRouter();
  const { componentName } = router.query;
  return (
    <div>
      <PopupWrapper Component={LoginComponent} />
    </div>
  );
}

export default ModalDynamicComponent;
