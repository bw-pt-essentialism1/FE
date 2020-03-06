import React from "react"
import Loader from "react-loader-spinner";
function Spinner() {

  return (
    <div>
      <Loader
        className="loader"
        type="Oval"
        color="blue"
        width={100}
        timeout={12000}
      />
    </div>
  )
}

export default Spinner