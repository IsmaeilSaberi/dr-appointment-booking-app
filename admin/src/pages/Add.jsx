import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Doctor name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Description about doctor</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Doctor speciality</p>
          <select className="w-full px-3 py-2">
            <option value="General Physician">General Physician</option>
            <option value="Internal">Internal</option>
            <option value="Digestion">Digestion</option>
            <option value="Dietition">Dietition</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Appointment booking price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="50"
          />
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </form>
  );
};

export default Add;
