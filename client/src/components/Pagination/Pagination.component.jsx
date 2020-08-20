import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Container, ButtonContainer } from "./pagination.styles";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import { isFetching, currentPage } from "../../redux/actions/index";
import useWidth from "../../hooks/useWidth.hooks";

const Pagination = ({
  api,
  data,
  actor,
  history,
  location,
  isFetching,
  currentPage,
  setCurrentPage,
}) => {
  const [buttons, setButtons] = useState(null);
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(20);
  // const [currentPage, setCurrentPage] = useState(1);
  const totalPages = data ? data.total_pages : null;
  const width = useWidth().width;
  const changeLocation = () => {
    const loc = location.pathname;

    const split = loc.split("/");
    return loc.replace(split[split.length - 1], currentPage);
  };
  console.log(currentPage);

  useEffect(() => {
    setCurrentPage(1);
    history.push(changeLocation());
    if (width <= 500) {
      setAmount(5);
    } else if (width <= 700) {
      setAmount(10);
    }
  }, []);

  useDidUpdateEffect(() => {
    const fetchData = async () => {
      if (actor) {
        console.log("im here");

        isFetching(true);

        await api(actor, currentPage);

        isFetching(false);
      } else {
        isFetching(true);
        await api(currentPage);
        isFetching(false);
      }
      history.push(changeLocation());
    };
    fetchData();
    // displayPage(1);
  }, [currentPage]);

  useEffect(() => {
    let amountOfButtons = [];

    for (let i = count; i <= totalPages; i++) {
      amountOfButtons.push(i);
    }
    setButtons(amountOfButtons);
  }, [currentPage, totalPages]);

  const changeCounter = (type) => {
    const difference = currentPage - amount / 2;

    if (difference > 0 && totalPages - currentPage >= amount / 2) {
      type === "next"
        ? setCount((value) => ++value)
        : setCount((value) => --value);
    }
  };
  const changeCounterForJump = (page) => {
    const difference = page - amount / 2;

    if (difference >= 0 && totalPages - page >= 10) {
      setCount(difference + 1);
    } else if (totalPages - page < 10 && page > amount / 2) {
      setCount(totalPages - 10 - 10);
    } else {
      setCount(1);
    }
  };

  const prev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const first = (setCount) => {
    setCurrentPage(1);
    setCount(1);
  };

  const next = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, totalPages));
  };

  const last = (setCount) => {
    setCurrentPage(totalPages);
    if (totalPages === 5) {
      setCount(totalPages - 4);
    } else {
      setCount(totalPages - 19);
    }
  };

  const bold = (page) => {
    //
    //
    //

    return page == currentPage
      ? { fontWeight: "700", background: "var(--secondary-color-lightest)" }
      : null;
  };

  return (
    <Container>
      <ButtonContainer onClick={() => prev(count, changeCounter("prev"))}>
        <div>&#8592;</div> Prev
      </ButtonContainer>
      <ButtonContainer onClick={() => first(setCount)}>First</ButtonContainer>
      {buttons && buttons.length > amount
        ? buttons.slice(0, amount).map((page) => {
            return (
              <div key={page} className="hiiii" style={{ ovderflow: "hidden" }}>
                <ButtonContainer
                  style={bold(page)}
                  onClick={() => {
                    jump(page);
                    changeCounterForJump(page);
                  }}
                >
                  {page}
                </ButtonContainer>
              </div>
            );
          })
        : buttons &&
          buttons.map((page) => {
            return (
              <div className="hiiii" style={{ ovderflow: "hidden" }}>
                <ButtonContainer
                  style={bold(page)}
                  onClick={() => jump(page, changeCounter())}
                >
                  {page}
                </ButtonContainer>
              </div>
            );
          })}
      <ButtonContainer onClick={() => last(setCount)}>Last</ButtonContainer>
      <ButtonContainer onClick={() => next(count, changeCounter("next"))}>
        Next
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    isFetching: (bool) => isFetching(bool),
    setCurrentPage: (page) => currentPage(page),
  })
)(Pagination);
