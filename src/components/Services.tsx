import SectionTitle from "./SectionTitle";
import corporateImg from "../assets/images/corporate.png";
import weddingImg from "../assets/images/wedding.png";
import organizationImg from "../assets/images/organization.png";
import checkMarkIcon from "../assets/icons/checkmark-icon.png";

const Services = () => {
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
    <section className="min-h-dvh section-wrapper flex items-center justify-center">
      <div className="space-y-10">
        <SectionTitle
          title="Our Services"
          description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br/> faucibus neque velit risus ac id lorem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {eventDetails.map((item) => (
            <div key={item?.id} className="p-5 bg-black rounded-md">
              <img
                src={item?.image}
                alt={item?.eventName}
                className="object-cover mb-4 h-[200px] w-full rounded-md"
              />

              <p className="text-justify">{item?.description}</p>

              {item?.features?.map((item) => (
                <div className="flex items-center gap-3 mt-4">
                  <img src={checkMarkIcon} alt="CheckMarkIcon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
