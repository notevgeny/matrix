import {Sidebar} from "../components/Sidebar/Sidebar";

const Page404 = () => {
  return (
    <div>
        <div className="d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between">
        <Sidebar/>
        <div className="matrix-wrap flex-grow-1">
          <h1>OOOPS</h1>
        </div>
      </div>
    </div>
  );
};

export default Page404;