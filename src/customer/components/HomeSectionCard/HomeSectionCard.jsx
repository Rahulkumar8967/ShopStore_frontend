import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/r/x/s-lione-white-marmic-fab-original-imagz2czf4uuahdy.jpeg?q=70"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Marmic Fab </h3>
        <p className="mt-2 text-sm text-gray-500">
          Men Slim Fit Self Design Spread Collar Casual Shirt
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard