import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
function OutletStores() {
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-7 md:grid-cols-2">
      {stores.map((item) => (
        <Card key={item.img} item={item} />
      ))}
    </div>
  );
}

export default OutletStores;

function Card({ item }: { item: any }) {
  return (
    <div className="transition-all border rounded-sm hover:scale-105 hover:shadow-md">
      <img
        style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        className="w-full h-150px"
        src="item.img"
        alt=""
      />
      <div className="p-3">
        <ul>
          <li className="flex items-center gap-1 mb-2">
            {<IoPhonePortraitOutline />}
            {item.number}
          </li>
          <li className="flex items-center gap-1 mb-2">
            {<CiMail />}
            {item.email}
          </li>
          <li className="flex items-center gap-1 mb-2">
            {<CiClock2 />}
            {item.workingTime}
          </li>
          <li className="flex items-center gap-1 mb-2">
            {<IoLocationOutline />}
            {item.location}
          </li>
        </ul>
        {}
      </div>
    </div>
  );
}

const stores = [
  {
    number: "998560542",
    email: "example@gamil.com",
    workingTime: "9 from to 9",
    location: "20 vh wolf street",
    img: "1",
  },
  {
    number: "998560542",
    email: "example@gamil.com",
    workingTime: "9 from to 9",
    location: "20 vh wolf street",
    img: "2",
  },
  {
    number: "998560542",
    email: "example@gamil.com",
    workingTime: "9 from to 9",
    location: "20 vh wolf street",
    img: "3",
  },
  {
    number: "998560542",
    email: "example@gamil.com",
    workingTime: "9 from to 9",
    location: "20 vh wolf street",
    img: "4",
  },
];
