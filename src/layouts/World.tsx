import { Background as BackgroundContainer } from "../containers/Background";
import { BottomNavigation as BottomNavigationContainer } from "../containers/BottomNavigation";
import { LeftPopNavigation } from "../containers/LeftPopNavigation";
import { RightPopNavigation } from "../containers/RightPopNavigation";
import { TopNavigation as TopNavigationContainer } from "../containers/TopNavigation";
import { Map } from "../modules/Map";
import { RealmDetails } from "../modules/RealmDetails";

export const World = () => {
  return (
    <div className="absolute top-0 z-20 w-screen h-screen z-100">
      {/* Left nav */}
      <LeftPopNavigation>

      </LeftPopNavigation>

      {/* Right nav */}
      <RightPopNavigation>

      </RightPopNavigation>
      {/* Top nav */}
      <TopNavigationContainer>

      </TopNavigationContainer>

      {/* Bottom nav */}
      <BottomNavigationContainer>
        {/* <RealmDetails /> */}
      </BottomNavigationContainer>

      <BackgroundContainer>
        {/* this is where we can maintain state of swapping between threejs scenes */}
        <Map />
      </BackgroundContainer>
    </div>
  );
};
