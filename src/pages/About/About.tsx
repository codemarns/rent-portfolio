
import { Hero as HeroComponent } from "../../components";

const data = {
  title: {
    first_line: "",
    last_line: "About Us",
  },
  message: `At Easy Rent, we are more than just a rental platform; we are your gateway to unforgettable travel experiences. Our mission is to provide you with the perfect home away from home, tailored to your unique needs and preferences. Whether you're embarking on a dream vacation, planning a family getaway, or traveling for business, we're here to make your journey memorable and hassle-free.`,
  image: `/front-view-smiley-female-realtor-empty-house.jpg`,
  image_owner: {
    url: "https://www.freepik.com/free-photo/front-view-smiley-female-realtor-empty-house_13104884.htm#query=appartment%20owner&position=29&from_view=search&track=ais#position=29&query=appartment%20owner",
    name: "Freepik",
  },
};

export function About() {
  return <HeroComponent data={data} image_position="left" />;
}
