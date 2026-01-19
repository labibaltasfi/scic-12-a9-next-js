import Banner from "@/components/Banner/page";
import ProductsPage from "@/components/ProductCard/page";



export default function Home() {
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-5xl font-semibold">This is Home</h1>
     <Banner></Banner>
     <ProductsPage></ProductsPage>
    </div>
  );
}
