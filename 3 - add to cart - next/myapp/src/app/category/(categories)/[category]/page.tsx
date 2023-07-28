import ProductCard from "@/components/ProductCard";
import { data } from "../../../../views/data";

const getProductsByCategory = (category: string) => {
  return data.filter((currentElement) => {
    return currentElement.category === category;
  });
};
export default function Page({ params }: { params: { category: string } }) {
  const products = getProductsByCategory(params.category);
  return (
    <>
      <div className="flex justify-evenly mt-16 py-10 flex-wrap">
        {products.length > 0
          ?( products.map((currentElement, currentIndex) => {
              return (
                <ProductCard
                  key={currentIndex}
                  id={currentElement.id}
                  image={currentElement.image}
                  title={currentElement.title}
                  price={currentElement.price}
                  category={currentElement.category}
                />
              );
            }))
          : (data.map((currentElement, currentIndex) => {
              return (
                <ProductCard
                  key={currentIndex}
                  id={currentElement.id}
                  image={currentElement.image}
                  title={currentElement.title}
                  price={currentElement.price}
                  category={currentElement.category}
                />
              );
            }))}
      </div>
    </>
  );
}
