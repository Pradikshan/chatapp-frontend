import React, { useState } from "react";

const LoginModal = () => {
  const [closeModal, setCloseModal] = useState<boolean>(true);
  return (
    <>
      {closeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[20%] flex flex-col">
            <p className="font-bold text-2xl text-center">Note</p>
            <p className=" text-center">
              If the app does not work as expected then this is due to the
              backend service not functioning because the instance has shutdown.{" "}
              <br />
              <br />
              Therefore, if you need to check the real-time chat functionalities
              of the application please do get the code from the github
              repository for this project{" "}
              <a
                href="https://github.com/Pradikshan/chatapp-frontend"
                className=" text-blue-400"
              >
                {" "}
                (link here)
              </a>{" "}
              and run the application on a local instance.
              <br /> Thank you.
            </p>

            <button
              className="mt-5 bg-black p-2 rounded-2xl text-white font-bold text-xl"
              onClick={() => setCloseModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
