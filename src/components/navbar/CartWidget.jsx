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
                        2
                  </span>
            </>
      );
}

export default CartWidget;
