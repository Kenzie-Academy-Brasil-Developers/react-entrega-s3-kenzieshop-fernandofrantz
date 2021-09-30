import { AppBar, Toolbar, MenuItem } from "@mui/material";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();
  const sendTo = (path) => history.push(path);

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <MenuItem onClick={() => sendTo("/")}>Products</MenuItem>
            <MenuItem onClick={() => sendTo("/cart")}>Cart</MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Menu;
