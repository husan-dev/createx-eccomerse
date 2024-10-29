import { Button, Divider, Space } from "antd";
import Container from "../container";
import { Paragraph, Text } from "../typography";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import aplleLogo from "../../../public/images/app-store.svg";
import playMarketLogo from "../../../public/images/google-play.svg";
import { EMAIL, TEL_NUMBER } from "../../constants";

const socialIcons = [
  <FaFacebookF />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaYoutube />,
  <FaPinterestP />,
];

function Footer() {
  return (
    <div className="!text-white bg-gray-900">
      <Container className="flex flex-wrap justify-between py-5">
        <div>
          <Paragraph className="font-bold text-white uppercase">help</Paragraph>
          <ul className="text-gray-500">
            <li>FAQ</li>
            <li>Track order</li>
            <li>Contacts</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <Paragraph className="font-bold text-white uppercase">
            Informations
          </Paragraph>
          <ul className="text-gray-500">
            <li>New arrivals</li>
            <li>Trending now</li>
            <li>Sales</li>
            <li>Brands</li>
          </ul>
        </div>
        <div>
          <Paragraph className="font-bold text-white uppercase">
            get in touch
          </Paragraph>
          <ul className="text-gray-500">
            <li>
              <Link to={"/"}>
                <span className="font-[400] text-slate-300">Call</span> :{" "}
                {TEL_NUMBER}
              </Link>
            </li>
            <li>
              <Link to={"/" + EMAIL}>
                <span className="font-[400] text-slate-300">Email</span>:{" "}
                {EMAIL}
              </Link>
            </li>
            <li>
              <Space className="mt-3">
                {socialIcons.map((item, index) => (
                  <Button
                    className="text-white bg-gray-800 border-none bg-opacity-80 !hover:bg-gray-900"
                    key={index}
                    icon={item}
                  ></Button>
                ))}
              </Space>
            </li>
          </ul>
        </div>
        <div>
          <Paragraph className="font-bold text-white uppercase">
            Download our app
          </Paragraph>
          <ul className="text-gray-500">
            <li>
              <Space>
                <img src={aplleLogo} alt="" />
                <img src={playMarketLogo} alt="" />
              </Space>
            </li>
          </ul>
        </div>
      </Container>
      <Divider className="bg-slate-700 !mb-0" />
      <Container className="flex items-center justify-between py-4">
        <Text className="!text-gray-500">
          © All rights reserved. Made with by Createx Studio{" "}
        </Text>
        <Text className="!text-gray-500 font-semibold">Go to top</Text>
      </Container>
    </div>
  );
}

export default Footer;
