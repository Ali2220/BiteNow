import React, { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
const Success = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
        {loading ? (
          <CircleLoader />
        ) : (
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Order Successful!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for shopping with us. We hope to see you again soon!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
