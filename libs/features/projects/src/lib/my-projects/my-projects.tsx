import "./my-projects.scss";

import React, { FormEvent, useEffect, useState } from "react";
import { AladdinCard, AladdinSearchbar } from "@aladdin/ui-kit";
import ProjectCard from "../project-card/project-card";
import { ISearchForm } from "@aladdin/domain-models";

/**Things to do
 * User should be able to search their project and the project should filter
 * The number of cards should be defined on the number of projects we got from the bk to render the number of cards
 * Created a list of cards to map through,
 * Filter the value from the search bar if the value of the search bar is the same as the card name, then show 
 * 
 *

 */
export interface IProjectCard {
  name;
}

export const MyProjects: React.FC = () => {
  const text = [
    { name: "Zika" },
    { name: "Zuko" },
    { name: "Autumn" },
    { name: "Dig" },
  ];
  const [search, setSearch] = useState<IProjectCard[]>(text);
  const compare = (val, search) => {
    if (val.name.toLowerCase().includes(search.toLowerCase())) return val;
  };

  const renderCard = () => {
    if (!!search) {
      return search.map((val, i) => {
        return <ProjectCard name={val.name} />;
      });
    }
  };
  // useEffect(() => {
  //   console.log("send this data to api", search);
  // });

  return (
    <>
      <div className="d-flex">
        <h1>My Projects</h1>
        <AladdinSearchbar
          onCompare={compare}
          dataList={text}
          handleChange={(value: IProjectCard[]) => {
            setSearch(value);
          }}
        />
      </div>
      <AladdinCard classes="projects-card mt-3" fullWidth>
        <div className="d-flex">{renderCard()}</div>
      </AladdinCard>
    </>
  );
};
