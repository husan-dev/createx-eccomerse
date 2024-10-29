import { Button } from "antd";
import { Title } from "../../components/typography";
import { LuTrash2 } from "react-icons/lu";
import AutoForm from "../../components/auto-form";
import { IFormData } from "../../types/auto-form";
import { useForm } from "antd/es/form/Form";

function Profile() {
  const [form] = useForm();
  return (
    <>
      <div className="flex justify-between item-end">
        <Title level={2} className="!m-0">
          My Profile
        </Title>
        <Button icon={<LuTrash2 />} danger type="text">
          Delete account
        </Button>
      </div>
      <AutoForm
        layout="vertical"
        col={2}
        gap={20}
        size="large"
        onFinish={() => {}}
        inputClassName="!rounded-sm"
        form={form}
        data={formData}
      />
      <Button size="large" className="!rounded-md" type="primary">
        Save Changes
      </Button>
    </>
  );
}
const formData: IFormData[] = [
  {
    label: "First Name",
    placeholder: "Enter first name",
    name: "firstName",
  },
  {
    label: "Last Name",
    placeholder: "Enter last name",
    name: "lastName",
  },
  {
    label: "Email",
    placeholder: "Enter email",
    name: "email",
    type: "email",
  },
  {
    label: "Phone",
    placeholder: "Enter phone number",
    name: "phone",
    type: "number",
  },
  {
    label: "New Password",
    placeholder: "Enter new password",
    name: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Enter confirm password",
    name: "confirmPassword",
    type: "password",
  },
  {
    label: "Country",
    name: "country",
    type: "select",
    selectOptions: [
      { label: "sada", value: "a" },
      { label: "sada", value: "b" },
      { label: "sada", value: "c" },
      { label: "sada", value: "d" },
    ],
  },
  {
    label: "City",
    name: "city",
    type: "select",
    selectOptions: [
      { label: "sada", value: "a" },
      { label: "sada", value: "b" },
      { label: "sada", value: "c" },
      { label: "sada", value: "d" },
    ],
  },
  {
    label: "Adress",
    placeholder: "Enter adress",
    name: "adress",
  },
  {
    label: "ZIP Code",
    placeholder: "Enter zipCode",
    name: "zipCode",
  },
];

export default Profile;
