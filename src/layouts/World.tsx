import { Background as BackgroundContainer } from "../containers/Background";
import { MainScene } from "../modules/scenes/MainScene";
import { Background } from "../hooks/store/useUIStore";
import ActiveLink from "../elements/ActiveLink";
import { Leva } from "leva";
import { BottomRightContainer } from "../containers/BottomRightContainer";
import ChatModule from "../modules/ChatModule";
import TopRightContainer from "../containers/TopRightContainer";
import NetworkModule from "../modules/NetworkModule";
import BottomMiddleContainer from "../containers/BottomMiddleContainer";
import WolrdMapLayersModule from "../modules/WorldMapLayersModule";
import TopLeftContainer from "../containers/TopLeftContainer";
import ContextsModule from "../modules/ContextsModule";
import BottomLeftContainer from "../containers/BottomLeftContainer";
import NavigationModule from "../modules/NavigationModule";
import ContentContainer from "../containers/ContentContainer";
import RealmManagementModule from "../modules/RealmManagementModule";


export const World = () => {

  const backgroundLabels: Record<Background, string> = {
    map: 'Map',
    realmView: 'Realm View',
    combat: 'Combat',
    bastion: 'Bastion',
  };

  const backgroundOptions: Background[] = ['map', 'bastion', 'realmView'];

  return (
    <div className="fixed top-0 left-0 z-0 w-screen h-screen">
      {/* <LeftPopNavigation>
        {backgroundOptions.map((option) => (
          <ActiveLink
            key={option}
            className={`px-2`}
            href={"/" + option}
          >
            {backgroundLabels[option]}
          </ActiveLink>
        ))}
      </LeftPopNavigation> */}
      <BackgroundContainer>
        <MainScene />
      </BackgroundContainer>
      <TopLeftContainer>
        <ContextsModule />
      </TopLeftContainer>
      <TopRightContainer>
        <NetworkModule />
      </TopRightContainer>
      <ContentContainer>
        <RealmManagementModule />
      </ContentContainer>
      <BottomLeftContainer>
        <NavigationModule />
      </BottomLeftContainer>
      <BottomMiddleContainer>
        <WolrdMapLayersModule />
      </BottomMiddleContainer>
      <BottomRightContainer>
        <ChatModule />
      </BottomRightContainer>
      <Leva hidden />
      <div className="fixed z-0 border-2 border-white border-solid pointer-events-none border-opacity-20 left-3 right-3 bottom-3 top-3 rounded-xl" />
    </div>
  );
};
