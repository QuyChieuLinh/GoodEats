import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  const productId = params.productId;
  return (
    <>
      <h1>This is the ProductPage page</h1>
      <h2>productId is {productId}</h2>
    </>
  );
}

export default ProductPage;
