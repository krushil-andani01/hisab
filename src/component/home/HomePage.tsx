import React from "react";
import HCard from "./HCard";
import AddCustomerButton from "../customer/AddCustomerButton";

export default function HomePage() {
  return (
    <div>
      <HCard />
      <div>
        <AddCustomerButton />
      </div>
    </div>
  );
}
