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

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <DashboardPage /> },
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
          path: "brand",
          element: <BrandPage />,
        },
        {
          path: "services",
          element: <ServicePage />,
        },
        {
          path: "subscriptions",
          element: <SubscriptionPage />,
        },
        {
          path: "logs",
          element: <LogPage />,
        },
        {
          path: "offers",
          element: <OfferPage />,
        },
        {
          path: "promotions",
          element: <PromotionPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
