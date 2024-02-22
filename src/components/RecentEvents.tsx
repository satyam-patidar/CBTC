import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "swiper/css";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";

// Define interface for event item
interface IRecentEvents {
  _id: number;
  eventName: string;
  organizer: string;
  imageURL: string;
}

const RecentEvents = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["recentItems"],
    queryFn: async () =>
      await axios
        .get("https://event-360-serverr.vercel.app/api/v1/recent-events")
        .then((res) => res?.data?.data),
  });

  if (error) {
    return (
      <div className="section-wrapper my-20 lg:my-[100px]">
        <p>An error has occurred: {error?.message}</p>
      </div>
    );
  }

  return (
    <section className="section-wrapper my-20 lg:my-[100px] space-y-20">
      <SectionTitle
        title="Recent Events"
        description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit <br/> risus ac id lorem."
      />

      {isLoading ? (
        <div>
          <Skeleton
            height={200}
            baseColor="#02011B"
            highlightColor="#384259"
            className="mb-2"
          />
          <Skeleton
            height={25}
            baseColor="#02011B"
            highlightColor="#384259"
            className="mb-2"
          />
          <Skeleton
            height={25}
            baseColor="#02011B"
            highlightColor="#384259"
            className="mb-2"
          />
        </div>
      ) : (
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
          {data.map((item: IRecentEvents) => (
            <SwiperSlide
              key={item?._id}
              className="space-y-4 bg-black/50 rounded-md"
            >
              <img
                src={item?.imageURL}
                alt={item?.eventName}
                className="h-[220px] w-full object-cover rounded-t-md"
              />

              <div className="p-4">
                <p>{item?.eventName}</p>
                <p className="text-[#475569]">{item?.organizer}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default RecentEvents;
