"use client";

import { MdGrain } from "react-icons/md";

const GrainDivider = () => {
  return (
    <div className="flex justify-center items-center gap-4 text-gray-500/40 py-12">
      <div className="h-px w-32 bg-current"></div>
      <span className="scale-150">
        <MdGrain />
      </span>
      <div className="h-px w-32 bg-current"></div>
    </div>
  );
};

export default GrainDivider;
