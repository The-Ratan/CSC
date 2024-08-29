import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Supportchet from "./Components/Supportchet";
import Deashboard from "./Components/Deashboard";
import Profile from "./Components/Profile";
import Userlogin from "./Components/Userlogin";
import Services from "./Components/Services";
import Serviceslist from "./Components/Serviceslist";
import Addservices from "./Components/Addservices";
import Admin_login from "./Components/Admin_login";
import Op_login from "./Components/Oparaterlogin/Op_login";
import OpHeader from "./Components/Oparaterlogin/OpHeader";
import OpDeashboard from "./Components/Oparaterlogin/OpDeashboard";
import OpProfile from "./Components/Oparaterlogin/OpProfile";
import OpServiceslist from "./Components/Oparaterlogin/OpServiceslist";
import OpSupportchet from "./Components/Oparaterlogin/OpSupportchet";
import Payment from "./Components/Payment";
import Alloperator from "./Components/Alloperator";
import Opservices from "./Components/Oparaterlogin/Opservices";
import LoginuserOTP from "./Components/LoginuserOTP";
import Pancard from "./Components/Servicesfrom/Pancard";
import Adminpancard from "./Components/Servicesfrom/Adminpancard";
import Adminvoteridcard from "./Components/Servicesfrom/Adminvoteridcard";
import Adminlabourcard from "./Components/Servicesfrom/Adminlabourcard";
import Adminudidcard from "./Components/Servicesfrom/Adminudidcard";
import Adminayushmancard from "./Components/Servicesfrom/Adminayushmancard";
import Admineshramcard from "./Components/Servicesfrom/Admineshramcard";
import Admincreatesubadmin from "./Components/Servicesfrom/Admincreatesubadmin";
import Admingetcontact from "./Components/Servicesfrom/Admingetcontact";
import Admingetquestion from "./Components/Servicesfrom/Admingetquestion";
import Opservicelistpancard from "./Components/Oparaterlogin/Opservicelistpancard";
import Opservicelistvoterid from "./Components/Oparaterlogin/Opservicelistvoterid";
import Opservicelisteshram from "./Components/Oparaterlogin/Opservicelisteshram";
import Opservicelistayushman from "./Components/Oparaterlogin/Opservicelistayushman";
import Opservicelistlabour from "./Components/Oparaterlogin/Opservicelistlabour";
import Opservicelistudid from "./Components/Oparaterlogin/Opservicelistudid";
import Adminpancarddetails from "./Components/Servicesfrom/Adminpancarddetails";
import Adminvotercarddetails from "./Components/Servicesfrom/Adminvotercarddetails";
import Adminlabourdetails from "./Components/Servicesfrom/Adminlabourdetails";
import Adminudidcarddetails from "./Components/Servicesfrom/Adminudidcarddetails";
import Adminayushmancarddetails from "./Components/Servicesfrom/Adminayushmancarddetails";
import Admineshramcarddetails from "./Components/Servicesfrom/Admineshramcarddetails";
import Oppandetails from "./Components/Oparaterlogin/Oppandetails";
import Opudiddetails from "./Components/Oparaterlogin/Opudiddetails";
import Opeshramdetails from "./Components/Oparaterlogin/Opeshramdetails";
import Oplabourdetails from "./Components/Oparaterlogin/Oplabourdetails";
import Opvoterdetails from "./Components/Oparaterlogin/Opvoterdetails";
import Opayushmandetails from "./Components/Oparaterlogin/Opayushmandetails";
import Adminuserdetails from "./Components/Servicesfrom/Adminuserdetails";
import Op_forgotpassword from "./Components/Oparaterlogin/Op_forgotpassword";
import Adminincome from "./Components/Servicesfrom/Adminincome";
import Admindomicile from "./Components/Servicesfrom/Admindomicile";
import Admincast from "./Components/Servicesfrom/Admincast";
import Adminpfwithdraw from "./Components/Servicesfrom/Adminpfwithdraw";
import Adminpfkyc from "./Components/Servicesfrom/Adminpfkyc";
import Adminpfnomination from "./Components/Servicesfrom/Adminpfnomination";
import Adminmidtransfer from "./Components/Servicesfrom/Adminmidtransfer";
import Adminpoliceverification from "./Components/Servicesfrom/Adminpoliceverification";
import Adminfir from "./Components/Servicesfrom/Adminfir";
import Adminlostreport from "./Components/Servicesfrom/Adminlostreport";
import Adminaadharaddress from "./Components/Servicesfrom/Adminaadharaddress";
import Adminaayushmanaddress from "./Components/Servicesfrom/Adminaayushmanaddress";
import Adminuprationcard from "./Components/Servicesfrom/Adminuprationcard";
import Adminsingleincome from "./Components/Servicesfrom/Adminsingleincome";
import Adminsignledomicile from "./Components/Servicesfrom/Adminsignledomicile";
import Admisinglecast from "./Components/Servicesfrom/Admisinglecast";
import Adminsinglepfwithdraw from "./Components/Servicesfrom/Adminsinglepfwithdraw";
import Adminsinglepfkyc from "./Components/Servicesfrom/Adminsinglepfkyc";
import Adminsinglepfnomination from "./Components/Servicesfrom/Adminsinglepfnomination";
import Adminsinglepfmidtransfer from "./Components/Servicesfrom/Adminsinglepfmidtransfer";
import Adminsinglepolice from "./Components/Servicesfrom/Adminsinglepolice";
import Adminsinglefir from "./Components/Servicesfrom/Adminsinglefir";
import Adminsinglelostreport from "./Components/Servicesfrom/Adminsinglelostreport";
import Adminsingleaadhar from "./Components/Servicesfrom/Adminsingleaadhar";
import Adminsingleaayushman from "./Components/Servicesfrom/Adminsingleaayushman";
import Adminsingleupration from "./Components/Servicesfrom/Adminsingleupration";
import Opservicelistincome from "./Components/Oparaterlogin/Opservicelistincome";
import Opservicelistdomicile from "./Components/Oparaterlogin/Opservicelistdomicile";
import Opservicelistcast from "./Components/Oparaterlogin/Opservicelistcast";
import Opservicelistpfwithdraw from "./Components/Oparaterlogin/Opservicelistpfwithdraw";
import Opservicelistpfkyc from "./Components/Oparaterlogin/Opservicelistpfkyc";
import Opservicelistpfnomination from "./Components/Oparaterlogin/Opservicelistpfnomination";
import Opservicelistpfmidtransfer from "./Components/Oparaterlogin/Opservicelistpfmidtransfer";
import Opservicelistpoliceverification from "./Components/Oparaterlogin/Opservicelistpoliceverification";
import Opservicelistfir from "./Components/Oparaterlogin/Opservicelistfir";
import Opservicelistlostreport from "./Components/Oparaterlogin/Opservicelistlostreport";
import Opservicelistaadharaddress from "./Components/Oparaterlogin/Opservicelistaadharaddress";
import Opservicelistaayusman from "./Components/Oparaterlogin/Opservicelistaayusman";
import Opservicelistupration from "./Components/Oparaterlogin/Opservicelistupration";
import Adminpancardcorrection from "./Components/Servicesfrom/Adminpancardcorrection";
import Adminotherform from "./Components/Servicesfrom/Adminotherform";
import Adminsinglepancardcorrection from "./Components/Servicesfrom/Adminsinglepancardcorrection";
import Adminsingleotherform from "./Components/Servicesfrom/Adminsingleotherform";
import Opservicelistpancardcorrection from "./Components/Oparaterlogin/Opservicelistpancardcorrection";
import Opservicelistotherform from "./Components/Oparaterlogin/Opservicelistotherform";
import Opincomedetails from "./Components/Oparaterlogin/Opincomedetails";
import Opdomicile from "./Components/Oparaterlogin/Opdomicile";
import Opcast from "./Components/Oparaterlogin/Opcast";
import Oppfwithdraw from "./Components/Oparaterlogin/Oppfwithdraw";
import Oppfkyc from "./Components/Oparaterlogin/Oppfkyc";
import Oppfnomination from "./Components/Oparaterlogin/Oppfnomination";
import Opmidtransfer from "./Components/Oparaterlogin/Opmidtransfer";
import Oppoliceverification from "./Components/Oparaterlogin/Oppoliceverification";
import Opfir from "./Components/Oparaterlogin/Opfir";
import Oplostreport from "./Components/Oparaterlogin/Oplostreport";
import Opaadharaddress from "./Components/Oparaterlogin/Opaadharaddress";
import Opayusmanaddress from "./Components/Oparaterlogin/Opayusmanaddress";
import Opupration from "./Components/Oparaterlogin/Opupration";
import Oppancardcorrection from "./Components/Oparaterlogin/Oppancardcorrection";
import Opotherform from "./Components/Oparaterlogin/Opotherform";
import Adminmsme from "./Components/Servicesfrom/Adminmsme";
import Adminfoodlicense from "./Components/Servicesfrom/Adminfoodlicense";
import Adminfreshpassport from "./Components/Servicesfrom/Adminfreshpassport";
import Admintatkalpassport from "./Components/Servicesfrom/Admintatkalpassport";
import Adminrenewal from "./Components/Servicesfrom/Adminrenewal";
import Adminrailwayticket from "./Components/Servicesfrom/Adminrailwayticket";
import Admininsurance from "./Components/Servicesfrom/Admininsurance";
import Adminsinglemsme from "./Components/Servicesfrom/Adminsinglemsme";
import Adminsinglefoodlicense from "./Components/Servicesfrom/Adminsinglefoodlicense";
import Adminsinglefreshpassport from "./Components/Servicesfrom/Adminsinglefreshpassport";
import Adminsingletatkalpassport from "./Components/Servicesfrom/Adminsingletatkalpassport";
import Adminsinglerenewal from "./Components/Servicesfrom/Adminsinglerenewal";
import Adminsinglerailwayticket from "./Components/Servicesfrom/Adminsinglerailwayticket";
import Adminsingleinsurance from "./Components/Servicesfrom/Adminsingleinsurance";
import Opservicelistmsme from "./Components/Oparaterlogin/Opservicelistmsme";
import Opservicelistfoodlicense from "./Components/Oparaterlogin/Opservicelistfoodlicense";
import Opservicelistfreshpassport from "./Components/Oparaterlogin/Opservicelistfreshpassport";
import Opservicelisttatkalpassport from "./Components/Oparaterlogin/Opservicelisttatkalpassport";
import Opservicelistrenewal from "./Components/Oparaterlogin/Opservicelistrenewal";
import Opservicelistrailwayticket from "./Components/Oparaterlogin/Opservicelistrailwayticket";
import Opservicelistinsurance from "./Components/Oparaterlogin/Opservicelistinsurance";
import Opmsme from "./Components/Oparaterlogin/Opmsme";
import Opfoodlicense from "./Components/Oparaterlogin/Opfoodlicense";
import Opfreshpassport from "./Components/Oparaterlogin/Opfreshpassport";
import Optatkalpassport from "./Components/Oparaterlogin/Optatkalpassport";
import Oprenewal from "./Components/Oparaterlogin/Oprenewal";
import Oprailwayticket from "./Components/Oparaterlogin/Oprailwayticket";
import Opinsurance from "./Components/Oparaterlogin/Opinsurance";
import Admingetquery from "./Components/Servicesfrom/Admingetquery";
import Adminsinglequery from "./Components/Servicesfrom/Adminsinglequery";
import Paymentupdate from "./Components/Servicesfrom/Paymentupdate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Admin_login />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/deashboard" element={<Deashboard />}></Route>
          <Route path="/support" element={<Supportchet />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/userlogin" element={<Userlogin />}></Route>
          <Route path="/userloginotp" element={<LoginuserOTP />}></Route>
          <Route path="/alloperator" element={<Alloperator />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/addservices" element={<Addservices />}></Route>
          <Route path="/listservices" element={<Serviceslist />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/adminpancard" element={<Adminpancard />}></Route>
          <Route
            path="/adminvoteridcard"
            element={<Adminvoteridcard />}
          ></Route>
          <Route path="/adminlabourcard" element={<Adminlabourcard />}></Route>
          <Route path="/adminudidcard" element={<Adminudidcard />}></Route>
          <Route
            path="/adminayushmancard"
            element={<Adminayushmancard />}
          ></Route>
          <Route path="/admineshramcard" element={<Admineshramcard />}></Route>
          <Route
            path="/admincreatesubadmin"
            element={<Admincreatesubadmin />}
          ></Route>
          <Route path="/admingetcontact" element={<Admingetcontact />}></Route>
          <Route
            path="/admingetquestion"
            element={<Admingetquestion />}
          ></Route>
          <Route
            path="/adminpancarddetails"
            element={<Adminpancarddetails />}
          ></Route>
          <Route
            path="/adminvotercarddetails"
            element={<Adminvotercarddetails />}
          ></Route>
          <Route
            path="/adminlabourdetails"
            element={<Adminlabourdetails />}
          ></Route>
          <Route
            path="/adminudidcarddetails"
            element={<Adminudidcarddetails />}
          ></Route>
          <Route
            path="/adminayushmancarddetails"
            element={<Adminayushmancarddetails />}
          ></Route>

          <Route
            path="/admineshramcarddetails"
            element={<Admineshramcarddetails />}
          ></Route>
          <Route
            path="/adminuserdetails"
            element={<Adminuserdetails />}
          ></Route>

          <Route path="/adminincome" element={<Adminincome />}></Route>
          <Route path="/admindomicile" element={<Admindomicile />}>
            {" "}
          </Route>
          <Route path="/admincast" element={<Admincast />}>
            {" "}
          </Route>
          <Route path="/adminpfwithdraw" element={<Adminpfwithdraw />}>
            {" "}
          </Route>
          <Route path="/adminpfkyc" element={<Adminpfkyc />}>
            {" "}
          </Route>
          <Route path="/adminpfnomination" element={<Adminpfnomination />}>
            {" "}
          </Route>
          <Route path="/adminpfmidtransfer" element={<Adminmidtransfer />}>
            {" "}
          </Route>
          <Route
            path="/adminpoliceverification"
            element={<Adminpoliceverification />}
          >
            {" "}
          </Route>
          <Route path="/adminfir" element={<Adminfir />}></Route>
          <Route path="/adminlostreport" element={<Adminlostreport />}></Route>
          <Route
            path="/adminpancardcorrection"
            element={<Adminpancardcorrection />}
          ></Route>
          <Route path="/adminotherform" element={<Adminotherform />}></Route>
          <Route path="/adminmsme" element={<Adminmsme />}></Route>
          <Route
            path="/adminfoodlicense"
            element={<Adminfoodlicense />}
          ></Route>
          <Route
            path="/adminfreshpassport"
            element={<Adminfreshpassport />}
          ></Route>
          <Route
            path="/admintatkalpassport"
            element={<Admintatkalpassport />}
          ></Route>
          <Route path="/adminrenewal" element={<Adminrenewal />}></Route>
          <Route
            path="/adminrailwayticket"
            element={<Adminrailwayticket />}
          ></Route>
          <Route path="/admininsurance" element={<Admininsurance />}></Route>

          <Route
            path="/adminaadharaddress"
            element={<Adminaadharaddress />}
          ></Route>
          <Route
            path="/adminaayushmanaddress"
            element={<Adminaayushmanaddress />}
          ></Route>
          <Route
            path="/adminuprationcard"
            element={<Adminuprationcard />}
          ></Route>
          <Route
            path="/adminsingleincome"
            element={<Adminsingleincome />}
          ></Route>
          <Route
            path="/adminsignledomicile"
            element={<Adminsignledomicile />}
          ></Route>
          <Route path="/admisinglecast" element={<Admisinglecast />}></Route>
          <Route
            path="/adminsinglepfwithdraw"
            element={<Adminsinglepfwithdraw />}
          ></Route>
          <Route
            path="/adminsinglepfkyc"
            element={<Adminsinglepfkyc />}
          ></Route>
          <Route
            path="/adminsinglepfnomination"
            element={<Adminsinglepfnomination />}
          ></Route>
          <Route
            path="/adminsinglepfmidtransfer"
            element={<Adminsinglepfmidtransfer />}
          ></Route>
          <Route
            path="/adminsinglepolice"
            element={<Adminsinglepolice />}
          ></Route>
          <Route path="/adminsinglefir" element={<Adminsinglefir />}></Route>
          <Route
            path="/adminsinglelostreport"
            element={<Adminsinglelostreport />}
          ></Route>
          <Route
            path="/adminsingleaadhar"
            element={<Adminsingleaadhar />}
          ></Route>
          <Route
            path="/adminsingleaayushman"
            element={<Adminsingleaayushman />}
          ></Route>
          <Route
            path="/adminsingleupration"
            element={<Adminsingleupration />}
          ></Route>
          <Route
            path="/adminsinglepancardcorrection"
            element={<Adminsinglepancardcorrection />}
          ></Route>
          <Route
            path="/adminsingleotherform"
            element={<Adminsingleotherform />}
          ></Route>
          <Route path="/adminsinglemsme" element={<Adminsinglemsme />}></Route>
          <Route
            path="/adminsinglefoodlicense"
            element={<Adminsinglefoodlicense />}
          ></Route>
          <Route
            path="/adminsinglefreshpassport"
            element={<Adminsinglefreshpassport />}
          ></Route>
          <Route
            path="/adminsingletatkalpassport"
            element={<Adminsingletatkalpassport />}
          ></Route>
          <Route
            path="/adminsinglerenewal"
            element={<Adminsinglerenewal />}
          ></Route>
          <Route
            path="/adminsinglerailwayticket"
            element={<Adminsinglerailwayticket />}
          ></Route>
          <Route
            path="/adminsingleinsurance"
            element={<Adminsingleinsurance />}
          ></Route>



<Route
            path="/admingetquery"
            element={<Admingetquery />}
          ></Route>




<Route
            path="/paymentupdate"
            element={<Paymentupdate />}
          ></Route>

<Route
            path="/adminsinglequery"
            element={<Adminsinglequery />}
          ></Route>
          {/* operator login */}
          <Route path="/oplogin" element={<Op_login />}></Route>
          <Route path="/opheader" element={<OpHeader />}></Route>
          <Route path="/opdeashboard" element={<OpDeashboard />}></Route>
          <Route path="/opprofile" element={<OpProfile />}></Route>
          <Route path="/opservices" element={<Opservices />}></Route>
          <Route path="/oplistservices" element={<OpServiceslist />}></Route>
          <Route path="/opsupport" element={<OpSupportchet />}></Route>
          <Route
            path="/opservicelistpancard"
            element={<Opservicelistpancard />}
          ></Route>
          <Route
            path="/opservicelistvoterid"
            element={<Opservicelistvoterid />}
          ></Route>
          <Route
            path="/opservicelisteshram"
            element={<Opservicelisteshram />}
          ></Route>
          <Route
            path="/opservicelistayushman"
            element={<Opservicelistayushman />}
          ></Route>
          <Route
            path="/opservicelistlabour"
            element={<Opservicelistlabour />}
          ></Route>
          <Route
            path="/opservicelistudid"
            element={<Opservicelistudid />}
          ></Route>
          <Route
            path="/op_forgotpassword"
            element={<Op_forgotpassword />}
          ></Route>

          <Route
            path="/opservicelistincome"
            element={<Opservicelistincome />}
          ></Route>
          <Route
            path="/opservicelistdomicile"
            element={<Opservicelistdomicile />}
          ></Route>
          <Route
            path="/opservicelistcast"
            element={<Opservicelistcast />}
          ></Route>
          <Route
            path="/opservicelistpfwithdraw"
            element={<Opservicelistpfwithdraw />}
          ></Route>
          <Route
            path="/opservicelistpfkyc"
            element={<Opservicelistpfkyc />}
          ></Route>
          <Route
            path="/opservicelistpfnomination"
            element={<Opservicelistpfnomination />}
          ></Route>
          <Route
            path="/opservicelistpfmidtransfer"
            element={<Opservicelistpfmidtransfer />}
          ></Route>
          <Route
            path="/opservicelistpoliceverification"
            element={<Opservicelistpoliceverification />}
          ></Route>
          <Route
            path="/opservicelistfir"
            element={<Opservicelistfir />}
          ></Route>
          <Route
            path="/opservicelistlostreport"
            element={<Opservicelistlostreport />}
          ></Route>
          <Route
            path="/opservicelistaadharaddress"
            element={<Opservicelistaadharaddress />}
          ></Route>
          <Route
            path="/opservicelistaayusman"
            element={<Opservicelistaayusman />}
          ></Route>
          <Route
            path="/opservicelistupration"
            element={<Opservicelistupration />}
          ></Route>

          <Route
            path="/opservicelistpancardcorrection"
            element={<Opservicelistpancardcorrection />}
          ></Route>
          <Route
            path="/opservicelistotherform"
            element={<Opservicelistotherform />}
          ></Route>
          <Route
            path="/opservicelistmsme"
            element={<Opservicelistmsme />}
          ></Route>
          <Route
            path="/opservicelistfoodlicense"
            element={<Opservicelistfoodlicense />}
          ></Route>
          <Route
            path="/opservicelistfreshpassport"
            element={<Opservicelistfreshpassport />}
          ></Route>
          <Route
            path="/opservicelisttatkalpassport"
            element={<Opservicelisttatkalpassport />}
          ></Route>
          <Route
            path="/opservicelistrenewal"
            element={<Opservicelistrenewal />}
          ></Route>
          <Route
            path="/opservicelistrailwayticket"
            element={<Opservicelistrailwayticket />}
          ></Route>
          <Route
            path="/opservicelistinsurance"
            element={<Opservicelistinsurance />}
          ></Route>

          <Route path="/opincomedetails" element={<Opincomedetails />}></Route>
          <Route path="/opdomicile" element={<Opdomicile />}></Route>
          <Route path="/opcast" element={<Opcast />}></Route>
          <Route path="/oppfwithdraw" element={<Oppfwithdraw />}></Route>
          <Route path="/oppfkyc" element={<Oppfkyc />}></Route>
          <Route path="/oppfnomination" element={<Oppfnomination />}></Route>
          <Route path="/opmidtransfer" element={<Opmidtransfer />}></Route>
          <Route
            path="/oppoliceverification"
            element={<Oppoliceverification />}
          ></Route>
          <Route path="/opfir" element={<Opfir />}></Route>
          <Route path="/oplostreport" element={<Oplostreport />}></Route>
          <Route path="/opaadharaddress" element={<Opaadharaddress />}></Route>
          <Route
            path="/opayusmanaddress"
            element={<Opayusmanaddress />}
          ></Route>
          <Route path="/opupration" element={<Opupration />}></Route>
          <Route
            path="/oppancardcorrection"
            element={<Oppancardcorrection />}
          ></Route>
          <Route path="/opotherform" element={<Opotherform />}></Route>
          <Route path="/opmsme" element={<Opmsme />}></Route>
          <Route path="/opfoodlicense" element={<Opfoodlicense />}></Route>
          <Route path="/opfreshpassport" element={<Opfreshpassport />}></Route>
          <Route
            path="/optatkalpassport"
            element={<Optatkalpassport />}
          ></Route>
          <Route path="/oprenewal" element={<Oprenewal />}></Route>
          <Route path="/oprailwayticket" element={<Oprailwayticket />}></Route>
          <Route path="/opinsurance" element={<Opinsurance />}></Route>

          {/* formrouter */}
          <Route path="/pancardform" element={<Pancard />}></Route>

          <Route path="/oppandetails" element={<Oppandetails />}></Route>
          <Route path="/opudiddetails" element={<Opudiddetails />}></Route>
          <Route path="/opeshramdetails" element={<Opeshramdetails />}></Route>
          <Route path="/oplabourdetails" element={<Oplabourdetails />}></Route>
          <Route path="/opvoterdetails" element={<Opvoterdetails />}></Route>
          <Route
            path="/opayushmandetails"
            element={<Opayushmandetails />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
