import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Spinner() {
  return (
    <div className="sweet-loading">
      <Loader
        className='h-screen flex flex-col justify-center items-center space-y-10'
        type="Oval"
        color="#6366f1"
        height={100}
        width={100}
      />
    </div>
  );
}

export default Spinner;