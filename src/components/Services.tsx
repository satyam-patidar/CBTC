import { useState } from "react";
import SectionTitle from "./SectionTitle";
import corporateImg from "../assets/images/corporate.png";
import weddingImg from "../assets/images/wedding.png";
import organizationImg from "../assets/images/organization.png";
import checkMarkIcon from "../assets/icons/checkmark-icon.png";
import { Button } from "./ui/button";

const Services = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const eventDetails = [
    {
      id: 1,
      eventName: "Corporate Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
      features: [
        "One day pass access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
      image: corporateImg,
    },
    {
      id: 2,
      eventName: "Wedding Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
      features: [
        "One day pass access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
      image: weddingImg,
    },
    {
      id: 3,
      eventName: "Organization Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
      features: [
        "One day pass access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
      image: organizationImg,
    },
  ];

  return (
    <section className="min-h-dvh section-wrapper flex items-center justify-center mt-[70px] lg:mt-0">
      <div className="space-y-10">
        <SectionTitle
          title="Our Services"
          description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br/> faucibus neque velit risus ac id lorem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {eventDetails.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-black/50 rounded-md"
              onMouseEnter={() => setHoveredId(item?.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {hoveredId !== item?.id && (
                <img
                  src={item?.image}
                  alt={item?.eventName}
                  className="object-cover mb-4 h-[200px] w-full rounded-md"
                />
              )}

              {hoveredId !== item?.id ? (
                <h4>{item?.eventName}</h4>
              ) : (
                <div>
                  <h4>{item?.eventName}</h4>
                  <p className="text-justify">{item.description}</p>
                </div>
              )}

              {item.features.map((feature, index) => (
                <div className="flex items-center gap-3 mt-4" key={index}>
                  <img src={checkMarkIcon} alt="CheckMarkIcon" />
                  <p>{feature}</p>
                </div>
              ))}

              {hoveredId === item?.id && (
                <Button className="w-full mt-10">Check it Out</Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
