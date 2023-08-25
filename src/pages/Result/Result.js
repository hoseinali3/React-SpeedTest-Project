import React, { useEffect, useState } from "react";
import downloadIcon from "../../icons/download.webp";
import timeIcon from "../../icons/time.webp";
import { Link } from "react-router-dom";

function Result() {
  const [downloadNumber, setDownloadNumber] = useState(0);
  const [uploadNumber, setUploadNumber] = useState(0);
  const [pingNumber, setPingNumber] = useState(0);

  const getNumberData = () => {
    const download = JSON.parse(localStorage.getItem("download"));
    const upload = JSON.parse(localStorage.getItem("upload"));
    const ping = JSON.parse(localStorage.getItem("ping"));

    setDownloadNumber(download);
    setUploadNumber(upload);
    setPingNumber(ping);
  };

  useEffect(() => {
    getNumberData();
  }, []);

  return (
    <div className="grid justify-center items-center gap-10 relative">
      <h1 className="text-slate-400 text-center text-4xl font-bold">
        تست سرعت اینترنت
      </h1>
      <div
        className="border border-slate-300  divide-y  rounded-3xl grid w-64 mx-auto grid-rows-3"
        dir="ltr"
      >
        <div className="flex flex-col gap-2 items-center justify-center" dir="rtl">
          <span className="text-center text-slate-400 font-light">
            سرعت دانلود
          </span>
          <div className="flex gap-3 font-sans">
            <span
              className={`font-semibold text-3xl ${
                downloadNumber ? "text-slate-600" : "text-slate-400"
              } `}
              dir="ltr"
            >
              {downloadNumber ? downloadNumber : "--"}
              <span>Mbps</span>
            </span>
            <img
              src={downloadIcon}
              className={`rounded-lg p-1 w-9 ${
                downloadNumber ? "bg-red-400" : "bg-red-300"
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2  items-center justify-center  py-7" dir="rtl">
          <span className="text-center text-slate-400 font-light">
            سرعت آپلود
          </span>
          <div className="flex gap-3 font-sans">
            <span
              className={`font-semibold text-3xl ${
                uploadNumber ? "text-slate-600" : "text-slate-400"
              } `}
              dir="ltr"
            >
              {uploadNumber ? uploadNumber : "--"}
              <span>Mbps</span>
            </span>
            <img
              src={downloadIcon}
              className={`rounded-lg p-1 rotate-180 w-9 ${
                uploadNumber ? "bg-blue-500" : "bg-blue-300"
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center" dir="rtl">
          <span className="text-center text-slate-400 font-light">پینگ</span>
          <div className="flex gap-3 font-sans">
            <span
              className={`font-semibold text-3xl ${
                pingNumber ? "text-slate-600" : "text-slate-400"
              } `}
              dir="ltr"
            >
              {pingNumber ? pingNumber : "--"}
              <span>ms</span>
            </span>
            <img
              src={timeIcon}
              className={`rounded-lg p-1 w-9 ${
                pingNumber ? "bg-amber-600" : "bg-amber-500"
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center z-10 gap-4 items-center">
        <Link to='/React-SpeedTest-Project' className="text-white text-xl bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-20 rounded-2xl delay-50">تست مجدد</Link>
        <button className="text-white text-xl bg-amber-600 hover:bg-amber-700 transition-colors py-3 px-6 rounded-2xl delay-50">اشتراک گذاری</button>
      </div>
    </div>
  );
}

export default Result;
