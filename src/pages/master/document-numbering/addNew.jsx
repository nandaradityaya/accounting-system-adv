// import React from "react";
import { useNavigate } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextArea from "../../../components/TextArea";
import TextInput from "../../../components/TextInput";

export default function AddNewNumbering() {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Document Numbering"}
            textThird={"Add New Document"}
            urlSecond={"/master/documen-numbering"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Add New Document</h5>
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Company"}
                  type={"text"}
                  className={"form-control"}
                  id={"company"}
                  placeholder={"Company..."}
                />
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
              <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Prefix"}
                    type={"text"}
                    className={"form-control"}
                    id={"prefix"}
                    placeholder={"Prefix..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Sufix"}
                    type={"text"}
                    className={"form-control"}
                    id={"sufix"}
                    placeholder={"Sufix..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Length of Number"}
                    type={"text"}
                    className={"form-control"}
                    id={"lengthOfNumber"}
                    placeholder={"Length of Number..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Reset By"}
                    type={"text"}
                    className={"form-control"}
                    id={"resetBy"}
                    placeholder={"Reset By..."}
                  />
                </div>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Detail</h5>
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Period"}
                  type={"text"}
                  className={"form-control"}
                  id={"period"}
                  placeholder={"Period..."}
                />
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Last Number"}
                  type={"number"}
                  className={"form-control"}
                  id={"lastNumber"}
                  placeholder={"Last Number..."}
                />
              </div>

              <div className="text-center">
                <CButton
                  className={"btn btn-primary"}
                  action={() => navigate("/master/document-numbering/1234")}
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
