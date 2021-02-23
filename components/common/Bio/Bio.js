import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-42 h-40"
        src={require("../../../content/assets/adijo.jpg")}
        webpSrc={require("../../../content/assets/adijo.jpg?webp")}
        previewSrc={require("../../../content/assets/adijo.jpg?lqip")}
        alt="Profile"
      />

      <p className="text-base leading-7 tracking-wide">
        I solve problems with software and machine learning. Toronto 🇨🇦
      </p>
    </div>
  );
}
