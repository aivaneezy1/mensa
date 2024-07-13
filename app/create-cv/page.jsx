"use client"
import dynamic from 'next/dynamic';

const CreateCv = dynamic(() => import('../components/CreateCv'), { ssr: false });

const CreateCvpage = () => {
  return (
    <div>
      <CreateCv />
    </div>
  );
}

export default CreateCvpage;