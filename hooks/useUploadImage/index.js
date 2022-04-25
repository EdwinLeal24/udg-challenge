import { useState } from "react";

export const useUploadImage = () => {
  const [imageSource, setImageSource] = useState("");

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dk3sjqscz",
        uploadPreset: "wowoppzd",
        tags: ["memes"],
      },
      (error, result) => {
        if (
          result.event === "success" &&
          result.info.resource_type === "image"
        ) {
          setImageSource(result.info.url);
        }
      }
    );
    widget.open();
  };

  return {
    imageSource,
    openWidget,
  };
};
