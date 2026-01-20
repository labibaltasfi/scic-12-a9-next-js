import AboutHome from "@/components/AboutHome/page";
import Banner from "@/components/Banner/page";
import Newsletter from "@/components/Newsletter/page";
import ProductCardHome from "@/components/ProductCardHome/ProductCardHome";




export default function Home() {
  return (
    <div className="w-9/12 mx-auto">
      <Banner />
      <ProductCardHome />
      <Newsletter />
      <AboutHome />
    </div>
  );
}
