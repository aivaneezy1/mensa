"use client";
import dynamic from "next/dynamic";
import CircularIndeterminate from "../utils/Loading";

const CreateCv = dynamic(() => import("../components/CreateCv"), {
  ssr: false,
  loading: () => (
    <div style={styles.centeredContainer}>
      <CircularIndeterminate />
    </div>
  )
});

const CreateCvpage = () => {
  return (
    <div>
      <CreateCv />
    </div>
  );
};

export default CreateCvpage;


// CSS styles for centering the spinner
const styles = {
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100%',
    position: 'relative',
  }
};
