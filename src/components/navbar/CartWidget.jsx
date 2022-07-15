import pacienteHead from "../../pacienteHead.png";
function CartWidget() {
      return (
            <>
                  <span className="badge contmens badge-counter">
                        <img
                              src={pacienteHead}
                              className="pacienteHead"
                              alt=""
                        />
                        4
                  </span>
            </>
      );
}

export default CartWidget;
