import { useParams } from "react-router";

const ProductDetail = () => {
    const params = useParams();

    console.log(params.productId);
    return (
        <section>
            <h2>Product Detail</h2>
            <p>{params.productId}</p>
        </section>
    )
};

export default ProductDetail;