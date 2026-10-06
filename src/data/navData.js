import { itServices } from "./itServices";
import { taxServices } from "./taxServices";

export const navigation = [
  {
    label: "Services",
    path: "/services",
    children: itServices.map((s) => ({ label: s.title, path: `/services/${s.slug}` })),
  },
  { label: "Our Work", path: "/work" },
  { label: "Insights", path: "/insights" },
  { label: "About", path: "/about" },
  {
    label: "Tax & Financial",
    path: "/tax-services",
    mega: true,
    children: taxServices.map((s) => ({ label: s.title, path: `/tax-services/${s.slug}` })),
  },
  { label: "Contact", path: "/contact" },
];
