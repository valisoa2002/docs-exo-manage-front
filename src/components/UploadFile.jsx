import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const UploadFile = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold  text-gray-700 text-2xl">Charger le fichier</h1>
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="file:p-8 w-1/2"
      />
      <button>Charger</button>

      <p>Uploaded Files</p>
    </div>
  );
};

export default UploadFile;
