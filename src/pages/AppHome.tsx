'use client';

import React from "react";
import Button from "@/components/Button";

const AppHome: React.FC = () => {
  const handleClick = () => {
    // alert("Button clicked!");
    console.log("button click")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Reusable Button Example</h1>
      <Button label="Click Me" onClick={handleClick} />
      <Button label="Disabled Button" disabled className="mt-4" />
      <Button label="Disabled Button" disabled className="mt-4" />
      <Button
        label="Custom Styled Button"
        className="mt-4 bg-green-500 hover:bg-green-600"
        onClick={() => console.log("Custom button clicked")}
      />
    </div>
  );
};

export default AppHome;
