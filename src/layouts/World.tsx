import { Background as BackgroundContainer } from "../containers/Background";
import { BottomNavigation as BottomNavigationContainer } from "../containers/navigation/BottomNavigation";
import { LeftPopNavigation } from "../containers/navigation/LeftPopNavigation";
import { RightPopNavigation } from "../containers/navigation/RightPopNavigation";
import { TopNavigation } from "../containers/navigation/TopNavigation";
import { MainScene } from "../modules/scenes/MainScene";
import useUIStore, { Background } from "../hooks/store/useUIStore";


export const World = () => {

  const activeScene = useUIStore((state) => state.activeScene);
  const setActiveScene = useUIStore((state) => state.setActiveScene);

  const backgroundLabels: Record<Background, string> = {
    map: 'Map',
    realmView: 'Realm View',
    combat: 'Combat',
    bastion: 'Bastion',
  };

  const backgroundOptions: Background[] = ['map', 'bastion'];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <LeftPopNavigation>
        {backgroundOptions.map((option) => (
          <button
            key={option}
            className={`px-2 ${activeScene === option ? 'text-white' : ''}`}
            onClick={() => setActiveScene(option)}
          >
            {backgroundLabels[option]}
          </button>
        ))}
      </LeftPopNavigation>
      <BackgroundContainer>
        <MainScene />
      </BackgroundContainer>
    </div>
  );
};
