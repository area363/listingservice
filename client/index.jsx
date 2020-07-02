import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import styled from "styled-components";

import Header from "./components/Header.jsx";
import Desc from "./components/Desc.jsx";
import InfoCards from "./components/InfoCards.jsx";
import ContactHost from "./components/ContactHost.jsx";
import Host from "./components/Host.jsx";
import "./index.css";

const ListingDiv = styled.div`
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  box-sizing: border-box;
  font-weight: 400;
  font-family: "Calibre", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.42;
  color: #333333;
  background-color: white;
`;

const HeaderDiv = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1rem;
`;

const Container = styled.section`
  margin: 0;
  padding-top: 20px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  font-size: 1rem;
`;

const Overview = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  display: grid;
  grid-template-columns: 33% 67%;
  padding: 10px;
  grid-row: 2 / 1;
  font-size: 1rem;
`;

const Cards = styled.div`
  box-sizing: border-box;
  display: block;
  location: center;
`;

class ListingApp extends React.Component {
  constructor() {
    super();
    this.state = {
      site: "",
      mounted: false,
    };
  }

  componentDidMount() {
    var state = this;
    var id = window.location.pathname;
    if (id === "/") {
      console.log("Welcome!");
    } else if (state.state.site.id !== id) {
      $.get("http://52.79.61.49:3002/site" + id).then(function (res) {
        state.setState({ site: res });
        state.setState({ mounted: true });
      });
    }
  }

  render() {
    var state = this;
    if (state.state.mounted) {
      return (
        <div id="container">
          <ListingDiv>
            <HeaderDiv>
              <Header info={state.state.site.site} />
            </HeaderDiv>
            <Container>
              <Overview>
                <Host info={state.state.site} />
                <Desc info={state.state.site} />
              </Overview>
              <Cards>
                <InfoCards info={state.state.site} />
              </Cards>
              <ContactHost info={state.state.site} />
            </Container>
          </ListingDiv>
        </div>
      );
    } else {
      return null;
    }
  }
}

ReactDOM.render(<ListingApp />, document.getElementById("listing"));
