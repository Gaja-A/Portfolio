import { useState, useEffect } from "react";
import { Button, Popover, List, ListItem } from "@material-ui/core";  /* Material-UI */
import { FaGlobeEurope } from 'react-icons/fa';  /* FONT AWESOME ICONS */

import i18next from "i18next";

const languageMap = {
  en: { label: "EN", dir: "ltr", active: true },
  fr: { label: "FR", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";

  const [menuAnchor, setMenuAnchor] = useState(null);
  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root fixed-top">
      <Button className="language_button" onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        <FaGlobeEurope /> &nbsp; {languageMap[selected].label}
      </Button>

      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
