import easycargo from "@/public/images/easycargo.png";
import kingscourt from "@/public/images/kingscourt.png";
import tenmg from "@/public/images/10mg.png";
import kma from "@/public/images/kma.png";
import gbmobile from "@/public/images/gb-mobile.png";
import pz from "@/public/images/pz.png";
import gbweb from "@/public/images/gb-web.png";
import storefront from "@/public/images/storefront.png";
import ProjectCard from "./project-card";

const Projects = () => {
  const projectData = [
    {
      name: "Kingscourt Realtors Ltd.",
      description: `This is a real estate platform for buying and selling of properties.`,
      technologies: [
        "NextJs 13",
        "React",
        "React Query",
        "Firebase",
        "Firestore",
        "Tailwind",
        "Firebase Auth",
        "Shadcn-ui",
      ],
      liveDemoLink: "https://www.kingscourtrealtors.com/",
      githubLink: "https://www.kingscourtrealtors.com/",
      imageUrl: kingscourt.src,
    },
    {
      name: "Easycargo Africa Ltd.",
      description: `This app is a logisitics platform for sending and receiving goods. 
      This app is developed to help businesses to easily manage their logistics activities. 
      This app is developed with Flutter for both iOS and Android and Nextjs for the Web version.`,
      technologies: [
        "NextJs 13",
        "React",
        "Stripe",
        "Mux",
        "Prisma",
        "Tailwind",
        "MySQL",
        "Shadcn-ui",
      ],
      liveDemoLink: "https://www.easycargoafrica.com/",
      githubLink: "https://www.easycargoafrica.com/",
      imageUrl: easycargo.src,
    },
    {
      name: "10mg Pharma Website",
      description: `This is a website developed for a pharmaceutical company. This company helps improve the quality 
      life of people suffering from chronic pains. They are doing this through AI-driven financing with innovative and 
      effective pharmaceutical solutions.`,
      technologies: ["React", "Tailwind"],
      liveDemoLink: "https://10mg.co.uk",
      githubLink: "https://github.com/greenbii/10mg_revamp.git",
      imageUrl: tenmg.src,
    },
    {
      name: "Krizbeatz Music Academy",
      description: `This app is a platform for music enthusiast who wants to learn how to make music online with live classes. This classes are taken by Krizbeatz the Drummerboy himself.`,
      technologies: [
        "React",
        "Paystack",
        "Google Classroom",
        "Tailwind",
        "Supabase",
        "Shadcn-ui",
        "Python",
      ],
      liveDemoLink: "https://krizbeatzmusicacademy.com/",
      githubLink: "https://github.com/WAWSOUNDS/kma-app.git",
      imageUrl: kma.src,
    },
    {
      name: "Greenbii Mobile App",
      description:
        "This app is an ERM Platform for businesses to manage their business activities. This app helps businesses to also manage their employees, office tasks, to mention a few. The app was developed with Flutter for both iOS and Android.",
      technologies: [
        "Flutter",
        "Dart",
        "AWS Cognito",
        "AWS Amplify",
        "dio",
        "Rest",
        "Provider",
      ],
      liveDemoLink: "https://greenbii.com/",
      githubLink: "https://greenbii.com/",
      imageUrl: gbmobile.src,
    },
    {
      name: "Power Zone Batteries Website",
      description:
        "This website is a personal website for Cleanmeter Systems for distribution of Solar batteries to its customers. I teamed up with the Cleanmeter developer team to develop this website.",
      technologies: ["Astro", "Python", "FastApi", "Firestore", "Tailwind"],
      liveDemoLink: "https://www.powerzone.energy/",
      githubLink: "https://www.powerzone.energy/",
      imageUrl: pz.src,
    },
    {
      name: "Greenbii ERP Sofware",
      description:
        "This website is developed to cater for businesses to easily manage their business activities. I am part of the Greenbii team as at when this website was developed. We came together to work in a sprint in other to achieve this working software.",
      technologies: [
        "Angular",
        "Typescript",
        "NodeJs",
        "AWS",
        "HTML",
        "Bootstrap",
        "CSS",
      ],
      liveDemoLink: "https://greenbii.com/",
      githubLink: "https://greenbii.com/",
      imageUrl: gbweb.src,
    },
    {
      name: "Greenbii Storefront Sofware",
      description:
        "This is an Ecommerce platform for users to buy and sell. Users can easily make payment before delivery or on delivery and each order made is being managed by the store owner who is entitled to a dashboard. This web app was made privately for Greenbii as part of their software collections.",
      technologies: [
        "Nextjs App Router",
        "Typescript",
        "React",
        "React Query",
        "Tailwind",
        "Shadcn-ui",
      ],
      liveDemoLink: "https://app.greenbii.com/auth/app/storefront_cikvm",
      githubLink: "https://app.greenbii.com/auth/app/storefront_cikvm",
      imageUrl: storefront.src,
    },
  ];

  return (
    <div className="px-0 pt-20">
      <h1 className="text-4xl font-bold">
        All my <br />
        Projects
      </h1>
      <p className="w-full md:w-1/2 text-muted-foreground">
        Here are some selected projects that showcase my passion for software
        development
      </p>

      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          liveDemoLink={project.liveDemoLink}
          githubLink={project.githubLink}
          imageUrl={project.imageUrl!}
        />
      ))}
    </div>
  );
};

export default Projects;
