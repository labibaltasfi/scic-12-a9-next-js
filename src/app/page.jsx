import AboutHome from "@/components/AboutHome/page";
import Banner from "@/components/Banner/page";
import Newsletter from "@/components/Newsletter/page";
import ProductsPage from "@/components/ProductCard/page";
import ProductCardHome from "@/components/ProductCard/ProductCardHome";



export default function Home() {
  return (
    <div className="w-9/12 mx-auto">
     <Banner></Banner>
     <ProductCardHome></ProductCardHome>
     <Newsletter></Newsletter>
     <AboutHome></AboutHome>
    </div>
  );
}
