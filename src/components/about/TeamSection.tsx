import TeamUser1 from "@/assets/images/team-user-1.png";
import TeamUser2 from "@/assets/images/team-user-2.png";
import TeamUser3 from "@/assets/images/team-user-3.png";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { TeamCard } from "../ui/card";

const Teams = [
  {
    user_name: "Username",
    image: TeamUser1.src,
    imageWidth: 316,
    imageHeight: 231,
    profession: "Profession",
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
  },
  {
    user_name: "Username",
    image: TeamUser2.src,
    imageWidth: 316,
    imageHeight: 231,
    profession: "Profession",
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
  },
  {
    user_name: "Username",
    image: TeamUser3.src,
    imageWidth: 316,
    imageHeight: 231,
    profession: "Profession",
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
  },
];

const TeamSection = () => {
  return (
    <MaxContentWidthWrapper className="py-28 flex gap-28 flex-col items-center">
      <div className="space-y-[10px] text-center">
        <h2 className="text-5xl text-text_color max-sm:max-w-[302px]">
          Meet Our Team
        </h2>
        <p className="text-second_text_color text-sm font-normal lg:max-w-[463px] max-sm:max-w-[302px] tracking-[0.2px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-3 w-full gap-[30px] max-sm:grid-cols-1">
        {Teams.map((team, index) => (
          <TeamCard key={index} {...team} />
        ))}
      </div>
    </MaxContentWidthWrapper>
  );
};

export default TeamSection;
