import React from "react";
import { createBrowserRouter } from "react-router";
import Lp from "../imports/Lp";
import Kontakt from "../imports/Kontakt-14-225";
import Step1 from "./components/cestovani/Step1";
import Step2 from "./components/cestovani/Step2";
import Step3 from "./components/cestovani/Step3";
import Step4 from "./components/cestovani/Step4";
import Step5 from "./components/cestovani/Step5";
import LifeInsuranceStep1 from "./components/zivotni/LifeInsuranceStep1";
import LifeInsuranceStep2 from "./components/zivotni/LifeInsuranceStep2";
import LifeInsuranceStep3 from "./components/zivotni/LifeInsuranceStep3";
import LifeInsuranceStep4 from "./components/zivotni/LifeInsuranceStep4";
import LifeInsuranceStep5 from "./components/zivotni/LifeInsuranceStep5";
import LifeInsuranceStep6 from "./components/zivotni/LifeInsuranceStep6";
import LifeInsuranceStep7 from "./components/zivotni/LifeInsuranceStep7";
import LifeInsuranceStep8 from "./components/zivotni/LifeInsuranceStep8";
import CarInsuranceStep1 from "./components/auto/CarInsuranceStep1";
import CarInsuranceStep2 from "./components/auto/CarInsuranceStep2";
import CarInsuranceStep3 from "./components/auto/CarInsuranceStep3";
import CarInsuranceStep4 from "./components/auto/CarInsuranceStep4";
import CarInsuranceStep5 from "./components/auto/CarInsuranceStep5";
import CarInsuranceStep6 from "./components/auto/CarInsuranceStep6";
import PropertyInsuranceStep1 from "./components/majetek/PropertyInsuranceStep1";
import PropertyInsuranceStep2 from "./components/majetek/PropertyInsuranceStep2";
import PropertyInsuranceStep3 from "./components/majetek/PropertyInsuranceStep3";
import PropertyInsuranceStep4 from "./components/majetek/PropertyInsuranceStep4";
import PropertyInsuranceStep5 from "./components/majetek/PropertyInsuranceStep5";
import PropertyInsuranceStep6 from "./components/majetek/PropertyInsuranceStep6";
import PropertyInsuranceStep7 from "./components/majetek/PropertyInsuranceStep7";
import ForeignersInsuranceStep1 from "./components/cizinci/ForeignersInsuranceStep1";
import ForeignersInsuranceStep2 from "./components/cizinci/ForeignersInsuranceStep2";
import ForeignersInsuranceStep3 from "./components/cizinci/ForeignersInsuranceStep3";
import ForeignersInsuranceStep4 from "./components/cizinci/ForeignersInsuranceStep4";
import PetInsuranceStep1 from "./components/mazlici/PetInsuranceStep1";
import PetInsuranceStep2 from "./components/mazlici/PetInsuranceStep2";
import PetInsuranceStep3 from "./components/mazlici/PetInsuranceStep3";
import PetInsuranceStep4 from "./components/mazlici/PetInsuranceStep4";
import Mazlicici from "./components/Mazlicici";
import Cizinci from "./components/Cizinci";
import InvestmentStep1 from "./components/investice/InvestmentStep1";
import InvestmentStep2 from "./components/investice/InvestmentStep2";
import InvestmentStep3 from "./components/investice/InvestmentStep3";
import InvestmentStep4 from "./components/investice/InvestmentStep4";
import InvestmentStep5 from "./components/investice/InvestmentStep5";
import InvestmentStep6 from "./components/investice/InvestmentStep6";
import InvestmentStep7 from "./components/investice/InvestmentStep7";
import InvestmentStep8 from "./components/investice/InvestmentStep8";
import InvestmentStep9 from "./components/investice/InvestmentStep9";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Lp />,
    },
    {
      path: "/kontakt",
      element: <Kontakt />,
    },
    {
      path: "/mazlicici",
      element: <Mazlicici />,
    },
    {
      path: "/cizinci",
      element: <Cizinci />,
    },
    {
      path: "/cestovani/krok-1",
      element: <Step1 />,
    },
    {
      path: "/cestovani/krok-2",
      element: <Step2 />,
    },
    {
      path: "/cestovani/krok-3",
      element: <Step3 />,
    },
    {
      path: "/cestovani/krok-4",
      element: <Step4 />,
    },
    {
      path: "/cestovani/krok-5",
      element: <Step5 />,
    },
    {
      path: "/zivotni/krok-1",
      element: <LifeInsuranceStep1 />,
    },
    {
      path: "/zivotni/krok-2",
      element: <LifeInsuranceStep2 />,
    },
    {
      path: "/zivotni/krok-3",
      element: <LifeInsuranceStep3 />,
    },
    {
      path: "/zivotni/krok-4",
      element: <LifeInsuranceStep4 />,
    },
    {
      path: "/zivotni/krok-5",
      element: <LifeInsuranceStep5 />,
    },
    {
      path: "/zivotni/krok-6",
      element: <LifeInsuranceStep6 />,
    },
    {
      path: "/zivotni/krok-7",
      element: <LifeInsuranceStep7 />,
    },
    {
      path: "/zivotni/krok-8",
      element: <LifeInsuranceStep8 />,
    },
    {
      path: "/auto/krok-1",
      element: <CarInsuranceStep1 />,
    },
    {
      path: "/auto/krok-2",
      element: <CarInsuranceStep2 />,
    },
    {
      path: "/auto/krok-3",
      element: <CarInsuranceStep3 />,
    },
    {
      path: "/auto/krok-4",
      element: <CarInsuranceStep4 />,
    },
    {
      path: "/auto/krok-5",
      element: <CarInsuranceStep5 />,
    },
    {
      path: "/auto/krok-6",
      element: <CarInsuranceStep6 />,
    },
    {
      path: "/majetek/krok-1",
      element: <PropertyInsuranceStep1 />,
    },
    {
      path: "/majetek/krok-2",
      element: <PropertyInsuranceStep2 />,
    },
    {
      path: "/majetek/krok-3",
      element: <PropertyInsuranceStep3 />,
    },
    {
      path: "/majetek/krok-4",
      element: <PropertyInsuranceStep4 />,
    },
    {
      path: "/majetek/krok-5",
      element: <PropertyInsuranceStep5 />,
    },
    {
      path: "/majetek/krok-6",
      element: <PropertyInsuranceStep6 />,
    },
    {
      path: "/majetek/krok-7",
      element: <PropertyInsuranceStep7 />,
    },
    {
      path: "/cizinci/krok-1",
      element: <ForeignersInsuranceStep1 />,
    },
    {
      path: "/cizinci/krok-2",
      element: <ForeignersInsuranceStep2 />,
    },
    {
      path: "/cizinci/krok-3",
      element: <ForeignersInsuranceStep3 />,
    },
    {
      path: "/cizinci/krok-4",
      element: <ForeignersInsuranceStep4 />,
    },
    {
      path: "/mazlicici/krok-1",
      element: <PetInsuranceStep1 />,
    },
    {
      path: "/mazlicici/krok-2",
      element: <PetInsuranceStep2 />,
    },
    {
      path: "/mazlicici/krok-3",
      element: <PetInsuranceStep3 />,
    },
    {
      path: "/mazlicici/krok-4",
      element: <PetInsuranceStep4 />,
    },
    {
      path: "/investice/krok-1",
      element: <InvestmentStep1 />,
    },
    {
      path: "/investice/krok-2",
      element: <InvestmentStep2 />,
    },
    {
      path: "/investice/krok-3",
      element: <InvestmentStep3 />,
    },
    {
      path: "/investice/krok-4",
      element: <InvestmentStep4 />,
    },
    {
      path: "/investice/krok-5",
      element: <InvestmentStep5 />,
    },
    {
      path: "/investice/krok-6",
      element: <InvestmentStep6 />,
    },
    {
      path: "/investice/krok-7",
      element: <InvestmentStep7 />,
    },
    {
      path: "/investice/krok-8",
      element: <InvestmentStep8 />,
    },
    {
      path: "/investice/krok-9",
      element: <InvestmentStep9 />,
    },
  ]
);