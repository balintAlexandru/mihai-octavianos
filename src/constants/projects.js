import { IMAGE } from "../helpers/globalImages";

export const PROJECTS = [
  {
    id: 1,
    name: "Project 1",
    image: IMAGE.PROJECT_1,
    height: "20rem",
    projectData: {
      name: "Project 1",
      info: "",
      content: [
        {
          image: IMAGE.PROJECT1_PHOTO_1,
          height: "30rem",
        },
        {
          image: IMAGE.PROJECT1_PHOTO_2,
          height: "30rem",
        },
        {
          image: IMAGE.PROJECT1_PHOTO_3,
          height: "30rem",
        },
      ],
      nextProjectImage: IMAGE.PROJECT_2,
      projectLink: "2",
    },
  },
];
