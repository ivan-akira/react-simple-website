import ProductTable from "../components/ProductTable";
import { productData } from "../../public/product-data.json";
import TopBar from "../components/TopBar";

interface Prop {
  isLogin: boolean;
  onLogout: () => void;
}

const Product = ({ isLogin, onLogout }: Prop) => {
  return (
    <>
      <TopBar
        pageTitle="Product"
        isLogin={isLogin}
        onLogout={onLogout}
      ></TopBar>
      <ProductTable data={productData}></ProductTable>
    </>
  );
};

export default Product;
