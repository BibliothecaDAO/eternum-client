import { Background as BackgroundContainer } from "../containers/Background";
import { BottomNavigation as BottomNavigationContainer } from "../containers/navigation/BottomNavigation";
import { LeftPopNavigation } from "../containers/navigation/LeftPopNavigation";
import { RightPopNavigation } from "../containers/navigation/RightPopNavigation";
import { TopNavigation } from "../containers/navigation/TopNavigation";
import { MainScene } from "../modules/scenes/MainScene";


export const World = () => {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <LeftPopNavigation>Left</LeftPopNavigation>
      <TopNavigation>Top</TopNavigation>
      <BackgroundContainer>
        <MainScene />
      </BackgroundContainer>
    </div>
  );
};
