import { useParams } from "react-router-dom";
import { dataUser } from "../data/mock.js";
import { averageSessionsUser } from "../data/mock.js";
import { userActivity } from "../data/mock.js";
import { userPerformance } from "../data/mock.js";
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
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const GetId = () => {
    const routeParams = useParams();
    return routeParams.id;
  };

  const user = dataUser.find((item) => item.data.id === parseInt(GetId()));
  const averageUser = averageSessionsUser.find(
    (item) => item.data.userId === parseInt(GetId())
  );
  const activityUser = userActivity.find(
    (item) => item.data.userId === parseInt(GetId())
  );
  const performanceUser = userPerformance.find(
    (item) => item.data.userId === parseInt(GetId())
  );

  return (
    <main>
      <h1>Bonjour {user.data.userInfos.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="flex">
        <div>
          <Activity activity={activityUser.data.sessions} />
          <div className="flex">
            <Average avrSession={averageUser.data.sessions} />
            <Performance performance={performanceUser.data.data} />
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
