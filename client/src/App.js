import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  //HashRouter,
  BrowserRouter,
  //Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import LandingPage from "scenes/landingPage"; // Import the new LandingPage component
import PoblacionSales from "scenes/poblacionSales";
import BuhanginSales from "scenes/buhanginSales";
import KidalapongSales from "scenes/kidalapongSales";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      {/* Fan note: we need to change this to "HashRouter" for it if refreshed, it WONT CRASH*/}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* New Landing Page Route */}
            <Route path="/" element={<LandingPage />} />

            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/poblacion" element={<PoblacionSales />} />
              <Route path="/buhangin" element={<BuhanginSales />} />
              <Route path="/kidalapong" element={<KidalapongSales />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
        {/* Fan note: we need to change this to "HashRouter" for it if refreshed, it WONT CRASH*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
