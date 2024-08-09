import React from "react";
import Header from "./header/Header";

export default function MainLayout(props: { children: any }) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
