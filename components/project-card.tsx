import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import Card from "./card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import gbmobile from "@/public/images/gb-mobile.png";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  liveDemoLink: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectCard = ({
  name,
  description,
  technologies,
  liveDemoLink,
  githubLink,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="my-7 flex flex-col md:flex-row items-center justify-between gap-7">
      <div>
        <LockKeyhole className="w-4 h-4 mb-3 text-muted-foreground" />
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap justify-start items-center gap-2 my-6">
          {technologies.map((tech, index) => (
            <Badge key={index} className="bg-black ">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-start items-center mt-7">
          <Link href={liveDemoLink} target="_blank">
            <Button className="rounded-full">
              Live Demo <ArrowUpRight className="w-5 h5 ml-2" />
            </Button>
          </Link>
          <Link href={githubLink} target="_blank">
            <Button variant="ghost" className="rounded-full">
              See on Github <Github className="w-5 h5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={100}
        className="object-contain"
      />
    </Card>
  );
};

export default ProjectCard;
