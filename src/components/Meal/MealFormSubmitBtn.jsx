"use client";
import { useFormStatus } from "react-dom";
const MealFormSubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealFormSubmitBtn;
