const ArrowBtn = prop => {
  const { className, onClick } = prop;
  return (
    <button
      className={`btn btn-circle  animate-none  ${className} text-white`}
      onClick={onClick}
    />
  );
};

export default ArrowBtn;
