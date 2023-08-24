import { useParams } from "react-router-dom";
// import { dataUser } from "../data/mock.js";
// import { averageSessionsUser } from "../data/mock.js";
// import { userActivity } from "../data/mock.js";
// import { userPerformance } from "../data/mock.js";
import Score from "../componant/score/Score.jsx";
import Average from "../componant/average/Average.jsx";
import Activity from "../componant/activity/Activity.jsx";
import Performance from "../componant/performance/Performance.jsx";
import "../style/index.css";
import Keydata from "../componant/keydata/Keydata.jsx";
import calorieIcon from "../asset/calories-icon.png";
import proteinIcon from "../asset/protein-icon.png";
import fatIcon from "../asset/fat-icon.png";
import carbsIcon from "../asset/carbs-icon.png";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const GetId = () => {
    const routeParams = useParams();
    return routeParams.id;
  };
  const userId = GetId();

  // ---Mock de données de l'api---
  // const user = dataUser.find((item) => item.data.id === parseInt(GetId()));

  // const averageUser = averageSessionsUser.find(
  //   (item) => item.data.userId === parseInt(GetId())
  // );

  // const activityUser = userActivity.find(
  //   (item) => item.data.userId === parseInt(GetId())
  // );

  // const performanceUser = userPerformance.find(
  //   (item) => item.data.userId === parseInt(GetId())
  // );

  //---Fetch (Get) data---

  const [average, setAverage] = useState();
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState();
  const [performance, setPerformance] = useState();

  useEffect(() => {
    const urlUser = `http://localhost:3000/user/${userId}`;
    const urlAverage = `http://localhost:3000/user/${userId}/average-sessions`;
    const urlActivity = `http://localhost:3000/user/${userId}/activity`;
    const urlPerformance = `http://localhost:3000/user/${userId}/performance`;
    const fetchfunction = async (url, setFetch) => {
      const data = await (await fetch(url)).json();
      setFetch(data);
    };
    fetchfunction(urlUser, setUser);
    fetchfunction(urlAverage, setAverage);
    fetchfunction(urlActivity, setActivity);
    fetchfunction(urlPerformance, setPerformance);
  }, [userId]);

  if (!user.data || !average || !performance || !activity) {
    // console.log(user)
    return null;
  }
  return (
    <main>
      <h1>Bonjour {user.data.userInfos.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="flex">
        <div>
          <Activity activity={activity.data.sessions} />
          <div className="flex">
            <Average avrSession={average.data.sessions} />
            <Performance performance={performance.data.data} />
            <Score score={user.data.score || user.data.todayScore} />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Keydata
                img={calorieIcon}
                value={user.data.keyData.calorieCount}
                init="kCal"
                text="Calories"
              />
            </li>
            <li>
              <Keydata
                img={proteinIcon}
                value={user.data.keyData.proteinCount}
                init="g"
                text="Proteines"
              />
            </li>
            <li>
              <Keydata
                img={carbsIcon}
                value={user.data.keyData.carbohydrateCount}
                init="g"
                text="Glusides"
              />
            </li>
            <li>
              <Keydata
                img={fatIcon}
                value={user.data.keyData.lipidCount}
                init="g"
                text="Lipides"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
