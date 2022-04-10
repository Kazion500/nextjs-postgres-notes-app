import { useRef, useState, UIEvent } from "react";
import PlusButton from "components/atoms/PlusButton";
import Layout from "components/organisms/Layout";
import type { NextPage } from "next";
import Card from "components/molecules/Card";
import { CardProps } from "components/molecules/Card/Card.types";
import { FiChevronRight } from "react-icons/fi";
import DetailListItem from "components/atoms/DetailListItem";
import Badge from "components/atoms/Badge";
import Editor from "components/organisms/Editor";

const data = [
  {
    title: "Exploration Ideas 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corporis? Exercitationem culpa incidunt",
    date: "20 Apr",
    active: true,
  },
  {
    title: "Exploration Ideas 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corporis? Exercitationem culpa incidunt",
    date: "10 Apr",
  },
  {
    title: "Exploration Ideas 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corporis? Exercitationem culpa incidunt",
    date: "20 Apr",
  },
  {
    title: "Exploration Ideas 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corporis? Exercitationem culpa incidunt",
    date: "10 Apr",
  },
  {
    title: "Exploration Ideas 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam corporis? Exercitationem culpa incidunt",
    date: "09 Apr",
  },
];

const Home: NextPage = () => {
  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>()?.current;

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    console.log(scrollRef);
    console.log(e);

    // if (scrollRef?.scrollY > 0) {
    //   setScroll(true);
    // } else {
    //   setScroll(false);
    // }
  };

  return (
    <Layout>
      <section className="w-[360px] h-screen overflow-y-scroll no-scrollbar">
        <div
          onScroll={handleScroll}
          className={`sticky top-0  p-4 bg-white ${scroll ? "shadow-md" : ""}`}
        >
          <h1 className="text-4xl">My Notes</h1>
          <PlusButton />
        </div>
        <div className="space-y-5 p-4 ">
          {data.map((item: CardProps) => (
            <Card {...item} key={item.title} />
          ))}
        </div>
      </section>
      <section className="flex-1 border-l h-screen p-10 overflow-hidden">
        <div className="flex items-center gap-1 text-lg tracking-wider ">
          <span>My Notes</span>
          <FiChevronRight />
          <span>System Database week 4</span>
        </div>
        <div className="h-[2px] bg-muteColor-200 my-7" />
        <div>
          <h4 className="text-4xl font-semibold">System Database week 4</h4>
          <div>
            <DetailListItem title="Created by" value="Patrick Kabwe" />
            <DetailListItem
              title="Last Modified"
              value="19 April 2021,20:50 PM"
            />
            <DetailListItem
              title="Tags"
              value={
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((v) => (
                    <Badge title="College" key={v} />
                  ))}
                </div>
              }
            />
          </div>
        </div>
        <Editor editorClassName="overflow-y-scroll max-h-[calc(100vh-400px)] no-scrollbar" />
      </section>
    </Layout>
  );
};

export default Home;
