import { useParams } from "react-router-dom";
import Score from "../componant/score/Score.jsx"
import { dataUser } from "../data/mock.js"


export default function Dashboard() {
  const GetId = () => {
    const routeParams = useParams();
    return routeParams.id;
  };

  const user = dataUser.find((item) => item.data.id === parseInt(GetId()));
  console.log(user)
  return (
    <main>
      <h1>Bonjour {user.data.userInfos.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <Score score={user.data.score || user.data.todayScore }/>
    </main>
  );
}
