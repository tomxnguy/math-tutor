import { useState } from "react";
import InputSquare from "./InputSquare";

export type MultiplicationStepsProps = {
  num1: number;
  num2: number;
};

export default function MultiplicationSteps({
  num1,
  num2,
}: MultiplicationStepsProps) {
  const [flashingCarryIndex, setFlashingCarryIndex] = useState<number | null>(
    null
  );
  const [flashingOnesIndex, setFlashingOnesIndex] = useState<number | null>(
    null
  );
  const [flashingTensIndex, setFlashingTensIndex] = useState<number | null>(
    null
  );

  function handleInputClick(index: number, row: "carry" | "ones" | "tens") {
    if (row === "carry") {
      setFlashingCarryIndex(index);
      setTimeout(() => setFlashingCarryIndex(null), 500);
    } else if (row === "ones") {
      setFlashingOnesIndex(index);
      setTimeout(() => setFlashingOnesIndex(null), 500);
    } else {
      setFlashingTensIndex(index);
      setTimeout(() => setFlashingTensIndex(null), 500);
    }
  }

  const num1Digits = num1.toString().split("");
  const onesDigit = num2 % 10;
  const onesResult = num1 * onesDigit;
  const onesResultsDigits = onesResult.toString().padStart(4, "0").split("");

  const tensDigit = Math.floor(num2 / 10);
  const tensResult = num1 * tensDigit;
  const tensResultsDigits = tensResult.toString().padStart(5, "0").split("");

  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 text-8xl font-mono">
        {/* InputSquares to help the user keep count of the carried numbers */}
        <div className="flex flex-col items-end">
          <div className="flex space-x-2 mb-2">
            {num1Digits.map((_, index) => (
              <InputSquare
                key={index}
                onClick={() => handleInputClick(index, "carry")}
                isFlashing={flashingCarryIndex === index}
              />
            ))}
          </div>

          <div>{num1}</div>
          <div className="flex border-b-8 justify-between">
            <div className="pr-12">&times;</div>
            <div>{num2}</div>
          </div>
        </div>

        {/* Ones Multiplication */}
        <div className="flex justify-end space-x-2 mt-4">
          {onesResultsDigits.map((_, index) => (
            <InputSquare
              key={index}
              onClick={() => handleInputClick(index, "ones")}
              isFlashing={flashingOnesIndex === index}
            />
          ))}
        </div>

        {/*Tens Multiplication*/}
        <div className="flex space-x-2 border-b-8 pb-4 justify-end mt-4">
          {tensResultsDigits.map((digit, index) => (
            <InputSquare
              key={index}
              onClick={() => handleInputClick(index, "tens")}
              isFlashing={flashingTensIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
