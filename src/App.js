import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showSuccessMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorMessage = () => {
    toast.error("Error Notification...", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showWarningMessage = () => {
    toast.warning("warning Notification !", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  const showInfoMessage = () => {
    toast.info("Information Notification !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const showDefaultMessage = () => {
    toast("Default Notification!!!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const showCustomMessage = () => {
    toast("Custom Notification...", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "foo-bar",
    });
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-sm">
          <button onClick={showSuccessMessage}>Success Notification</button>
        </div>
        <div>
          {" "}
          <button onClick={showErrorMessage}>Error Notification</button>
        </div>
        <div>
          {" "}
          <button onClick={showWarningMessage}>Warning Notification</button>
        </div>
        <div>
          {" "}
          <button onClick={showInfoMessage}>Information Notification</button>
        </div>
        <div>
          {" "}
          <button onClick={showDefaultMessage}>Default Notification</button>
        </div>
        <div>
          <button onClick={showCustomMessage}>Custom Notification</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
