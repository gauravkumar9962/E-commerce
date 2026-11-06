
import React, { useState, useRef } from "react";
import "./OTPBox.css";
import Button from "@mui/material/Button";

const OTPBox = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move backward on Backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Move with arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const newOtp = [...otp];

    pasted.split("").forEach((digit, i) => {
      newOtp[i] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pasted.length, 5);
    inputRefs.current[nextIndex].focus();
  };

  const handleVerify = () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      alert("Please enter complete 6-digit OTP");
      return;
    }

    alert("OTP entered: " + otpValue);
    // Send OTP to your backend for verification
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <p className="text-center flex items-center justify-center">Enter the 6-digit OTP sent to your mobile number & Email.</p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="number"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>

       <div className="flex items-center justify-center !mt-5 !px-12">
            <Button type="submit" className="w-full btn-org btn-lg" onClick={handleVerify}>
                Verify
            </Button>
        </div>

        <p className="resend">
          Didn't receive OTP? <span>Resend OTP</span>
        </p>
      </div>
    </div>
  );
};

export default OTPBox;
