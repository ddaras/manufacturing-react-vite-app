import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AddMaterialSerial from "./pages/Material/AddMaterialSerial";
import ManufactureInformation from "./pages/Material/ManufactureInformation";
import CreateMaterialRequisition from "./pages/MaterialRequisition/CreateMaterialRequisition";
import RequisitionUpdate from "./pages/MaterialRequisition/RequisitionUpdate";
import UserInformation from "./pages/Settings/UserInformation";
import UserRoleControl from "./pages/Settings/UserRoleControl";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'materials/add-material-serial',
        element: <AddMaterialSerial />,
      },
      {
        path: 'materials/manufacture-information',
        element: <ManufactureInformation />,
      },
      {
        path: 'material-requisition/create-material-requisition',
        element: <CreateMaterialRequisition />,
      },
      {
        path: 'material-requisition/requisition-update',
        element: <RequisitionUpdate />,
      },
      {
        path: 'settings/user-information',
        element: <UserInformation />,
      },
      {
        path: 'settings/user-role-control',
        element: <UserRoleControl />,
      },
    ],
  },
];

export default routes;
