import React from "react";

function AppIntro() {
  return (
    <div className='bg-gray-100'>
      <div className="bg-gray-100 flex mx-28">
        <img
          src="https://statics.olx.in/external/base/img/phone-app.webp"
          alt="Phone"
          className="pl-20"
        />
        <div className="px-5 border-r-2 border-gray-400 my-8">
          <h1 className="uppercase text-3xl font-bold mb-5">Try the OLX App</h1>
          <p className="text-xl">
            Buy, sell and find just about anything using<br></br> the app on
            your mobile.
          </p>
        </div>
        <div className="p-8">
          <p className="uppercase text-sm font-bold pt-7 pb-4">
            Get your app today
          </p>
          <div className="flex gap-1">
            <img
              src="https://statics.olx.in/external/base/img/appstore_2x.webp"
              alt="App Store"
              className="w-1/3"
            />
            <img
              src="https://statics.olx.in/external/base/img/playstore_2x.webp"
              alt="App Store"
              className="w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppIntro;
