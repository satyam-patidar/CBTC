import SectionTitle from "./SectionTitle";
import itemOne from "../assets/images/item/1.png";
import itemTwo from "../assets/images/item/2.png";
import itemThree from "../assets/images/item/3.png";
import itemFour from "../assets/images/item/4.png";
import itemFive from "../assets/images/item/5.png";
import itemSix from "../assets/images/item/6.png";

const EventItems = () => {
  const eventItems = [
    {
      id: 1,
      name: "Event Item - 1",
      image: itemOne,
    },
    {
      id: 2,
      name: "Event Item - 2",
      image: itemTwo,
    },
    {
      id: 3,
      name: "Event Item - 3",
      image: itemThree,
    },
    {
      id: 4,
      name: "Event Item - 4",
      image: itemFour,
    },
    {
      id: 5,
      name: "Event Item - 5",
      image: itemFive,
    },
    {
      id: 6,
      name: "Event Item - 6",
      image: itemSix,
    },
  ];

  return (
    <section className="section-wrapper mt-20 lg:mt-[100px] space-y-14">
      <SectionTitle
        title="Event Items"
        description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br/> faucibus neque velit risus ac id lorem."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {eventItems.map((item) => (
          <div key={item.id} className="p-5 bg-black/50 rounded-md">
            <h5>{item?.name}</h5>

            <img
              src={item?.image}
              alt={item?.name}
              className="object-cover mt-3 h-[200px] w-full rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventItems;
