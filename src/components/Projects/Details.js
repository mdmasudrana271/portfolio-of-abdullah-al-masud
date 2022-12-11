import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Details = () => {
  const data = useLoaderData()[0];
  console.log(data);
  return (
    <div>
      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
            <PhotoProvider>
              <PhotoView src={data.img1}>
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={data.img1}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={data.img2}>
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={data.img2}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={data.img3}>
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={data.img3}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </section>
      <section className="py-6 bg-accent dark:text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Features
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            {data.description}
          </p>
          <h1 className="text-5xl font-bold leading-none text-center">
            Technologies used in this project
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            {data.tech}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Details;
