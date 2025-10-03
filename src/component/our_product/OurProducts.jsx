import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import cardimg from "../../assets/card_bg.png";
import { products } from "../../data/product";
import SimpleProductCard from "./SimpleProductCard";

const OurProducts = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="products" className="h-padding justify-center mb-12 mt-4">
      <div className="text-center">
        <h2>
          <span className="grey">Our</span> Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 mt-4 justify-items-center">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProductCard
              img={cardimg}
              title="Best Sellers"
              desc="Our best-selling formula, trusted by thousands. Backed by clinical science and crafted with organic purity. Experience results you can feel—naturally."
              buttonText="See All Products"
            />
          </motion.div>

          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SimpleProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
