import "../App.css";

export type InputSquareProps = {
  onClick: () => void;
  isFlashing: boolean;
};

export default function InputSquare({ onClick, isFlashing }: InputSquareProps) {
  function handleOneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const oneNumber = event.target.value;
    if (oneNumber.length > 1) {
      event.target.value = oneNumber.slice(0, 1);
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    const input = event.target;
    input.setSelectionRange(input.value.length, input.value.length);
  }

  return (
    <input
      type="number"
      max="9"
      min="0"
      className={`w-14 h-14 text-center border rounded ${
        isFlashing ? "bg-amber-200" : ""
      } text-3xl`}
      placeholder=""
      onClick={onClick}
      onChange={handleOneNumber}
      onFocus={handleFocus}
      style={{
        appearance: "none",
        userSelect: "none",
        cursor: "pointer",
      }}
    />
  );
}
