import { Background as BackgroundContainer } from "../containers/Background";
import { BottomNavigation as BottomNavigationContainer } from "../containers/navigation/BottomNavigation";
import { LeftPopNavigation } from "../containers/navigation/LeftPopNavigation";
import { RightPopNavigation } from "../containers/navigation/RightPopNavigation";
import { TopNavigation } from "../containers/navigation/TopNavigation";
import { MainScene } from "../modules/scenes/MainScene";
import useUIStore, { Background } from "../hooks/store/useUIStore";
import ActiveLink from "../elements/ActiveLink";


export const World = () => {

  const activeScene = useUIStore((state) => state.activeScene);
  const setActiveScene = useUIStore((state) => state.setActiveScene);

  const backgroundLabels: Record<Background, string> = {
    map: 'Map',
    realmView: 'Realm View',
    combat: 'Combat',
    bastion: 'Bastion',
  };

  const backgroundOptions: Background[] = ['map', 'bastion', 'realmView'];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <LeftPopNavigation>
        {backgroundOptions.map((option) => (
          <ActiveLink
            key={option}
            className={`px-2`}
            href={"/" + option}
          >
            {backgroundLabels[option]}
          </ActiveLink>
        ))}
      </LeftPopNavigation>
      <BackgroundContainer>
        <MainScene />
      </BackgroundContainer>
    </div>
  );
};
