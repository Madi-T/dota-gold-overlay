import { RootReducer } from "app/shared/rootReducer";
import { Feed } from "components/Feed";
import { Title } from "components/Title/Title";
import { useSelector } from "react-redux";
import "./styles/Screen.css";

const Screen = () => {
  const { events, infos } = useSelector(
    (state: RootReducer) => state.background,
  );

  return (
    <div className="ingame">
        <div className="stat-container">
          <Title color="white">InGame screen</Title>
          <Feed
            title="Gold Statistics"
            data={
              events.length
                ? JSON.stringify(events[events.length - 1])
                : "No events yet"
            }
          />
        </div>
    </div>
  );
};

export default Screen;