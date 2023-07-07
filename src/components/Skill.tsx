interface Props {
  skill: {
    label: string;
    percent: string;
  };
}

const PercentToWord = ({ percent }: { percent: string }) => {
  const intPercent = parseInt(percent);
  let percentWord = "";
  if (intPercent >= 0 && intPercent <= 20) {
    percentWord = "Fundamental Awareness";
  } else if (intPercent >= 25 && intPercent <= 50) {
    percentWord = "Novice";
  } else if (intPercent >= 50 && intPercent <= 75) {
    percentWord = "Intermediate";
  } else if (intPercent >= 75 && intPercent <= 95) {
    percentWord = "Advanced";
  } else if (intPercent >= 100) {
    percentWord = "Expert";
  }
  return <p className="text-sm md:text-base">{percentWord}</p>;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="w-full dark:text-gray-200">
      <div className="flex justify-between font-[500] items-center">
        <p>{skill.label}</p>
        <PercentToWord percent={skill.percent} />
      </div>
      <div className="w-full h-2 bg-blue-200 rounded-full relative">
        <span
          className=" bg-blue-500 h-2 absolute rounded-full"
          style={{ width: `${skill.percent}%` }}
        ></span>
      </div>
    </div>
  );
};

export default Skill;
