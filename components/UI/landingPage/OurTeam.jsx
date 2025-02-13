import React, { useState, useEffect } from "react";
import classes from "../../../styles/ourteam.module.css";
import { ImLinkedin } from "react-icons/im";
import { urlFor, client } from "../../clientSanity";
import { AppWrap, MotionWrap } from "../../Wrappers";

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  console.log("i am member", members);

  const data = [
    {
      id: 1,
      imageUrl:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      position: "CEO",
      company: "SoftRevo",
      name: "Muhammad Muzzamil",
    },
    {
      id: 2,
      imageUrl:
        "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
      position: "Co-Founder",
      company: "SoftRevo",
      name: "Muhammad Umais",
    },
    {
      id: 3,
      imageUrl:
        "https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495273.png",
      position: "Developer",
      company: "SoftRevo",
      name: "Hammad Azam",
    },
    {
      id: 4,
      imageUrl:
        "https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495273.png",
      position: "Developer",
      company: "SoftRevo",
      name: "Muhammad Arif",
    },
    {
      id: 5,
      imageUrl:
        "https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495273.png",
      position: "UI/Ux Designer",
      company: "SoftRevo",
      name: "Ahtesham Anjum",
    },
    {
      id: 6,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBAby-nmw3JFdW8aIj0WIMsqw4VlWbHMswg&s",
      position: "SQA Engineer",
      company: "SoftRevo",
      name: "Anum Batool",
    },
  ];

  useEffect(() => {
    const query = '*[_type == "members"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setMembers(data);
    });
  }, []);
  return (
    <div className={`${classes.ot__box_main}`} id="process">
      <div className={`${classes.sp__box_mainText}`}>
        <h1>Meet the brains</h1>
        <p>These People work on making our projects best.</p>
        <hr
          style={{
            borderTop: "3px solid #4288E8",
            width: "100px",
            margin: "1rem auto auto auto",
          }}
        />
      </div>
      <div className={`${classes.ot__members_main}`}>
        {data.map((data, index) => (
          <div key={index} className={`${classes.ot_card}`}>
            <img
              src={data.imageUrl}
              alt="John"
              style={{ width: "150px", height: "150px", borderRadius: "10px",objectFit:'cover' }}
            />
            <h4 style={{ margin: "5px", fontSize: "14px", fontWeight: "500" }}>
              {data?.name}
            </h4>
            <p className={`${classes.ot__title}`}>{data?.position}</p>
            {/* <p>{data?.company}</p> */}
            <p>
              {/* <ImLinkedin size={25} style={{ color: "#0A66C2" }} /> */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(OurTeam, `${classes.ot__box_main}`),
  "team",
  "app__primarybg"
);
