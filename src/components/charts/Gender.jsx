import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useUser } from "../UserContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Gender = () => {
  const { responseData } = useUser();

  const [data, setData] = useState({
    
    labels: [],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  });
 
  const options = {
    plugins:{
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((users) => {
        const fetchedUsers = users.users;
        console.log(fetchedUsers.length);
        const totalUsers = fetchedUsers.length;
        const maleCount = fetchedUsers.filter(
          (user) => user.gender === "male"
        ).length;
        const femaleCount = totalUsers - maleCount;
        responseData({
          totalUsers: totalUsers,
          male: maleCount,
          female: femaleCount,
        });
        setData({
          labels: ["Male", "Female"],
          datasets: [
            {
              data: [maleCount, femaleCount],
              backgroundColor: ["#36A2EB", "#FF6384"],
              hoverBackgroundColor: ["#36A2EB", "#FF6384"],
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, height: "14em" }}>
        <Pie data={data} options={options}  />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <ul>
          {data.labels.map((label, index) => (
            <li key={index} style={{ listStyle: "none", marginBottom: "15px" }}>
              <div
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  width: "40px",
                  height: "10px",
                  display: "inline-block",
                  marginRight: "45px",
                }}
              ></div>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gender;
