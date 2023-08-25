import React, { useEffect, useState } from "react";
import downloadIcon from "../../icons/download.webp";
import timeIcon from "../../icons/time.webp";

import Speedmeter from "../../components/speedmeter1/Speedmeter";

import { useNavigate } from "react-router-dom";

function Home() {

  const [downloadNumber, setDownloadNumber] = useState(0);
  const [uploadNumber, setUploadNumber] = useState(0);
  const [pingNumber, setPingNumber] = useState(0);
  const [switchNum, setSwitchNum] = useState(false);
  const [completedTest, setCompletedTest] = useState(false);

  const navigate = useNavigate();

  const testing = () => {
    setSwitchNum(false);
    setCompletedTest(false);
    setDownloadNumber(0);
    setUploadNumber(0);
    setPingNumber(0);

    const donwloadTimer = setInterval(() => {
      setDownloadNumber((prev) => Math.round(prev + 1));
    }, 10);

    setTimeout(() => {
      clearInterval(donwloadTimer);
    }, 800);

    setTimeout(() => {
      setSwitchNum(true);
      const uploadTimer = setInterval(() => {
        setUploadNumber((prev) => Math.round(prev + 1));
      }, 10);

      setTimeout(() => {
        clearInterval(uploadTimer);
      }, 100);
    }, 2000);

    setTimeout(() => {
      setPingNumber(Math.round(Math.random() * 100));
      setCompletedTest(true);
    }, 3000);

    setTimeout(() => {
      navigate("/React-SpeedTest-Project/result");
    }, 4000);
  };

  useEffect(() => {
    if (completedTest) {
      localStorage.setItem("download", JSON.stringify(downloadNumber));
      localStorage.setItem("upload", JSON.stringify(uploadNumber));
      localStorage.setItem("ping", JSON.stringify(pingNumber));
    }
  }, [completedTest]);

  return (
    <div className="grid justify-center items-center gap-10 relative">
      <h1 className="text-slate-400 text-center text-4xl font-bold">
        تست سرعت اینترنت
      </h1>
      <div
        className="border border-slate-300 px-6 py-2 divide-x  rounded-3xl grid  grid-cols-3"
        dir="ltr"
      >
        <div className="flex flex-col gap-2 items-center" dir="rtl">
          <span className="text-center text-slate-400 font-light">
            سرعت دانلود
          </span>
          <div className="flex gap-3 font-sans">
            <span
              className={`font-semibold text-lg ${
                downloadNumber ? "text-slate-600" : "text-slate-400"
              } `}
              dir="ltr"
            >
              {downloadNumber ? downloadNumber : "--"}
              <span>Mbps</span>
            </span>
            <img
              src={downloadIcon}
              className={`rounded-lg p-1 w-7 ${
                downloadNumber ? "bg-red-400" : "bg-red-300"
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2  items-center  px-12" dir="rtl">
          <span className="text-center text-slate-400 font-light">
            سرعت آپلود
          </span>
          <div className="flex gap-3 font-sans">
            <span
              className={`font-semibold text-lg ${
                uploadNumber ? "text-slate-600" : "text-slate-400"
              } `}
              dir="ltr"
            >
              {uploadNumber ? uploadNumber : "--"}
              <span>Mbps</span>
            </span>
            <img
              src={downloadIcon}
              className={`rounded-lg p-1 rotate-180 w-7 ${
                uploadNumber ? "bg-blue-400" : "bg-blue-300"
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center" dir="rtl">
          <span className="text-center text-slate-400 font-light">پینگ</span>
          <div className="flex gap-3 font-sans">
            <span
              className={`font-semibold text-lg ${
                pingNumber ? "text-slate-600" : "text-slate-400"
              } `}
              dir="ltr"
            >
              {pingNumber ? pingNumber : "--"}
              <span>ms</span>
            </span>
            <img
              src={timeIcon}
              className={`rounded-lg p-1 w-7 ${
                pingNumber ? "bg-amber-600" : "bg-amber-500"
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
      <Speedmeter
        downloadNumber={downloadNumber}
        uploadNumber={uploadNumber}
        switchNum={switchNum}
      />
      {switchNum ? (
        <div className="flex gap-3 font-sans absolute bottom-24 left-0 right-0 mx-auto items-center justify-center">
          <span
            className={`font-semibold text-lg ${
              uploadNumber ? "text-slate-600" : "text-slate-400"
            } `}
          >
            <span>Mbps</span>
          </span>
          <img
            src={downloadIcon}
            className={`rounded-lg p-1 w-7 rotate-180 ${
              uploadNumber ? "bg-blue-400" : "bg-blue-300"
            }`}
            alt=""
          />
        </div>
      ) : (
        <div className="flex gap-3 font-sans absolute bottom-24 left-0 right-0 mx-auto items-center justify-center">
          <span
            className={`font-semibold text-lg ${
              downloadNumber ? "text-slate-600" : "text-slate-400"
            } `}
          >
            <span>Mbps</span>
          </span>
          <img
            src={downloadIcon}
            className={`rounded-lg p-1 w-7 ${
              downloadNumber ? "bg-red-400" : "bg-red-300"
            }`}
            alt=""
          />
        </div>
      )}

      <button
        className={`px-8 py-4 z-10 ${
          downloadNumber ? "bg-blue-400" : "bg-blue-600"
        } hover:bg-blue-700 transition-colors delay-50 w-max text-white mx-auto text-2xl rounded-2xl`}
        onClick={testing}
      >
        {downloadNumber ? "شروع مجدد" : "شروع تست"}
      </button>

    </div>
  );
}

export default Home;
