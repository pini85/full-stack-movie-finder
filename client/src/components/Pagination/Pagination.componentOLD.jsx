import React, { useEffect, useState } from "react";
import { currentPage } from "../../redux/actions";

import { Container, ButtonContainer } from "./pagination.styles";
import { connect } from "react-redux";

const Pagination = props => {
  const [buttons, setButtons] = useState(null);

  useEffect(() => {
    let x = [];
    if (props.currentPageData < 10) {
      for (let i = 1; i <= props.totalPages; i++) {
        x.push(i);
      }
    }
    if (props.currentPageData > 9) {
      let number = 1;

      const addition = page => {
        for (let i = 10; i < page; i++) {
          console.log("im here");

          if (props.currentPageData + 9 >= props.totalPages) {
            console.log("im in", number);

            number = props.totalPages - 10 - 9;
            console.log("number", number);

            break;
          }

          number++;
          console.log(number);
        }
        return number;
      };
      for (let i = 0 + addition(); i <= props.totalPages; i++) {
        x.push(i);
      }
    }

    // if (currentPage === 10) {
    //   console.log("currentPage", currentPage);
    //   for (let i = 1; i <= totalPages; i++) {

    //     x.push(i + 1);
    //   }
    // }
    // if (currentPage === 11) {
    //   console.log("currentPage", currentPage);
    //   for (let i = 1; i <= totalPages; i++) {
    //     debugger;
    //     x.push(i + 2);
    //   }
    // }

    setButtons(x);
  }, [props.active, props.currentPageData]);
  const bold = page =>
    page === props.currentPageData
      ? { fontWeight: "700", background: "var(--secondary-color-lightest)" }
      : null;

  return (
    <Container>
      <ButtonContainer onClick={props.prev}>
        <div>&#8592;</div> Prev
      </ButtonContainer>
      <ButtonContainer onClick={props.first}>First</ButtonContainer>
      {buttons && buttons.length > 20
        ? buttons.slice(0, 20).map(page => {
            return (
              <div className="hiiii" style={{ ovderflow: "hidden" }}>
                <ButtonContainer
                  style={bold(page)}
                  onClick={e => props.jump(page, e)}
                >
                  {page}
                </ButtonContainer>
              </div>
            );
          })
        : buttons &&
          buttons.map(page => {
            return (
              <div className="hiiii" style={{ ovderflow: "hidden" }}>
                <ButtonContainer
                  style={bold(page)}
                  onClick={e => props.jump(page, e)}
                >
                  {page}
                </ButtonContainer>
              </div>
            );
          })}
      <ButtonContainer onClick={props.last}>Last</ButtonContainer>
      <ButtonContainer onClick={props.next}>Next</ButtonContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentPageData: state.currentPage
});

export default connect(mapStateToProps, {
  currentPage: currentPage
})(Pagination);
