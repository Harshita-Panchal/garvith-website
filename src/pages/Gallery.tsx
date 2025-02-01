const gallery = [
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
  {
    image: "src/assets/gallery/download.jpg",
  },
];

function Gallery() {
  return (
    <>
      <div className="pb-20">
        <div className="py-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-red-warm text-6xl font-bold text-center relative bottom-7 ">
            Gallery
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            "Explore our gallery and dive into a world of creativity! 📸🖼️"
          </p>
        </div>
        <div className="bg-orange-peel py-16">
          <div className="max-w-[1140px] mx-auto bg-[#FFAA07] rounded-2xl shadow-[0_0_9px_2px_rgba(0,0,0,0.15)] p-10">
            <div className=" grid md:grid-cols-6 gap-4">
              {gallery.map((item) => (
                <div className="">
                  <img src={item.image} alt="" className="rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-red-warm text-6xl font-bold text-center relative bottom-7 ">
            Media
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            "Explore our media gallery and news related to Kavi Sammelan and
            poetry! 🎤📸"
          </p>
        </div>
        <div className="bg-orange-peel py-16">
          <div className="max-w-[1140px] mx-auto bg-[#FFAA07] rounded-2xl shadow-[0_0_9px_2px_rgba(0,0,0,0.15)] p-10">
            <div className=" grid md:grid-cols-6 gap-4">
              {gallery.map((item) => (
                <div className="">
                  <img src={item.image} alt="" className="rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
