import HeaderOption from "./HeaderOption";
import {
  BiDotsVertical,
  BiMap,
  BiNews,
  BiImage,
  BiPlayCircle,
  BiSearch,
} from "react-icons/bi";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        <HeaderOption Icon={BiSearch} title="All" selected />
        <HeaderOption Icon={BiImage} title="Images" />
        <HeaderOption Icon={BiPlayCircle} title="Videos" />
        <HeaderOption Icon={BiNews} title="News" />
        <HeaderOption Icon={BiMap} title="Maps" />
        <HeaderOption Icon={BiDotsVertical} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
