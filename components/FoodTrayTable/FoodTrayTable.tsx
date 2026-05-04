import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});
  
  type FoodItemProps = {
    id: number;
    name: string;
    price: {
      small: string;
      medium: string;
      large: string;
    };
  };

  type FoodTrayTableProps = {
    itemData: FoodItemProps[]
  }
const FoodTrayTable = ({ itemData }: FoodTrayTableProps) => {

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="text-(--tertiary) text-xs uppercase tracking-widest border-b border-outline-variant">
          <th className="py-4 font-semibold">Item Name</th>
          <th className="py-4 font-semibold text-right w-24">Small</th>
          <th className="py-4 font-semibold text-right w-24">Med</th>
          <th className="py-4 font-semibold text-right w-24">Large</th>
        </tr>
      </thead>
      <tbody className={`${beVietnamPro.className} divide-y divide-gray-300`}>
        {itemData.map((item) => (
          <tr key={item.id}>
            <td className="py-4">{item.name}</td>
            <td className="py-4 text-right w-24">{item.price.small}</td>
            <td className="py-4 text-right w-24">{item.price.medium}</td>
            <td className="py-4 text-right w-24">{item.price.large}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodTrayTable;
