import { Outlet } from "react-router-dom";

const Bookings = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Reservas</h1>
      </div>

      <Outlet />
    </>
  );
};

export default Bookings;