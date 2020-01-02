import React from "react";
import DropDowncard from "./components/molecules/dropDowncard";
import UserAvatar from './components/atoms/UserAvatar'
import {Grid} from '@material-ui/core';
import Header from "./components/molecules/appBar";
import Slider from './components/molecules/slider'
import {GMapLocation} from "./components/molecules/GMapLocation"
import { GStreetView } from "./components/molecules/GStreetView";
import { H1,H2,H3,D1,D2,D3 } from "./components/atoms/TypoTypes";
import colors from "./style/colors"
import Tab from "./components/atoms/rating";
import DashboardCard from './components/atoms/DashboardCard/DashboardCard'
function App() {
  return (
    <>
    <Grid item md={3}>    
     {/* <DropDowncard title="Employee ssds" countValue="850" leftContent="Active Employees" leftContentValue="500" rightContent="Sign-up rate %" rightContentValue="600"/> */}
     
  <Tab/>
  {/* <DashboardCard>
    <b>naveen</b>
  </DashboardCard> */}
     </Grid>
    </>
  );
}

export default App;
