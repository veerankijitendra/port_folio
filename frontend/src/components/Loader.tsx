const Loader = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-200"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-400"></div>
      </div>
    </div>
  );
};

export default Loader;
