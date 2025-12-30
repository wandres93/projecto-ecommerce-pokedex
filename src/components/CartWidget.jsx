import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Badge } from "react-bootstrap";
import { BagFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="text-decoration-none text-white ms-auto">
      <div className="d-flex align-items-center">
        <BagFill size={25} color="white" />
        {totalQuantity > 0 && (
          <Badge bg="warning" text="dark" className="ms-2">
            {totalQuantity}
          </Badge>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;
