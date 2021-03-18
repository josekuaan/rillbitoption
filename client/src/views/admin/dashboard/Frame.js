import React from "react";
import { Link } from "react-router-dom";
export default function Frame() {
  return (
    <div
      style={{
        height: 560,
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        boxSizing: "border-box",
        border: "1px solid #56667F",
        borderRadius: 4,
        textAlign: "right",
        lineHeight: 14,
        fontSize: 12,
        fontFeatureSettings: "normal",
        textSizeAdjust: "100%",
        boxShadow: "inset 0 -20px 0 0 #56667F",
        padding: 0,
        margin: 0,
        width: "100%",
      }}
    >
      <div style={{ height: 540, padding: 0, margin: 0, width: "100%" }}>
        <iframe
          src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
          width="100%"
          height="536px"
          scrolling="auto"
          marginWidth={0}
          marginHeight={0}
          frameBorder={0}
          border={0}
          style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
        />
      </div>
      <div
        style={{
          color: "#FFFFFF",
          lineHeight: 14,
          fontWeight: 400,
          fontSize: 11,
          boxSizing: "border-box",
          padding: "2px 6px",
          width: "100%",
          fontFamily: "Verdana, Tahoma, Arial, sans-serif",
        }}
      >
        <Link
          to="https://coinlib.io"
          target="_blank"
          style={{
            fontWeight: 500,
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: 11,
          }}
        >
          ©
        </Link>
        &nbsp;Rillbit Option
      </div>
    </div>
  );
}
