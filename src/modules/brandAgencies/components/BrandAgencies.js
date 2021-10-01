import React, { useState } from "react";
import { CProgress } from "@coreui/react";
import { CRow, CCol } from "@coreui/react";
import { useHistory } from "react-router";
import MockupUpload from "./MockupUpload";
const BrandAgencies = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h4>Brands And Agencies</h4>
        </div>
        <div className="col-sm-6">
          <div className="float-right">
            <a
              className="btn btn-outline-warning "
              onClick={() => history.push("/approve-brand")}
            >
              Approve Brand
            </a>
            <a
              className="btn btn-outline-warning ml-2"
              onClick={() => history.push("/create-brand-agency")}
            >
              Add Brand
            </a>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <CRow className="text-center">
          <CCol md sm="12" className="mb-sm-2 mb-0"></CCol>
          <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
            <div className="text-muted">Today</div>
            <strong>24.093 Users (20%)</strong>
            <CProgress
              className="progress-xs mt-2"
              precision={1}
              color="info"
              value={40}
            />
          </CCol>
          <CCol md sm="12" className="mb-sm-2 mb-0">
            <div className="text-muted">Monthly</div>
            <strong>78.706 Views (60%)</strong>
            <CProgress
              className="progress-xs mt-2"
              precision={1}
              color="warning"
              value={40}
            />
          </CCol>
          <CCol md sm="12" className="mb-sm-2 mb-0">
            <div className="text-muted">Total</div>
            <strong>22.123 Users (80%)</strong>
            <CProgress
              className="progress-xs mt-2"
              precision={1}
              color="danger"
              value={40}
            />
          </CCol>
          <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none"></CCol>
        </CRow>
      </div>
      <table className="table table-hover table-outline mb-0 d-none d-sm-table mt-3 tbl-brand">
        <thead className="thead-light">
          <tr>
            <th className="text-center">S.N.</th>
            <th className="text-center">Contact</th>
            <th className="text-center">Personal Informattion</th>
            <th className="text-center">Car Informaion</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">01</td>
            <td>
              <p>Phone:01753109207</p>
              <p>Email:mridha@gmail.com</p>
            </td>

            <td className="text-center">
              <p>Name: N.islam Mridha</p>
              <p>Address: Bagerhat, Khulna</p>
            </td>
            <td>
              <p>Car Model: Corola-123</p>
              <p>Reg No.: H dhakka metro-123</p>
            </td>
            <td>
              <a
                className="btn btn-secondary btn-sm"
                onClick={() => setModalShow(true)}
              >
                <i className="fa fa-eye"></i>
              </a>
              <a
                className="btn btn-secondary btn-sm ml-2"
                onClick={() => history.push("/brand-gallery")}
              >
                <i className="fa fa-eye"></i>
              </a>
              <a
                className="btn btn-warning btn-sm ml-2"
                onClick={() => history.push("/update-brand")}
              >
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger btn-sm ml-2">
                <i className="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center">01</td>
            <td>
              <p>Phone:01753109207</p>
              <p>Email:mridha@gmail.com</p>
            </td>

            <td className="text-center">
              <p>Name: N.islam Mridha</p>
              <p>Address: Bagerhat, Khulna</p>
            </td>
            <td>
              <p>Car Model: Corola-123</p>
              <p>Reg No.: H dhakka metro-123</p>
            </td>
            <td>
              <a
                className="btn btn-secondary btn-sm"
                onClick={() => setModalShow(true)}
              >
                <i className="fa fa-eye"></i>
              </a>
              <a
                className="btn btn-secondary btn-sm ml-2"
                onClick={() => history.push("/brand-gallery")}
              >
                <i className="fa fa-eye"></i>
              </a>
              <a className="btn btn-warning btn-sm ml-2">
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger btn-sm ml-2">
                <i className="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center">01</td>
            <td>
              <p>Phone:01753109207</p>
              <p>Email:mridha@gmail.com</p>
            </td>

            <td className="text-center">
              <p>Name: N.islam Mridha</p>
              <p>Address: Bagerhat, Khulna</p>
            </td>
            <td>
              <p>Car Model: Corola-123</p>
              <p>Reg No.: H dhakka metro-123</p>
            </td>
            <td>
              <a
                className="btn btn-secondary btn-sm"
                onClick={() => setModalShow(true)}
              >
                <i className="fa fa-eye"></i>
              </a>
              <a
                className="btn btn-secondary btn-sm ml-2"
                onClick={() => history.push("/brand-gallery")}
              >
                <i className="fa fa-eye"></i>
              </a>
              <a className="btn btn-warning btn-sm ml-2">
                <i className="fa fa-pencil"></i>
              </a>
              <a className="btn btn-danger btn-sm ml-2">
                <i className="fa fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <MockupUpload show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default BrandAgencies;
