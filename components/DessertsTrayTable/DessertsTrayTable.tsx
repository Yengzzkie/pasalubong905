type ItemDataProps = {
    id: number;
    name: string;
    price: string;
    UOM: string;
}

type PerPoundPieceTableProps = {
    itemData: ItemDataProps[];
}

const DessertsTrayTable = ({ itemData }: PerPoundPieceTableProps) => {
  return (
    <div className="p-8 bg-(--secondary-bg) border-l-4 border-(--primary) mt-10 w-full h-fit">
      <h3 className="noto-serif text-(--primary) mb-6">DESSERTS</h3>
      <div className="space-y-4">
        {itemData.map((item) => (
          <div key={item.name} className="flex justify-between items-center py-2 border-b border-gray-300">
            <span>{item.name}</span>
            <span className="text-(--tertiary)">${item.price} / {item.UOM}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsTrayTable;
