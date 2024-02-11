import Mountain from "@/assets/images/mountain.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const VideoSection = () => {
  return (
    <MaxContentWidthWrapper className="lg:py-28 py-[81px]">
      <div className="relative w-full">
        <Image
          src={Mountain}
          alt=""
          className="w-full h-full object-cover rounded-[20px] max-md:min-h-[316px]"
          width={989}
          height={540}
        />
        <Button
          variant="primary"
          className="lg:h-[92px] lg:w-[92px] w-[56.95px] h-[56.95px] text-[14px] rounded-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:text-[23px]"
          size="icon"
        >
          <FaPlay className="text-white" />
        </Button>
      </div>
    </MaxContentWidthWrapper>
  );
};

export default VideoSection;
