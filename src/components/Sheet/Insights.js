import React, { useState, useRef, useEffect, useContext } from "react";
import { GlobalContext } from "../../GlobalProvider";
import autoAnimate from "@formkit/auto-animate";

const Insights = () => {
  const [open, setOpen] = useState(false);
  const { selectedSheet } = useContext(GlobalContext);
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  //   const showInsights = () => setOpen(!open);
  const showInsights = () => {
    if (selectedSheet?.row?.key) {
    }
    setOpen(!open);
  };
  return (
    <>
      <div ref={parentRef} style={{ border: "1px solid black", width: "30%" }}>
        <div onClick={showInsights}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#5d6d7e",
              cursor: "pointer",
              margin: "10px",
              fontSize: "20px",
            }}
            className="HeaderBtn"
          >
            Insights
          </p>
        </div>
        {open &&
          `Highest ${selectedSheet?.row?.key} is ----- where ${selectedSheet?.col?.key} is ---------- and ${selectedSheet?.groupby?.key} is ---------`}
      </div>
    </>
  );
};
export default Insights;
