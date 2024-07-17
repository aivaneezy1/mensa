"use client";
import dynamic from "next/dynamic";

const Edit = dynamic(() => import("../components/Edit/Edit"), {
  ssr: false, // Disable server-side rendering for this component
});

const Editpage = () => {
  return (
    <Edit />
  );
};

export default Editpage;