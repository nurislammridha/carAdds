import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const BrandsAndAgencies = React.lazy(() =>
  import("./modules/brandAgencies/views/BrandAndAgenciesContainer")
);
const ApproveBrand = React.lazy(() =>
  import("./modules/brandAgencies/views/ApproveBrandContainer")
);
const ApproveDriver = React.lazy(() =>
  import("./modules/drivers/views/ApproveDriverContainer")
);
const Drivers = React.lazy(() =>
  import("./modules/drivers/views/DriversContainer")
);
const Admin = React.lazy(() => import("./modules/admin/views/AdminContainer"));
const CreateBranAgency = React.lazy(() =>
  import("./modules/brandAgencies/views/CreateBrandAgencyContainer")
);
const UpdateBranAgency = React.lazy(() =>
  import("./modules/brandAgencies/views/UpdateBrandContainer")
);
const CreateDriver = React.lazy(() =>
  import("./modules/drivers/views/CreateDriverContainer")
);
const UpdateDriver = React.lazy(() =>
  import("./modules/drivers/views/UpdateDriverContainer")
);
const BrandGallery = React.lazy(() =>
  import("./modules/brandAgencies/views/BrandGalleryContainer")
);
const DriverGallery = React.lazy(() =>
  import("./modules/drivers/views/DriverGalleryContainer")
);
const vendor = React.lazy(() =>
  import("./modules/vendor/views/VendorContainer")
);
const createVendor = React.lazy(() =>
  import("./modules/vendor/views/CreateVendorContainer")
);
const updateVendor = React.lazy(() =>
  import("./modules/vendor/views/UpdateVendorContainer")
);
const vendorDetails = React.lazy(() =>
  import("./modules/vendor/views/VendorDetailsContainer")
);
const createAdmin = React.lazy(() =>
  import("./modules/admin/views/CreateAdminContainer")
);
const updateAdmin = React.lazy(() =>
  import("./modules/admin/views/UpdateAdminContainer")
);
const adminDetails = React.lazy(() =>
  import("./modules/admin/views/AdminDetailsContainer")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/brands-and-agencies",
    name: "Brands & Agencies",
    component: BrandsAndAgencies,
  },
  { path: "/drivers", name: "Drivers", component: Drivers },
  { path: "/admin", name: "Admin", component: Admin },
  { path: "/approve-brand", name: "Approve Brand", component: ApproveBrand },
  { path: "/approve-driver", name: "Approve Driver", component: ApproveDriver },
  { path: "/brand-gallery", name: "Brand Gallery", component: BrandGallery },
  { path: "/driver-gallery", name: "Driver Gallery", component: DriverGallery },
  {
    path: "/create-brand-agency",
    name: "Create Brand",
    component: CreateBranAgency,
  },
  {
    path: "/update-brand",
    name: "Update Brand",
    component: UpdateBranAgency,
  },
  {
    path: "/create-driver",
    name: "Create driver",
    component: CreateDriver,
  },
  {
    path: "/update-driver",
    name: "Update driver",
    component: UpdateDriver,
  },
  {
    path: "/create-vendor",
    name: "Create Vendor",
    component: createVendor,
  },
  {
    path: "/update-vendor",
    name: "Update Vendor",
    component: updateVendor,
  },
  {
    path: "/vendor-details",
    name: "Vendor Details",
    component: vendorDetails,
  },
  {
    path: "/vendor",
    name: "Vendor List",
    component: vendor,
  },
  {
    path: "/create-admin",
    name: "Create Admin",
    component: createAdmin,
  },
  {
    path: "/update-admin",
    name: "Update Admin",
    component: updateAdmin,
  },
  {
    path: "/admin-details",
    name: "Admin Details",
    component: adminDetails,
  },
];

export default routes;
