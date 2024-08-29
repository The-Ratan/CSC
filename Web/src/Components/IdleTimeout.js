import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const IdleTimeout = ({ timeoutInMinutes = 2, reminderInMinutes = 1 }) => {
  const navigate = useNavigate();
  const [isTimedOut, setTimedOut] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timeoutInMinutes * 60);
  const [showReminder, setShowReminder] = useState(false);

  let timeoutId;

  const resetTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setTimedOut(true);
      navigate("/");
    }, timeoutInMinutes * 60 * 10000);
  };

  const showAlert = () => {
    if (remainingTime <= 60 && !showReminder) {
      setShowReminder(true);
      alert(
        `Your session will expire in less than 1 minute. Please refresh the page.`
      );
    }
  };

  useEffect(() => {
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    const resetTimeoutHandler = () => {
      resetTimeout();
      showAlert();
    };

    for (const event of events) {
      document.addEventListener(event, resetTimeoutHandler);
    }

    resetTimeout();

    return () => {
      for (const event of events) {
        document.removeEventListener(event, resetTimeoutHandler);
      }
    };
  }, [timeoutInMinutes]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

 



if (isTimedOut) {
  secureLocalStorage.removeItem("operatorid");
  secureLocalStorage.removeItem("otpid");
  secureLocalStorage.removeItem("otptoken");
  secureLocalStorage.removeItem("operatortoken");

  
  window.location.reload();
  navigate('/');  
}


  return (
    <div>
      {showReminder && (
        <p>
          Remaining Time: {Math.ceil(remainingTime / 60)} minutes. Please
          refresh the page.
        </p>
      )}
    </div>
  );
};

export default IdleTimeout;














// import React, { useState, useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// const IdleTimeout = ({ timeoutInMinutes = 5 }) => {
//   const navigate = useNavigate();
//   const [isTimedOut, setTimedOut] = useState(false);

//   let timeoutId;

//   const resetTimeout = () => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       setTimedOut(true);
      
//       navigate("/");
//     }, timeoutInMinutes * 60 * 1000);
//   };

//   useEffect(() => {
//     const events = ["mousedown", "keydown", "scroll", "touchstart"];
//     const resetTimeoutHandler = () => resetTimeout();

//     for (const event of events) {
//       document.addEventListener(event, resetTimeoutHandler);
//     }

//     resetTimeout();

//     return () => {
//       for (const event of events) {
//         document.removeEventListener(event, resetTimeoutHandler);
//       }
//     };
//   }, []);

//   if (isTimedOut) {

//     return <Navigate to="/" />;
//   }

//   return null;
// };

// export default IdleTimeout;
