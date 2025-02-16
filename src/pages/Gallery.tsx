const gallery = [
  {
    image: "/photos/photo-1.jpg",
  },
  {
    image: "/photos/photo-2.jpg",
  },
  {
    image: "/photos/photo-3.jpg",
  },
  {
    image: "/photos/photo-4.jpg",
  },
  {
    image: "/photos/photo-5.jpg",
  },
  {
    image: "/photos/photo-6.jpg",
  },
  {
    image: "/photos/photo-7.jpg",
  },
  {
    image: "/photos/photo-8.jpg",
  },
  {
    image: "/photos/photo-9.jpg",
  },
  {
    image: "/photos/photo-10.jpg",
  },
  {
    image: "/photos/photo-11.jpg",
  },
  {
    image: "/photos/photo-12.jpg",
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
          <p className="text-deep-blue text-6xl font-bold text-center relative bottom-7 ">
            Gallery
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            "Explore our gallery and dive into a world of creativity! 📸🖼️"
          </p>
        </div>
        <div className=" py-16">
          <div className="max-w-[1140px] mx-auto rounded-2xl shadow-[0_0_9px_2px_rgba(0,0,0,0.15)] p-10">
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
          <p className="text-deep-blue text-6xl font-bold text-center relative bottom-7 ">
            Media
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            "Explore our media gallery and news related to Kavi Sammelan and
            poetry! 🎤📸"
          </p>
        </div>
        <div className=" py-16">
          <div className="max-w-[1140px] mx-auto rounded-2xl shadow-[0_0_9px_2px_rgba(0,0,0,0.15)] p-10">
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
