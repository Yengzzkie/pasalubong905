

const PerPoundPieceTable = () => {
  return (
    <div className="p-8 bg-(--secondary-bg) border-l-4 border-(--primary) w-full h-fit">
      <h3 className="noto-serif text-(--primary) mb-6">Per Piece/Pound Selections</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span className="font-body-lg">Pork Belly Inihaw</span>
          <span className="text-tertiary">Market Price / lb</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span className="font-body-lg">Lechon Kawali</span>
          <span className="text-tertiary">$18.00 / lb</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span className="font-body-lg">Crispy Pata</span>
          <span className="text-tertiary">$22.00 / piece</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span className="font-body-lg">Pork BBQ Skewers (25 pcs)</span>
          <span className="text-tertiary">$65.00</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span className="font-body-lg">Lumpiang Shanghai (50 pcs)</span>
          <span className="text-tertiary">$45.00</span>
        </div>
      </div>
    </div>
  );
};

export default PerPoundPieceTable;
