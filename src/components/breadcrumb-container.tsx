import Breadcrumb from "./breadcrumb";
import Container from "./container";

function BreadcrumbContainer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="py-2 bg-gray-200">
      <Container className={` ${className}`}>
        <Breadcrumb />
        {children}
      </Container>
    </div>
  );
}

export default BreadcrumbContainer;
