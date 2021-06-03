import React from "react";
import searchBackground from "assets/images/search.svg";
import Button from "components/Button";

function EmptyMessage({ renderCTAButton, createNewItem, tableType }) {
  return (
    <section className="p-6 flex flex-col justify-center items-center">
      <img
        className="h-72 w-72 object-cover"
        src={searchBackground}
        alt="Empty list"
      />
      <h1 className="font-semibold text-2xl mb-4 mt-8">
        Sorry, the list is empty{" "}
      </h1>
      <div>
        <Button onClick={createNewItem}>
          + New {renderCTAButton(tableType)}
        </Button>
      </div>
    </section>
  );
}

export default EmptyMessage;
