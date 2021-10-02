import React from "react";

const CreateBrandAgency = () => {
  return (
    <>
      <h6>Create Brand And Agency</h6>
      <div className="row mt-4">
        <div className="col-sm-1"></div>
        <div className="col-sm-10 form-bg">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Designation</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Designation"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">
                  Which vehicle do you prefer
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Which vehicle do you prefer"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  How many days you want to campaign
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="How many days you want to campaign"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Company Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  Where you want to campaign
                </label>
                <select class="form-control" id="exampleInputEmail1">
                  <option>Select Options</option>
                  <option>Inside Dhaka</option>
                  <option>Outside Dhaka</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  How many vehicles you want
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="How many vehicles you want"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  How many vehicles you want
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="How many vehicles you want"
                />
              </div>
              <div class="form-group">
                <a className="btn btn-outline-secondary float-right">Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </>
  );
};

export default CreateBrandAgency;
