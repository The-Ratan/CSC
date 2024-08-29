import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Form, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Newregistration from "./Components/Newregistration";
import Knowstatus from "./Components/Knowstatus";
import Continuereg from "./Components/Continuereg";
import Howtoregister from "./Components/Howtoregister";
import Egovernance from "./Components/Egovernance";
import Banking from "./Components/Banking";
import Payment from "./Components/Payment";
import Insurance from "./Components/Insurance";
import Elearning from "./Components/Elearning";
import Tours from "./Components/Tours";
import Entertainment from "./Components/Entertainment";
import Earnmore from "./Components/Earnmore";
import Servicedetails from "./Components/Servicedetails";
import Profile from "./Components/Profile";
import Myservice from "./Components/Myservice";
import Mybooking from "./Components/Mybooking";
import Message from "./Components/Message";
import Avilablity from "./Components/Avilablity";
import Freaturedmember from "./Components/Freaturedmember";
import Teammembers from "./Components/Teammembers";
import Businesshour from "./Components/Businesshour";
import Uploadidentity from "./Components/Uploadidentity";
import Upgradeaccount from "./Components/Upgradeaccount";
import Changepassword from "./Components/Changepassword";
import Allservices from "./Components/Allservices";
import Training from "./Components/Training";
import Commissionstructure from "./Components/Commissionstructure";
import Dashboard from "./Components/Dashboard";
import Regform from "./Components/Regform";
import Document from "./Components/Document";
import Driver from "./Components/Driver";
import Support from "./Components/Support";
import Cscrecharge from "./Components/Cscrecharge";
import Recharge from "./Components/Recharge";
import IdleTimeout from "./Components/IdleTimeout";
import Dashboard2 from "./Components/Dashboard2";
import Allservices2 from "./Components/Allservices2";
import Driver2 from "./Components/Driver2";
import Document2 from "./Components/Document2";
import Regform2 from "./Components/Regform2";
import Pancardform from "./Components/Pancardform";
import Voteridcard from "./Components/Voteridcard";
import Labourcard from "./Components/Labourcard";
import Udidcard from "./Components/Udidcard";
import Eshramcard from "./Components/Eshramcard";
import Aayushmancard from "./Components/Aayushmancard";

