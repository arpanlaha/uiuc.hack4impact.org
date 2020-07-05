// Data for the Sp20 GLEN World Project
const name = "GLEN World";
const id = "glenworld";
const detail = "How might we empower teachers to create their own custom lesson plans for GLEN Learn to provide more personalized education for students?";
const coverImagePath = "/static/images/projects/sp20/glenworld/glenworld-cover.png";
const clientDetail =
  'GLEN World (GLobal ENglish) is a nonprofit that seeks to bridge the opportunity divide for young English Learners (ELs) from disadvantaged backgrounds. Their premier product is GLEN Learn, an app with curriculum devised by UCSB + CMU faculty that aims to bring children from "zero to reading."';
const clientLink =
  "https://glenworld.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "Currently, GLEN Learn has a suite of existing curriculum designed by the GLEN World team. Students work through a variety of guided lessons for vocabulary, phonology, and orthography, with interactive activities and stories. However, students that advance at different paces have no options to work faster or slower, according to their needs. Moreover, teachers are unable to assign lessons that may align with other curricula they are teaching in the classroom.";
const problemImagePath = "/static/images/projects/sp20/glenworld/glenworld-problem.png";
const solution =
  "Utilizing GLEN World's existing Admin Dashboard, we wanted to provide a web app that allows teachers to create their own custom lesson plans for GLEN Learn. Teachers will be able to select lesson types and word groups that auto-generates lessons that they can assign to students on specified dates. Students will then be able to access and work through these assignments on the GLEN Learn app!";
const solutionImagePath = "/static/images/projects/sp20/glenworld/glenworld-solution.png";
const features = [
  {
    title: "View Custom Lessons",
    detail:
      "Browse through previously created assignments and access information on their contents and assigned students. Students can navigate to the assignments page of GLEN Learn to work through assigned lessons at their own pace.",
    imgPath: "/static/images/projects/sp20/glenworld/glenworld-view.png"
  },
  {
    title: "Create New Lessons",
    detail:
      "Teachers can select from multiple lesson types, word groups, and words to generate a lesson that they assign to as many groups of students as they wish.",
    imgPath: "/static/images/projects/sp20/glenworld/glenworld-create.png"
  }
];

const featureImgSize = "8";
const techStack = ["react", "firebase"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/glen-world";
const team = {
  type: "pics",
  detail: [
    {
      name: "Rebecca Xun",
      role: "Product Manager"
    },
    {
      name: "Kelley Chau",
      role: "Tech Lead"
    },
    {
      name: "Prashant Pokhriyal",
      role: "Software Developer"
    },
    {
      name: "Gene Wang",
      role: "Software Developer"
    },
    {
      name: "Angela Luo",
      role: "Software Developer"
    },
    {
      name: "Lam Tran",
      role: "Software Developer"
    },
    {
      name: "Anisha Rao",
      role: "Product Designer"
    }
  ]
};

export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  previousLink,
  team,
  featureImgSize
};
