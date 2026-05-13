import Image from "next/image";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-(--neutral) min-h-screen px-4 py-16 md:px-8 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-(--primary)">
            Gallery
          </h1>

          <p className="mt-4 text-(--tertiary) max-w-2xl mx-auto">
            A glimpse into our food, space, and Filipino dining experience.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={1000}
                height={1000}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;