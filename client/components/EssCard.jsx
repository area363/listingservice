import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire, faToiletPaper, faDog} from '@fortawesome/free-solid-svg-icons';

const CardDiv = styled.div`
  margin: 0 10px 20px 10px;
  position: relative;
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 15px 5px 15px 15px;
  flex-wrap: wrap;
  line-height: 1.2;
  width: 190px;
  height: 340px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08) !important;
`;

const CardTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 4px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  position: relative;
`;

const VertIcon = styled.div`
`;

const Icon = styled.div`
  position: relative;
  margin-right: 10px;
`;

const IconInfo = styled.span`
  font-size: 1.4rem;
`;

const CardText = styled.div`
  font-size: 1rem;
  line-height: 2rem;
`;

const MoreInfo = styled.div`
  position: absolute;
  bottom: 15px;
  left: 18px;
  color: #40d9ac;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
`;

const MoreInfoText = styled.a`
  cursor: pointer;
  color: #40d9ac;
  font-weight: 500;
  font-size: 1rem;
`;

const EssCard = function(props) {
  return (
    <CardDiv>
      <CardTitle>{props.name}</CardTitle>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faFire}/>
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.fire}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faToiletPaper}/>
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.toilet}</CardText>
      </Info>
      <Info>
        <VertIcon>
          <Icon>
            <IconInfo>
              <FontAwesomeIcon icon={faDog}/>
            </IconInfo>
          </Icon>
        </VertIcon>
        <CardText>{props.cardInfo.pets}</CardText>
      </Info>
      <MoreInfo>
        <MoreInfoText onClick={(e, name, cardInfo ) => props.handleClick(e, props.name, props.cardInfo) }>More details</MoreInfoText>
      </MoreInfo>
    </CardDiv>
  );
};

export default EssCard;