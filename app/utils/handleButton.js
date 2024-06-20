 const handleButton = (data, setData, field) => {
    return (
      <>
        <div className="flex items-center justify-between mt-5">
          <button
            type="button"
            onClick={() => setData(!data)}
            className="border border-solid p-2 rounded-2xl mb-2 w-32 flex items-center justify-center b"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span className="whitespace-nowrap">{field}</span>
          </button>
        </div>
      </>
    );
  };


  export default handleButton