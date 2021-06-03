import Dropdown from "Dropdown";
import React, { useContext } from "react";
import { IDEContext } from "./IDE";

const settings = {
  fontSize: {
    label: "Font Size",
    itemType: "fontSize",
    currentItemLabel: "",
    currentItemValue: "",
    items: [],
  },
};

function IDESettings() {
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;

  const settingsState = IDEState.settings;
  return (
    <div>
      <Dropdown
        Dropdownlabel={settingsState.fontSize.currentItemLabel}
        itemType={"fontSize"}
        items={settings.fontSize.items}
        handleItemClick={IDEHandlers.handleItemClick}
      />
    </div>
  );
}

export default IDESettings;
