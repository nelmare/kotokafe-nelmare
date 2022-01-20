import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StyledStarsList, StarList, StarItem } from "./styles";
import { AppRoute } from "/src/const";

function StarsList({ stars, level }) {
  return (
    <StyledStarsList>
      {stars && stars.length ? (
        <>
          <Title level={TitleLevel.H2}>Наши звёзды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
        </>
      ) : null}
      <Button minWidth={353} link={AppRoute.BUY}>
        Купить билет
      </Button>
    </StyledStarsList>
  );
}

export default StarsList;
