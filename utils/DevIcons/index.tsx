import React, { FC } from "react";

type DevIconProps = {
  icon: string;
  variant?: string;
  width?: string;
  height?: string;
};

const formUrl = ({ icon, variant }: DevIconProps) => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${
    icon === "graphql" ? "plain" : variant ? variant : "original"
  }.svg`;
};
export const DevIconSrc = ({ icon, variant = "" }: DevIconProps) => {
  return formUrl({ icon, variant });
};

const DevIcon: FC<DevIconProps> = ({
  icon,
  variant = "",
  width = "32px",
  height = "auto",
}) => {
  const url = formUrl({ icon: (icon ?? "").toLowerCase(), variant });
  return <img src={url} alt={icon} style={{ width, height }} title={icon} />;
};

export default DevIcon;

/**
    listItems = [];
    list.forEach(l => {
        l.click();
        let z = l.querySelector('h3.cbp-ig-title');
        let iconImages = document.querySelectorAll("#dummybodyid > div.container > header > ul > li:nth-child(2) > ul.icons-list > li> img:nth-child(2)");
        let v = [];
        iconImages.forEach(icon => v.push(icon.src));
        listItems.push({icon: z.innerText, variants: v} );
    }) 
 
 */
