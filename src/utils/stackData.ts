import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiTypescript, SiPython, SiDjango, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: SiPython },
  { title: "Django", img: SiDjango },
];

export const stackLearningData = [
  {
    title: "NextJS",
    img: TbBrandNextjs,
  },
  {
    title: "TailwindCSS",
    img: SiTailwindcss,
  },
];