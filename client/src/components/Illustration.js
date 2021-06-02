import React from "react";

function Illustration({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain inline-block  w-96 h-96 md:w-mid md:h-mid
                lg:w-mid lg:h-mid xl:h-lgg xl:w-lgg 2xl:w-lggg 2xl:h-lggg"
    />
  );
}

export default Illustration;
