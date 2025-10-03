const ProductCard = ({ img, title, desc, buttonText }) => {
  return (
    <div
      className="relative overflow-hidden pop-up-card 
    "
    >
      <img src={img} alt={title} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col justify-between p-8 light">
        <div className="flex flex-col justify-start text-left">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="light">{desc}</p>
        </div>

        <button className="btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};

export default ProductCard;
