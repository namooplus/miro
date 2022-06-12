import "./style.css";

interface TitleProps {
  content: string;
}

const Title = ({ content }: TitleProps) => {
  const element = document.createElement("h1");

  element.classList.add("title");
  element.textContent = content;

  return element;
};

document.body.appendChild(Title({ content: "MIR" }));
