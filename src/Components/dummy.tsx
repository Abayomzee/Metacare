import Calender from "Components/Atoms/SvgIcons/Calender";
import Check from "Components/Atoms/SvgIcons/Check";
import Users from "Components/Atoms/SvgIcons/Users";
import Comment from "Components/Atoms/SvgIcons/Comment";
import Clock from "Components/Atoms/SvgIcons/Clock";

export const sideNavigationMenus = [
  {
    id: 1,
    icon: <Users />,
    label: "Admin",
    subMenus: [],
  },
  {
    id: 2,
    icon: <Check />,
    label: "Knowledge Base",
    subMenus: [],
  },
  {
    id: 3,
    icon: <Check />,
    label: "Train SAM",
    subMenus: [],
  },
  {
    id: 4,
    icon: <Calender />,
    label: "Agent Inbox",
    subMenus: [],
  },
  {
    id: 5,
    icon: <Clock />,
    label: "Help Center",
    subMenus: [],
  },
  {
    id: 6,
    icon: <Comment />,
    label: "Analytics",
    subMenus: ["Teams", "Knowledge Base", "Training SAM", "Help Center"],
  },
];

export const chartDataForTab = [
  {
    id: 1,
    title: "Average response Time",
    performance: "+4.14%",
    priorityType: 1,
    analyticCards: [
      {
        title: "Average Response Time",
        duration: "30 Mins",
      },
      {
        title: "Response Time",
        duration: "1 Hour 30 Mins",
      },
    ],
    chart: {
      options: {
        responsive: true,
      },
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "",
            data: [10, 15, 40, 17, 30, 25, 25, 23],
            borderColor: "rgb(240, 93, 35)",
            backgroundColor: "rgba(240, 93, 35, 0.5)",
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Replies per resolution ",
    performance: "+4.14%",
    priorityType: 2,
    analyticCards: [
      {
        title: "Average Time",
        duration: "30 Mins",
      },
      {
        title: "Response Time",
        duration: "1 Hour 30 Mins",
      },
    ],
    chart: {
      options: {
        responsive: true,
      },
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "",
            data: [10, 15, 40, 17, 30, 25, 25, 23],
            borderColor: "rgb(62, 104, 255)",
            backgroundColor: "rgba(62, 104, 255, 0.5)",
          },
        ],
      },
    },
  },
  {
    id: 3,
    title: "Average resolution time ",
    performance: "+4.14%",
    priorityType: 3,
    analyticCards: [
      {
        title: "Average Resolution Rate",
        duration: "30 Mins",
      },
      {
        title: "Response Time",
        duration: "1 Hour 30 Mins",
      },
    ],
    chart: {
      options: {
        responsive: true,
      },
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "",
            data: [10, 15, 40, 17, 30, 25, 25, 23],
            borderColor: "rgb(251, 100, 145)",
            backgroundColor: "rgba(251, 100, 145, 0.5)",
          },
        ],
      },
    },
  },
  {
    id: 4,
    title: "First contact resolution rate",
    performance: "+4.14%",
    priorityType: 4,
    analyticCards: [
      {
        title: "Average Contact Rate",
        duration: "30 Mins",
      },
      {
        title: "Response Time",
        duration: "1 Hour 30 Mins",
      },
    ],
    chart: {
      options: {
        responsive: true,
      },
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "",
            data: [10, 15, 40, 17, 30, 25, 25, 23],
            borderColor: "rgb(7, 201, 226)",
            backgroundColor: "rgba(7, 201, 226, 0.5)",
          },
        ],
      },
    },
  },
];
