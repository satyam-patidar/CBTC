import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RecentEvents = () => {
  const eventsData = [
    {
      id: 1,
      title: "Flower Decorations",
      by: "by Melvina Spring",
      imageUrl:
        "https://images.pexels.com/photos/10152378/pexels-photo-10152378.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Catering Services",
      by: "by Chef Gordon",
      imageUrl:
        "https://images.pexels.com/photos/6283833/pexels-photo-6283833.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Photography Package",
      by: "by Stella Lens",
      imageUrl:
        "https://images.pexels.com/photos/13710029/pexels-photo-13710029.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Live Music Performance",
      by: "by Symphony Sounds",
      imageUrl:
        "https://images.pexels.com/photos/14746366/pexels-photo-14746366.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Event Planning Consultation",
      by: "by Event Pro",
      imageUrl:
        "https://images.pexels.com/photos/7648470/pexels-photo-7648470.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Venue Decoration",
      by: "by Decor Experts",
      imageUrl:
        "https://images.pexels.com/photos/17294787/pexels-photo-17294787/free-photo-of-elegant-table-settings-in-a-modern-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="section-wrapper my-20 lg:my-[100px] space-y-20">
      <SectionTitle
        title="Recent Events"
        description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit <br/> risus ac id lorem."
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {eventsData.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="space-y-4 bg-black/50 rounded-md"
          >
            <img
              src={item?.imageUrl}
              alt={item?.title}
              className="h-[220px] w-full object-cover rounded-t-md"
            />

            <div className="p-4">
              <p>{item?.title}</p>
              <p className="text-[#475569]">{item?.by}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecentEvents;
