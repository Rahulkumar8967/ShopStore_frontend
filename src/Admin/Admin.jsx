import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Person4Icon from "@mui/icons-material/Person4";
import ViewListIcon from "@mui/icons-material/ViewList";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import CreateProductForm from "./component/CreateProductForm";
import ProductTable from "./component/ProductTable";
import OrdersTable from "./component/OrdersTable";
import CustomerTable from "./component/CustomerTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  { name: "Customers", path: "/admin/customers", icon: <Person4Icon /> },
  { name: "Orders", path: "/admin/orders", icon: <ViewListIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <ShoppingBasketIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  const drawer = (
      
    < Box className="ml-9"
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: isLargeScreen ? "flex" : "block" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            height: "100vh",
            width: 175, // Drawer width
            flexShrink: 0,
          }}
        >
          {drawer}
        </Drawer>

        <Box
          sx={{
            padding: "8px", // Padding for spacing
            border: "1px solid #333", // Apply a border for visual separation
            borderRadius: "8px", // Rounded corners
            backgroundColor: "#f5f5f5", // Light background for content
            minHeight: "100vh", // Ensure it takes full height
            width: "100%", // Full width for responsive layout
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product/create" element={<CreateProductForm />} />
            <Route path="/products" element={<ProductTable />} />
            <Route path="/orders" element={<OrdersTable />} />
            <Route path="/customers" element={<CustomerTable />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default Admin;
