import React from "react";
import { uuid } from "uuidv4";
import { FaSortAmountUp } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import TableHeader from "./TableHeader";
import Button from "components/Button";
import TableItem from "./TableItem";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "components/LoadingSpinner";

function Table({
  headerItems,
  tableType,
  addtionalPath,
  formattedItems,
  originalItems,
  createNewItem,
  handleCheckItem,
}) {

  const renderCTAButton = (tableType) => {
    switch (tableType) {
      case "lessons":
        return "Lesson";
      case "courses":
        return "Course";
      case "announcments":
        return "Announcement";
      default:
        return "";
    }
  };

  let renderedItems = !formattedItems
    ? undefined
    : formattedItems.map((item, i) => {
      return (
        <TableItem
          item={item}

          key={originalItems[i]._id || uuid()}
          to={addtionalPath ? `/${addtionalPath}/${originalItems[i].slug}` : `/${originalItems[i].slug}`}
          isEven={i % 2 === 0}
          handleCheckItem={handleCheckItem}
          id={originalItems[i]._id}
        />
      );
    });

  return (
    <table className="w-full ">
      {renderedItems ? (
        renderedItems.length === 0 ? (
          <EmptyMessage
            renderCTAButton={renderCTAButton}
            createNewItem={createNewItem}
            tableType={tableType}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-10 mt-6">
              <div className="flex items-center cursor-pointer">
                <FaSortAmountUp className="mr-4" />
                <span className="mr-2">Sort By</span>
                <BiChevronDown />
              </div>
              <div>
                <Button onClick={createNewItem}>
                  + New {renderCTAButton(tableType)}
                </Button>
              </div>
            </div>
            <TableHeader headerItems={headerItems} tableType={tableType} />
            {renderedItems}
          </>
        )
      ) : (
        <LoadingSpinner />
      )}
    </table>
  );
}

export default Table;
