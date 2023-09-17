// import
import { useParams } from "react-router-dom";
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
import DataModel from "./DataModel.jsx";

// Récuperation de l'id
export default function Dashboard() {
  const GetId = () => {
    const routeParams = useParams();
    return routeParams.id;
  };
  const userId = GetId();

  // Mock de données de l'api
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

  // création des useState
  const [average, setAverage] = useState();
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState();
  const [performance, setPerformance] = useState();

  // Apelle API
  useEffect(() => {
    const urlUser = `http://localhost:3000/user/${userId}`;
    const urlAverage = `http://localhost:3000/user/${userId}/average-sessions`;
    const urlActivity = `http://localhost:3000/user/${userId}/activity`;
    const urlPerformance = `http://localhost:3000/user/${userId}/performance`;
    const fetchfunction = async (url, setFetch) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          // Si la réponse n'est pas ok (erreur HTTP)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setFetch(data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };
    fetchfunction(urlUser, setUser);
    fetchfunction(urlAverage, setAverage);
    fetchfunction(urlActivity, setActivity);
    fetchfunction(urlPerformance, setPerformance);
  }, [userId]);

  // Récperation des donnés formater a l'aide de classe de modération
  let chart = {};
  let chartBar = {};
  let radar = {};
  let lineChart = {};
  if (user.data && activity && performance && average) {
    chart = DataModel.transformScore(user.data.score || user.data.todayScore);
    chartBar = DataModel.transformActivity(activity.data.sessions);
    radar = DataModel.transformPerformance(performance.data);
    lineChart = DataModel.transformAverage(average.data.sessions);
  }

  // Pas de données
  if (!user.data || !average || !performance || !activity) {
    return (
      <div className="margin">
        <h1>500</h1>
        <p>Sorry... Internet server error</p>
      </div>
    );
  }

  // Avec les données
  return (
    <main>
      <h1>
        Bonjour{" "}
        <span className="colorRed">{user.data.userInfos.firstName}</span>
      </h1>
      <p className="paragraphe">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div className="container_main">
        <div className="container_verti">
          <Activity activity={chartBar} />

          <div className="flex">
            <Average avrSession={lineChart} />
            <Performance performance={radar} />
            <Score score={chart} />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Keydata
                img={calorieIcon}
                value={user.data.keyData.calorieCount * 0.001}
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
