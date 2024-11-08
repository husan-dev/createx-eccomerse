import { Collapse, CollapseProps } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Faq() {
  return (
    <div>
      <Collapse
        className="rounded-md"
        defaultActiveKey={["1"]}
        expandIconPosition={"end"}
        bordered={false}
        ghost={true}
        expandIcon={({ isActive }) =>
          isActive ? (
            <FaMinus className="!text-main !text-lg" />
          ) : (
            <FaPlus className="!text-main  !text-lg" />
          )
        }
        items={items}
      />
    </div>
  );
}

export default Faq;
const items: CollapseProps["items"] = [
  { key: "1", label: "salom 1", children: "salom salom salom " },
  { key: "2", label: "salom 2", children: "salom salom salom" },
];
