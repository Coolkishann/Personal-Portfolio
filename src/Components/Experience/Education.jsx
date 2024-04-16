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
// import university from "./assets/university.png";


const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://banner2.cleanpng.com/20180509/lqq/kisspng-university-of-mumbai-alkesh-dinesh-mody-institute-5af2a63dc98cd9.9610869015258517098256.jpg"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              Mumbai University
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="white" className="font-semibold text-black">
            Bachelor of Science , Computer Science 
            <br /> 2022 - Present
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://vivacollege.org/images/vivalogon.png"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              Viva College
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
              Higher Secondary School, Science <br /> 2020 - 2022
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://vidyavaridhividyalaya.in/img/logo.png"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              Vidya Varidhi Vidyalaya
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
            Secondary School Certificate (SSC)  <br /> 2019 - 2020
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
