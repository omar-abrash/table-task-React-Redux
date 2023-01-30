// import React from 'react'
import Button from "../UI/Button";
import classes from "./Table.module.css";
import { BiChevronsUp, BiChevronsDown } from "react-icons/bi";

const Table = ({ subArray, onClickSorting, isSorting }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>
            Log ID
            <Button sort={true} onClick={onClickSorting}>
              {isSorting ? <BiChevronsDown /> : <BiChevronsUp />}
            </Button>
          </th>
          <th>
            Application Type
            <Button sort={true} onClick={onClickSorting}>
              {isSorting ? <BiChevronsDown /> : <BiChevronsUp />}
            </Button>
          </th>
          <th>
            Application ID
            <Button sort={true} onClick={onClickSorting}>
              {isSorting ? <BiChevronsDown /> : <BiChevronsUp />}
            </Button>
          </th>
          <th>
            Action Type
            <Button sort={true} onClick={onClickSorting}>
              {isSorting ? <BiChevronsDown /> : <BiChevronsUp />}
            </Button>
          </th>
          <th>
            Action Details
            <Button sort={true} onClick={onClickSorting}>
              {isSorting ? <BiChevronsDown /> : <BiChevronsUp />}
            </Button>
          </th>
          <th>
            Date : Time
            <Button sort={true} onClick={onClickSorting}>
              {isSorting ? <BiChevronsDown /> : <BiChevronsUp />}
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {subArray.map((element) => (
          <tr key={element.logId}>
            <td>{element.logId}</td>
            <td>
              {element.applicationType === null
                ? "-/-"
                : element.applicationType}
            </td>
            <td>
              {element.applicationId === null ? "-/-" : element.applicationId}
            </td>
            <td>{element.actionType}</td>
            <td>-/-</td>
            <td>{element.creationTimestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
