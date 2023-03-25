import React from "react";

const Loader = () => {
  return (
    <div class="container mx-auto w-full flex justify-center">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loader;
