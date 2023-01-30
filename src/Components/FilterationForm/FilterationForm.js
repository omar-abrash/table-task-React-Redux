// import React from 'react'
import { useState } from "react";
import InputElement from "../UI/InputElement";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { mainDataSliceActions } from "../../redux/mainData-slice";
import { filterationType } from "../../utility/utility";
import { gettingData } from "../../thuncks/thuncks";

import Button from "../UI/Button";

import classes from "./FilterationForm.module.css";

const FilterationForm = () => {
  const [formData, setFormData] = useState({
    logId: "",
    applicationType: "",
    applicationId: "",
    actionType: "",
    date: "",
  });
  // deConstruction formData
  const { logId, applicationType, applicationId, actionType, date } = formData;
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  //
  const logIdChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, logId: evet.target.value };
    });
  };
  const appTypeChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, applicationType: evet.target.value };
    });
  };
  const appIdChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, applicationId: evet.target.value };
    });
  };
  const actionTypeChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, actionType: evet.target.value };
    });
  };
  const dateChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, date: evet.target.value };
    });
  };
  //
  const submitHandler = (evet) => {
    evet.preventDefault();
    // we can make validation in this point if we need that
    // determind the type,value of Filteration
    const filterType = filterationType(formData);
    console.log(filterType);
    if (!filterType) {
      dispatch(gettingData(dispatch));
      return;
    }
    //
    dispatch(mainDataSliceActions.dataFilteration(filterType));

    naviagate("/page1", { Replace: false });
  };
  //
  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler}>
        <InputElement
          id="logId"
          type="text"
          name="LOG ID"
          value={logId}
          onChange={logIdChangeHandler}
          placeholder="Log ID Number"
        />

        <InputElement
          isSelect={true}
          id="appType"
          name="Application Type"
          onChange={appTypeChangeHandler}
          value={applicationType}
          className={classes.select}
          optionArray={[
            "",
            "-/-",
            "CERT_TITLE_DEED_PLOT",
            "LEASE_REGISTRATION",
            "ADD_POA",
            "ADD_COMPANY",
            "ADD_COMPANY_EMPLOYEE",
            "CERT_PROP_OWNERSHIP",
          ]}
        />

        <InputElement
          id="appId"
          type="text"
          name="Application ID"
          value={applicationId}
          onChange={appIdChangeHandler}
          placeholder="Application ID Number"
        />

        <InputElement
          isSelect={true}
          id="actionType"
          name="Action Type"
          onChange={actionTypeChangeHandler}
          value={actionType}
          className={classes.select}
          optionArray={[
            "",
            "DARI_REFRESH_TOKEN",
            "DARI_APP_LOGIN",
            "INITIATE_APPLICATION",
            "SUBMIT_APPLICATION",
            "ADD_EMPLOYEE",
          ]}
        />

        <InputElement
          id="date"
          type="date"
          name="Date : Time"
          value={date}
          onChange={dateChangeHandler}
        />

        <Button type="submit" className={classes.btn}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default FilterationForm;
