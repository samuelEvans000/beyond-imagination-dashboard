import Employe from "../charts/Employe";
import Gender from "../charts/Gender";
import Sidebar from "../Sidebar/Sidebar";
import { useUser } from "../UserContext";
import "./dashboard.css";

function Dashboard() {
    const{fetchedData}=useUser()
  return (
    <>
      <div className="dashboard">
      <div className="side">
        <Sidebar />
      </div>
      <div className="charts">
        <div className="gender-con">
          <div className="gender">
            <Gender />
          </div>
          <div className="gen-info">
            <h2>GENDER</h2>
            <h2>
              Total Users = {fetchedData.totalUsers}
              <br></br>
              Male = {fetchedData.male}
              <br></br>
              Female = {fetchedData.female}
            </h2>
          </div>
        </div>
        <div className="employe-con">
          <div className="employe">
            <Employe />
          </div>
          <div className="emp-info">
            <h2>EMPLOYMENT TYPE</h2>
            <h2>
              Total Users = {30}
              <br></br>
              Full Time= {15}
              <br></br>
              Part Time = {10}
              <br></br>
              Daily Wage = {5}
            </h2>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
