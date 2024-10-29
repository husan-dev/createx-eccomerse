import { Typography } from "antd";
import { ComponentProps } from "react";

const { Title: AntTitle, Text: AntText, Paragraph: AntParagraph } = Typography;

export function Title(props: ComponentProps<typeof AntTitle>) {
  return <AntTitle {...props} />;
}

export function Text(props: ComponentProps<typeof AntText>) {
  return <AntText {...props} />;
}

export function Paragraph(props: ComponentProps<typeof AntParagraph>) {
  return <AntParagraph {...props} />;
}
