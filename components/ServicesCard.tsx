import React from "react";
import { FunctionComponent, useState } from "react";
import * as icons from "react-icons/fa";
import IService from "../models/serviceInterface";

interface ImportedIcons {
  [key: string]: React.FC<{ fill: string }>;
}

const IconElement = (props: { iconName: any; size: any; color: any }) => {
  const { iconName, size, color } = props;
  const icon = React.createElement(
    (icons as unknown as ImportedIcons)[iconName]
  );
  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};

const ServicesCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div className="flex items-center p-2 space-x-6 ">
      <IconElement iconName={Icon} size={32} color="orange" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
