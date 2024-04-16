import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import companylogo from "./company.png";

const WorkExp = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://www.innomatics.in/" target="_blank">
                <Avatar size="lg" src={companylogo} alt="user 1" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col  text-blue-900">
              <Typography variant="h5" className="font-bold">
                C2P Ventures
              </Typography>
              <Typography className="font-bold text-gray-900 my-2" color="white">
                Full Stack Web Developer Intern <br /> Aug 2023 - Present
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul color="gary" className="list-disc font-sans ml-5 text-black text-base">
              <li>Worked on various projects using MERN stack.</li>
              <li>Developed Application Using Web framework.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
