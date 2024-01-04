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
                src="https://upload.wikimedia.org/wikipedia/en/7/7a/University_of_Mumbai_coat_of_arms.svg"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              Marwadi Education Foundation's Group of Institutions
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
