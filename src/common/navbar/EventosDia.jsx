import agenda from "../../assets/agenda.png";

function EventosDia() {
      return (
            <>
                  <img
                        src={agenda}
                        className="paciente__logo"
                        alt="Logo paciente"
                  />
                  <span className="badge rounded-circle">6</span>
            </>
      );
}

export default EventosDia;
