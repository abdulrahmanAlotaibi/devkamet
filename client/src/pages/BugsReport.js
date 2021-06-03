import React, { useEffect, useState } from "react";
import * as bugsAPI from "shared/api/bugsAPI";
import Alert from "components/Alert";
import LoadingSpinner from "components/LoadingSpinner";
import Empty from "components/Empty";
import { v4 as uuidv4 } from "uuid";

function BugsReport() {
  const [bugsReport, setBugsReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllBugs();
  }, []);

  const getAllBugs = async () => {
    setIsLoading(true);

    const response = await bugsAPI.getAllBugsReport();

    setBugsReport(response.bugsReport);

    setIsLoading(false);

    setMessage(response.message);

    setIsError(response.status === "failed");
  };

  const renderedBugsReport = bugsReport?.map((bug) => (
    <li className="rounded-md shadow-md bg-black p-10  w-4/6" key={uuidv4()}>
      <div>
        <div className="font-semibold text-2xl mb-2">{bug.title}</div>
        <p className="font-normal">{bug.content}</p>
      </div>
    </li>
  ));

  return (
    <>
      {/* Display feedback message to the user */}
      {message && <Alert isError={isError} message={message} />}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul className="flex items-center justify-center">
          {renderedBugsReport ? renderedBugsReport : <Empty />}
        </ul>
      )}
    </>
  );
}

export default BugsReport;
