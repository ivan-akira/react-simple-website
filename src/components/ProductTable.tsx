import { NumericFormat } from "react-number-format";

interface Prop {
  data: ProductRow[];
}

interface ProductRow {
  productId: number;
  productName: string;
  image: string;
  price: number;
  currency: string;
}

const ProductTable = ({ data }: Prop) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.productId}>
            <td>{row.productName}</td>
            <td>
              <img src={row.image} className="img-thumbnail" alt={row.image} />
            </td>
            <td>
              <NumericFormat
                value={row.price}
                displayType="text"
                thousandSeparator={true}
                suffix={" " + row.currency}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
