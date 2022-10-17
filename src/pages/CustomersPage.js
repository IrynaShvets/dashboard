import { useState } from "react";
import { Button } from "@mui/material";
import CustomerForm from "../components/Customer/CustomerForm";
import CustomerList from "../components/Customer/CustomerList";
import FilterCustomer from "../components/Customer/FilterCustomer";
import Title from "../components/Title";
import "../styles/_customersPage.scss";

function CustomersPage() {
  const [isActive, setIsActive] = useState(false);
  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };
  return (
    <>
      <div
        onClick={handleInputFocus}
        style={{
          cursor: "pointer",
        }}
      >
        <Title title="All Customers" />
      </div>
      <p className="activeMembers">Active Members</p>

      {isActive && (
        <>
          <Button
            type="button"
            variant="outlined"
            onClick={handleInputBlur}
            sx={{ ml: 5 }}
          >
            Go out
          </Button>
          <CustomerForm />
        </>
      )}

      {!isActive && (
        <>
          <FilterCustomer />
          <CustomerList />
        </>
      )}
    </>
  );
}

export default CustomersPage;
