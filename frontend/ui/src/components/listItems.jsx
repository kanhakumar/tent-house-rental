import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const activeStyle = {
  fontWeight: "bold",
  color: "#4287f5",
  textDecoration: "none",
};

export const mainListItems = (
  <div>
    <NavLink to="/dashboard" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>
    <NavLink to="/transactions" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>
    </NavLink>
    <NavLink to="/customers" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
    </NavLink>
    <NavLink to="/products" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
    </NavLink>
    {/* <NavLink to="/reports" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </NavLink> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Report Section</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Summary Report" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Detailed Report" />
    </ListItem>
  </div>
);
