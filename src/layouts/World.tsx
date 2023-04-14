import { Background as BackgroundContainer } from "../containers/Background";
import { BottomNavigation as BottomNavigationContainer } from "../containers/BottomNavigation";
import { LeftPopNavigation } from "../containers/LeftPopNavigation";
import { RightPopNavigation } from "../containers/RightPopNavigation";
import { TopNavigation as TopNavigationContainer } from "../containers/TopNavigation";
import { Map } from "../modules/Map";
import { RealmDetails } from "../modules/RealmDetails";
import useUIStore, { Background } from "../hooks/useUIStore";
import { Realm } from "../components/Realm";
import { RealmView } from "../modules/Realm";
import { Combat } from "../modules/Combat";
import { Bastion } from "../modules/Bastion";


export const World = () => {

  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const activeBackground = useUIStore((state) => state.activeBackground);
  const setActiveBackground = useUIStore((state) => state.setActiveBackground);

  const renderActiveBackground = (): JSX.Element | null => {
    switch (activeBackground) {
      case 'map':
        return <Map />;
      case 'realmView':
        return <RealmView />;
      case 'combat':
        return <Combat />;
      case 'bastion':
        return <Bastion />;
      default:
        return null;
    }
  };

  const backgroundOptions: Background[] = ['map', 'realmView', 'combat', 'bastion'];

  return (
    <div className="absolute top-0 z-20 w-screen h-screen z-100">
      {/* Left nav */}
      <LeftPopNavigation>
        <div>
          {backgroundOptions.map((option) => (
            <button
              key={option}
              className={`px-2 ${activeBackground === option ? 'active' : ''}`}
              onClick={() => setActiveBackground(option)}
            >
              {option}
            </button>
          ))}
        </div>

      </LeftPopNavigation>

      {/* Right nav */}
      <RightPopNavigation>

      </RightPopNavigation>
      {/* Top nav */}
      {/* <TopNavigationContainer>

      </TopNavigationContainer> */}

      {/* Bottom nav */}
      <BottomNavigationContainer>
        {/* <RealmDetails /> */}
      </BottomNavigationContainer>

      <BackgroundContainer>
        {renderActiveBackground()}
      </BackgroundContainer>
    </div>
  );
};
