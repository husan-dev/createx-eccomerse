import { Button, Form, Input, Select } from "antd";
import { Title } from "@components/typography";
import { LuTrash2 } from "react-icons/lu";
import { useForm } from "antd/es/form/Form";
import { useCallback } from "react";

const inputClass = "!rounded-sm";

const { Option } = Select;
function Profile() {
  const [form] = useForm();
  const onFinish = useCallback(() => {}, []);
  return (
    <>
      <div className="flex flex-wrap justify-between item-end mb-[30px]">
        <Title className="!m-0 !text-[25px] text-nowrap">My Profile</Title>
        <Button className="ms-auto" icon={<LuTrash2 />} danger type="text">
          Delete account
        </Button>
      </div>
      <Form
        size="large"
        layout="vertical"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter first name" }]}
        >
          <Input className={inputClass} placeholder="Enter first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please enter last name" }]}
        >
          <Input className={inputClass} placeholder="Enter last name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter email" }]}
        >
          <Input
            className={inputClass}
            type="email"
            placeholder="Enter email"
          />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please enter phone number" }]}
        >
          <Input
            className={inputClass}
            type="number"
            placeholder="Enter phone number"
          />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="password"
          rules={[{ required: true, message: "Please enter new password" }]}
        >
          <Input
            className={inputClass}
            type="password"
            placeholder="Enter new password"
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your password" }]}
        >
          <Input
            className={inputClass}
            type="password"
            placeholder="Enter confirm password"
          />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select your country" }]}
        >
          <Select className={inputClass} placeholder="Select your country">
            <Option value="a">Country A</Option>
            <Option value="b">Country B</Option>
            <Option value="c">Country C</Option>
            <Option value="d">Country D</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please select your city" }]}
        >
          <Select className={inputClass} placeholder="Select your city">
            <Option value="a">City A</Option>
            <Option value="b">City B</Option>
            <Option value="c">City C</Option>
            <Option value="d">City D</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Address"
          name="adress"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input className={inputClass} placeholder="Enter address" />
        </Form.Item>

        <Form.Item
          label="ZIP Code"
          name="zipCode"
          rules={[{ required: true, message: "Please enter ZIP code" }]}
        >
          <Input className={inputClass} placeholder="Enter ZIP code" />
        </Form.Item>
      </Form>
      <Button size="large" className="!rounded-md" type="primary">
        Save Changes
      </Button>
    </>
  );
}

export default Profile;
