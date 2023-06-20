import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

function loader() {
  return (
    <div>
      <InfinitySpin 
      width='200'  color='red'/>
    </div>
  );
}

export default loader;
