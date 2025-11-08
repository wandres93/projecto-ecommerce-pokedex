import { Badge } from "react-bootstrap";
import { BagFill } from "react-bootstrap-icons";

function CartWidget() {
  return (
    <div className="d-flex align-items-center">
      <BagFill size={25} color="white" />
      <Badge bg="warning" text="dark" className="ms-2">
        2
      </Badge>
    </div>
  );
}

export default CartWidget;
