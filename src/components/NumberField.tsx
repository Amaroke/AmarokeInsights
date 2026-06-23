import { useId, type FC } from "react";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  focusClass?: string;
}

const NumberField: FC<NumberFieldProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  focusClass = "focus:border-blue-400",
}) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gray-400 mb-1">
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={Number.isNaN(value) ? "" : value}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val === "" ? NaN : Number(val));
        }}
        className={`w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:outline-none ${focusClass}`}
      />
    </div>
  );
};

export default NumberField;
