import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Load() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <Loader
        className='h-screen flex flex-col justify-center items-center space-y-10'
        type="Oval"
        color="#6366f1"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default Load;