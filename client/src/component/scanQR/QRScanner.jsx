import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

function QRScanner() {
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("Scanned QR:", decodedText);

        alert(`QR Scanned Successfully\n${decodedText}`);

        scanner.clear().catch(() => {});
      },
      (error) => {
        // Ignore scan errors
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
      {/* Header */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Scan QR Code
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Back
        </button>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 w-full max-w-2xl">
        <p className="text-gray-700 text-center">
          Place the restaurant QR code inside the scanner box.
        </p>
      </div>

      {/* QR Scanner */}
      <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-2xl">
        <div id="reader"></div>
      </div>

      {/* Info Section */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-4 w-full max-w-2xl">
        <h2 className="font-semibold text-lg mb-2">
          Instructions
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Allow camera permission when prompted.</li>
          <li>Point your camera towards the restaurant QR code.</li>
          <li>Keep the QR code inside the scan box.</li>
          <li>Once detected, the QR data will be displayed.</li>
        </ul>
      </div>

    </div>
  );
}

export default QRScanner;