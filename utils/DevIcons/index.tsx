import React, { FC } from "react";

type DevIconProps = {
  icon: string;
  variant?: string;
};

const formUrl = ({ icon, variant }: DevIconProps) => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${
    variant ? variant : "original"
  }.svg`;
};
export const DevIconSrc = ({ icon, variant = "" }: DevIconProps) => {
  return formUrl({ icon, variant });
};

const DevIcon: FC<DevIconProps> = ({ icon, variant = "" }) => {
  const url = formUrl({ icon, variant });
  return <img src={url} alt={icon} className="h-10 w-10" />;
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
