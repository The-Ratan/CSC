import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import secureLocalStorage from "react-secure-storage";
const Adminpancarddetails = () => {
  const [pancard, setPancard] = useState();
  let id = secureLocalStorage.getItem("pancardid");

  useEffect(() => {
    deletepancard();
  }, []);

  const deletepancard = () => {
    const userData = {
      _id: id,
    };

    axios
      .post("http://103.104.74.215:3099/admin/get_single_pancard_data", userData)
      .then((res) => {
        setPancard(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const downloadImage = (imageUrl, imageName) => {
    axios({
      url: imageUrl,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imageName);
      document.body.appendChild(link);
      link.click();
    });
  };

  
  return (
    <>
      <Header />

      {/* ... (other JSX code) */}

      <div className="col-md-4">
        <div className="form-group">
          <label>Aadhar Image</label>
          <a
            href={`http://103.104.74.215:3099/uploads/${pancard?.aadhar_img}`}
            onClick={() =>
              downloadImage(
                `http://103.104.74.215:3099/uploads/${pancard?.aadhar_img}`,
                `Aadhar_Image_${pancard?._id}.png`
              )
            }
          >
            Download
          </a>{" "}
          <img
            disabled
            src={`http://103.104.74.215:3099/uploads/${pancard?.aadhar_img}`}
            height={300}
            width={300}
          />
        </div>
      </div>

      {/* ... (other JSX code) */}
    </>
  );
};

export default Adminpancarddetails;
