"use client";

type Props = {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    required?: boolean;
    error?: string;
};

export default function Input({
    label,
    value,
    placeholder,
    onChange,
    required = false,
    error = "",
}: Props) {
    return (
        <div className="space-y-2">

            <label className="text-sm font-medium text-gray-700">
                {label}
                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            <input
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${error
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
            />

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}

        </div>
    );
}