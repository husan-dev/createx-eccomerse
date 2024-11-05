import { Button } from "antd";
import { FaFacebook, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Paragraph } from "@components/typography";

function OrSignInWidth() {
  return (
    <div className="px-10 py-7">
      <Paragraph className="text-center">Or sign in with</Paragraph>
      <div className="flex justify-center gap-2">
        {signInWith.map((item, index) => (
          <Button key={index} icon={item.icon}></Button>
        ))}
      </div>
    </div>
  );
}

export default OrSignInWidth;

const signInWith = [
  { icon: <FaFacebook /> },
  { icon: <FaGoogle /> },
  { icon: <FaXTwitter /> },
  { icon: <FaLinkedin /> },
];