import Pancardform1 from "./Components/Pancardform1";
import Voteridcard1 from "./Components/Voteridcard1";
import Labourcard1 from "./Components/Labourcard1";
import Udidcard1 from "./Components/Udidcard1";
import Eshramcard1 from "./Components/Eshramcard1";
import Aayushmancard1 from "./Components/Aayushmancard1";
import Registrastionsuccessfully from "./Components/Registrastionsuccessfully";
import Profile2 from "./Components/Profile2";
import List from "./Components/List";
import List2 from "./Components/List2";
import Forgotpassword from "./Components/Forgotpassword";
import Pancardcorrection from "./Components/Pancardcorrection";
import Pancardcorrections1 from "./Components/Pancardcorrections1";
import Uprationcard1 from "./Components/Uprationcard1";
import Uprationcard from "./Components/Uprationcard";
import Aadharcard from "./Components/Aadharcard";
import Aadharcard1 from "./Components/Aadharcard1";
import Policerverifcation from "./Components/Policerverifcation";
import Fir from "./Components/Fir";
import Lostreport from "./Components/Lostreport";
import Policeverification1 from "./Components/Policeverification1";
import Fir1 from "./Components/Fir1";
import Lostreport1 from "./Components/Lostreport1";
import Pfwithdraw from "./Components/Pfwithdraw";
import Pfkyc from "./Components/Pfkyc";
import Pfnomination from "./Components/Pfnomination";
import Midtransfer from "./Components/Midtransfer";
import Pfwithdraw1 from "./Components/Pfwithdraw1";
import Pfkyc1 from "./Components/Pfkyc1";
import Midtransfer1 from "./Components/Midtransfer1";
import Pfnomination1 from "./Components/Pfnomination1";
import Income from "./Components/Income";
import Domicile from "./Components/Domicile";
import Cast from "./Components/Cast";
import Income1 from "./Components/Income1";
import Domicile1 from "./Components/Domicile1";
import Cast1 from "./Components/Cast1";
import Aayushmancardaddresschange1 from "./Components/Aayushmancardaddresschange1";
import Aayushmancardaddresschange from "./Components/Aayushmancardaddresschange";
import Listdetails from "./Components/Listdetails";
import Other from "./Components/Other";
import Other1 from "./Components/Other1";
import Listdetails2 from "./Components/Listdetails2";
import Msme from "./Components/Msme";
import Foodlicense from "./Components/Foodlicense";
import Tatkalpassport from "./Components/Tatkalpassport";
import Freshpassport from "./Components/Freshpassport";
import Renewal from "./Components/Renewal";
import Railwayticket from "./Components/Railwayticket";
import Msme1 from "./Components/Msme1";
import Foodlicense1 from "./Components/Foodlicense1";
import Freshpassport1 from "./Components/Freshpassport1";
import Tatkalpassport1 from "./Components/Tatkalpassport1";
import Renewal1 from "./Components/Renewal1";
import Railwayticket1 from "./Components/Railwayticket1";
import Insurance1 from "./Components/Insurance1";
import Query from "./Components/Query";
import Query1 from "./Components/Query1";
import Payment2 from "./Components/Payment2";
function App() {
  return (
    <div>
      <IdleTimeout/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/newregistration" element={<Newregistration />}></Route>
        <Route path="/knowstatus" element={<Knowstatus />}></Route>

        <Route path="/continuereg" element={<Continuereg />}></Route>
        <Route path="/howtoregister" element={<Howtoregister />}></Route>
        <Route path="/egovernance" element={<Egovernance />}></Route>

        <Route path="/banking" element={<Banking />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        <Route path="/insurance" element={<Insurance />}></Route>
        <Route path="/elearning" element={<Elearning />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/query" element={<Query />}></Route>
        <Route path="/query1" element={<Query1 />}></Route>

        <Route
          path="/registrastionsuccessfully"
          element={<Registrastionsuccessfully />}
        ></Route>

        <Route path="/entertainment" element={<Entertainment />}></Route>

        <Route path="/earnmore" element={<Earnmore />}></Route>

        <Route path="/servicedetails" element={<Servicedetails />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/myservice" element={<Myservice />}></Route>
        <Route path="/mybooking" element={<Mybooking />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/avilablity" element={<Avilablity />}></Route>
        <Route path="/freaturedmember" element={<Freaturedmember />}></Route>

        <Route path="/teammembers" element={<Teammembers />}></Route>

        <Route path="/businesshour" element={<Businesshour />}></Route>

        <Route path="/uploadidentity" element={<Uploadidentity />}></Route>

        <Route path="/upgradeaccount" element={<Upgradeaccount />}></Route>
        <Route path="/changepassword" element={<Changepassword />}></Route>
        <Route path="/allservices" element={<Allservices />}></Route>
        <Route path="/training" element={<Training />}></Route>
        <Route
          path="/commissionstructure"
          element={<Commissionstructure />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/regform" element={<Regform />}></Route>

        <Route path="/document" element={<Document />}></Route>

        <Route path="/driver" element={<Driver />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/cscrecharge" element={<Cscrecharge />}></Route>

        <Route path="/recharge" element={<Recharge />}></Route>
        <Route path="/dashboard2" element={<Dashboard2 />}></Route>
        <Route path="/allservices2" element={<Allservices2 />}></Route>
        <Route path="/driver2" element={<Driver2 />}></Route>
        <Route path="/document2" element={<Document2 />}></Route>
        <Route path="/profile2" element={<Profile2 />}></Route>
        <Route path="/regform2" element={<Regform2 />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/listdetails" element={<Listdetails />}></Route>
        <Route path="/other" element={<Other />}></Route>
        <Route path="/other1" element={<Other1 />}></Route>
        <Route path="/pancardform" element={<Pancardform />}></Route>
        <Route path="/voteridcard" element={<Voteridcard />}></Route>
        <Route path="/labourcard" element={<Labourcard />}></Route>
        <Route path="/udidcard" element={<Udidcard />}></Route>
        <Route path="/msme" element={<Msme />}></Route>
        <Route path="/msme1" element={<Msme1 />}></Route>
        <Route path="/foodlicense" element={<Foodlicense />}></Route>
        <Route path="/foodlicense1" element={<Foodlicense1 />}></Route>
        <Route path="/tatkalpassport" element={<Tatkalpassport />}></Route>
        <Route path="/tatkalpassport1" element={<Tatkalpassport1 />}></Route>
        <Route path="/freshpassport" element={<Freshpassport />}></Route>
        <Route path="/freshpassport1" element={<Freshpassport1 />}></Route>
        <Route path="/renewal" element={<Renewal />}></Route>
        <Route path="/renewal1" element={<Renewal1 />}></Route>
        <Route path="/railwayticket" element={<Railwayticket />}></Route>
        <Route path="/railwayticket1" element={<Railwayticket1 />}></Route>
        <Route path="/insurance" element={<Insurance />}></Route>
        <Route path="/insurance1" element={<Insurance1 />}></Route>

        <Route path="/eshramcard" element={<Eshramcard />}></Route>

        <Route path="/aayushmancard" element={<Aayushmancard />}></Route>

        <Route path="/pancardform1" element={<Pancardform1 />}></Route>
        <Route path="/voteridcard1" element={<Voteridcard1 />}></Route>
        <Route path="/listdetails2" element={<Listdetails2 />}></Route>
        <Route path="/labourcard1" element={<Labourcard1 />}></Route>
        <Route path="/udidcard1" element={<Udidcard1 />}></Route>
        <Route
          path="/pancardcorrection"
          element={<Pancardcorrection />}
        ></Route>
        <Route
          path="/pancardcorrections1"
          element={<Pancardcorrections1 />}
        ></Route>
        <Route path="/uprationcard1" element={<Uprationcard1 />}></Route>
        <Route path="/uprationcard" element={<Uprationcard />}></Route>
        <Route path="/aadharcard" element={<Aadharcard />}></Route>
        <Route path="/aadharcard1" element={<Aadharcard1 />}></Route>
        <Route
          path="/policeverification"
          element={<Policerverifcation />}
        ></Route>
        <Route
          path="/policeverification1"
          element={<Policeverification1 />}
        ></Route>
        <Route path="/fir" element={<Fir />}></Route>
        <Route path="/fir1" element={<Fir1 />}></Route>
        <Route path="/lostreport" element={<Lostreport />}></Route>
        <Route path="/lostreport1" element={<Lostreport1 />}></Route>

        <Route path="/pfwithdraw" element={<Pfwithdraw />}></Route>
        <Route path="/pfwithdraw1" element={<Pfwithdraw1 />}></Route>
        <Route path="/pfkyc" element={<Pfkyc />}></Route>
        <Route path="/pfkyc1" element={<Pfkyc1 />}></Route>
        <Route path="/pfnomination" element={<Pfnomination />}></Route>
        <Route path="/pfnomination1" element={<Pfnomination1 />}></Route>
        <Route path="/midtransfer" element={<Midtransfer />}></Route>
        <Route path="/midtransfer1" element={<Midtransfer1 />}></Route>

        <Route path="/income" element={<Income />}></Route>
        <Route path="/income1" element={<Income1 />}></Route>
        <Route path="/domicile" element={<Domicile />}></Route>
        <Route path="/domicile1" element={<Domicile1 />}></Route>
        <Route path="/cast" element={<Cast />}></Route>
        <Route path="/cast1" element={<Cast1 />}></Route>
        <Route path="/payment2" element={<Payment2 />}></Route>

        <Route
          path="/aayushmancardaddresschange1"
          element={<Aayushmancardaddresschange1 />}
        ></Route>
        <Route
          path="/aayushmancardaddresschange"
          element={<Aayushmancardaddresschange />}
        ></Route>

        <Route path="/eshramcard1" element={<Eshramcard1 />}></Route>

        <Route path="/aayushmancard1" element={<Aayushmancard1 />}></Route>
        <Route path="/list2" element={<List2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
