import React, { useState, useEffect, useRef } from "react";
import { BiQrScan } from "react-icons/bi";
import jsQR from "jsqr";

function Scanner() {
  const [scannedCode, setScannedCode] = useState("");
  const [hasCamera, setHasCamera] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Check for camera access
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setHasCamera(true))
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }, []);

  const handleScan = () => {
    if (hasCamera) {
      setIsScanning(true);
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } }) // Use back camera if available
        .then((stream) => {
          video.srcObject = stream;
          video.play();

          intervalRef.current = setInterval(() => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, canvas.width, canvas.height);

            if (code) {
              setScannedCode(code.data);
              handleStopScan();
            }
          }, 300);
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }
  };

  const handleStopScan = () => {
    const video = videoRef.current;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (video && video.srcObject) {
      video.srcObject.getTracks().forEach((track) => track.stop());
      video.srcObject = null; // Ensure the video element releases the stream
    }

    setIsScanning(false);
  };

  return (
    <>
      <h1 className="text-3xl font-medium mt-6">Digital Menu - Scan and Order</h1>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-center mb-6">
          {!isScanning ? (
            <button
              className="w-40 h-40 border-4 border-slate-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-100 transition duration-300"
              onClick={handleScan}
            >
              <BiQrScan size={48} />
            </button>
          ) : (
            <button
              className="w-40 h-40 border-4 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:bg-red-100 transition duration-300"
              onClick={handleStopScan}
            >
              Stop Scanner
            </button>
          )}
        </div>

        <p className="text-center text-gray-500 mb-4">Scan the QR code on your table</p>

        {isScanning && (
          <div className="flex flex-col items-center">
            <video
              ref={videoRef}
              width="640"
              height="480"
              className="border-4 border-blue-300 rounded-lg shadow-lg"
            ></video>
            <canvas
              ref={canvasRef}
              width="640"
              height="480"
              className="hidden"
            ></canvas>
          </div>
        )}

        {scannedCode && (
          <div className="text-center mt-6">
            <p className="text-xl font-semibold text-green-600">QR Code Scanned: {scannedCode}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Scanner;
