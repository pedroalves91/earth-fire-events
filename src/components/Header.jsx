import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={fireIcon} /> Wildfire Tracker (Powered By NASA)
      </h1>
    </header>
  );
};

export default Header;
