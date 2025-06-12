import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/dahboard/DashboardPage";
import UserPage from "./pages/users/UserPage";
import ProductsPage from "./pages/products/ProductsPage";
import CategoryPage from "./pages/Category/CategoryPage";
import BrandPage from "./pages/brand/BrandPage";
import ServicePage from "./pages/services/ServicePage";
import SubscriptionPage from "./pages/subscriptions/SubscriptionPage";
import LogPage from "./pages/logs/LogPage";
import OfferPage from "./pages/offers/OfferPage";
import PromotionPage from "./pages/promotions/PromotionPage";
import ProductSinglePage from "./pages/products/ProductSinglePage";
import AddNewProduct from "./pages/products/AddNewProduct";
import EditProductPage from "./pages/products/EditProductPage";
import AddVendor from "./pages/services/AddVendor";
import EditVendor from "./pages/services/EditVendor";
import ErrorPage from "./pages/errorPage/ErrorPage";
import AddSubscribersPage from "./pages/subscriptions/AddSubscribersPage";
import AddBrandPage from "./pages/brand/AddBrandPage";
import EditBrandPage from "./pages/brand/EditBrandPage";
import AddCategoryPage from "./pages/Category/AddCategoryPage";
import EditCategoryPage from "./pages/Category/EditCategoryPage";
import AddCoupon from "./pages/offers/AddCoupon";
import EditCoupon from "./pages/offers/EditCoupon";
import PlansPage from "./pages/plans/PlansPage";
import AddPlanPage from "./pages/plans/AddPlanPage";
import EditPlanPage from "./pages/plans/EditPlanPage";
import LoginPage from "./pages/login/LoginPage";
import ServiceCategoryPage from "./pages/servicecategory/ServiceCategoryPage";
import AddServiceCategory from "./pages/servicecategory/AddServiceCategory";
import EditServiceCategory from "./pages/servicecategory/EditServiceCategory";
import OrderPage from "./pages/orders/OrderPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboardPage /> },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "users",
          element: <UserPage />,
        },
        {
          path: "products",
          element: <ProductsPage />,
        },
        {
          path: "products/new",
          element: <AddNewProduct />,
        },
        {
          path: "products/:id",
          element: <ProductSinglePage />,
        },
        {
          path: "products/:id/edit",
          element: <EditProductPage />,
        },
        {
          path: "category",
          element: <CategoryPage />,
        },
        {
          path: "category/new",
          element: <AddCategoryPage />,
        },
        {
          path: "category/:id/edit",
          element: <EditCategoryPage />,
        },
        {
          path: "brand",
          element: <BrandPage />,
        },
        {
          path: "brand/new",
          element: <AddBrandPage />,
        },
        {
          path: "brand/:id/edit",
          element: <EditBrandPage />,
        },
        {
          path: "service_category",
          element: <ServiceCategoryPage />,
        },
        {
          path: "service_category/new",
          element: <AddServiceCategory />,
        },
        {
          path: "service_category/:id/edit",
          element: <EditServiceCategory />,
        },
        {
          path: "services",
          element: <ServicePage />,
        },
        {
          path: "services/new",
          element: <AddVendor />,
        },
        {
          path: "services/:id/edit",
          element: <EditVendor />,
        },
        {
          path: "subscriptions",
          element: <SubscriptionPage />,
        },
        {
          path: "subscriptions/new",
          element: <AddSubscribersPage />,
        },
        {
          path: "logs",
          element: <LogPage />,
        },
        { path: "orders", element: <OrderPage /> },
        {
          path: "offers",
          element: <OfferPage />,
        },
        {
          path: "offers/new",
          element: <AddCoupon />,
        },
        {
          path: "offers/:id/edit",
          element: <EditCoupon />,
        },
        {
          path: "promotions",
          element: <PromotionPage />,
        },
        {
          path: "plans",
          element: <PlansPage />,
        },
        {
          path: "plans/new",
          element: <AddPlanPage />,
        },
        {
          path: "plans/:id/edit",
          element: <EditPlanPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
