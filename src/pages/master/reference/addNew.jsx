// import React from "react";
import { useNavigate } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextArea from "../../../components/TextArea";
import TextInput from "../../../components/TextInput";

export default function AddNewReference() {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Reference"}
            textThird={"Add New Lookup"}
            urlSecond={"/master/reference"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Add New Lookup</h5>
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Code"}
                  type={"text"}
                  className={"form-control"}
                  id={"code"}
                  placeholder={"Code..."}
                />
              </div>
              <div className="mb-3">
                <TextArea
                  label={"Description"}
                  type={"text"}
                  className={"form-control"}
                  id={"description"}
                  placeholder={"Description..."}
                  rows={3}
                />
              </div>
              <hr />
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Detail</h5>
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Lookup Code"}
                  type={"text"}
                  className={"form-control"}
                  id={"code"}
                  placeholder={"Lookup Code..."}
                />
              </div>
              <div className="row mb-3">
                <div className="col-12 col-lg-3">
                  <TextInput
                    label={"Lookup Value 1"}
                    type={"text"}
                    className={"form-control"}
                    id={"value1"}
                    placeholder={"Value..."}
                  />
                </div>
                <div className="col-12 col-lg-3">
                  <TextInput
                    label={"Lookup Value 2"}
                    type={"text"}
                    className={"form-control"}
                    id={"value2"}
                    placeholder={"Value..."}
                  />
                </div>
                <div className="col-12 col-lg-3">
                  <TextInput
                    label={"Lookup Value 3"}
                    type={"text"}
                    className={"form-control"}
                    id={"value3"}
                    placeholder={"Value..."}
                  />
                </div>
                <div className="col-12 col-lg-3">
                  <TextInput
                    label={"Lookup Value 1"}
                    type={"text"}
                    className={"form-control"}
                    id={"value4"}
                    placeholder={"Value..."}
                  />
                </div>
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Display Lookup"}
                  type={"text"}
                  className={"form-control"}
                  id={"displayLookup"}
                  placeholder={"Display Lookup..."}
                />
              </div>
              <div className="text-center">
                <CButton
                  className={"btn btn-primary"}
                  action={() => navigate("/master/reference/1234")}
                >
                  Save
                </CButton>
              </div>
            </div>
          </CCard>
        </div>
      </div>
    </>
  );
}
