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
  const [isFlashing, setIsFlashing] = useState<number | null>(null);

  function handleInputClick(index: number) {
    if (isFlashing === index) {
      setIsFlashing(null);
    } else {
      setIsFlashing(index);
      setTimeout(() => setIsFlashing(null), 500);
    }
  }

  const num1Digits = num1.toString().split("");

  return (
    <div className="flex flex-col items-center">
      <div className="mt-20 text-8xl font-mono">
        {/* Numbers that are being multiplied will show here */}
        <div className="flex flex-col items-end">
          <div className="flex space-x-2 mb-2">
            {num1Digits.map((_, index) => (
              <InputSquare
                key={index}
                onClick={() => handleInputClick(index)}
                isFlashing={isFlashing === index}
              />
            ))}
          </div>

          <div>{num1}</div>
          <div className="flex border-b-8 justify-between">
            <div className="pr-12">&times;</div>
            <div>{num2}</div>
          </div>
        </div>

        {/*Ones Multiplication*/}
      </div>
    </div>
  );
}
