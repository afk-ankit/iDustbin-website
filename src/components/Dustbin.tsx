const dustbinHeight = 20;
const Dustbin = ({ depth }: { depth: number }) => {
  const customStyle = () => {
    return { height: `${depth}%` };
  };
  return (
    <>
      <div className="h-2 w-8 bg-white mx-auto mt-4"></div>
      <div className="h-6 w-44  mx-auto bg-white"></div>
      <div className=" w-36 h-40 outline outline-8 mx-auto flex flex-col justify-end">
        <div
          className={`w-full transition-all ${
            depth <= dustbinHeight
              ? "bg-skobeloff"
              : depth <= 70
                ? "bg-yellow-500"
                : "bg-red_(cmyk)"
          }`}
          style={customStyle()}
        ></div>
      </div>
      <h1 className="text-xl  text-center mt-8 font-roboto_serif">
        Dustbin is {depth.toFixed(0)}% full{" "}
      </h1>
      {depth > 70 && <h1 className="text-center">Please empty the dustbin</h1>}
    </>
  );
};

export default Dustbin;
