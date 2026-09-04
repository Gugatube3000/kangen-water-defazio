export const ENAGIC_COMPARE_URL =
  "https://www.enagic.com/en/product-comparison-bootstrap";
export const ENAGIC_CERTIFICATES_URL = "https://www.enagic.com/en/product-certifications";
export const ENAGIC_PRICE_LIST_URL = "https://www.enagic.com/pdf/us/pricelist_customer.pdf?v=66957abe8f288";
export const ANESPA_PRICE = "$3,420";
export const ENAGIC_K8_PAYMENT_URL =
  "https://www.enagic.com/pdf/us/enagic-payment-kangen8.pdf?v=66967500f31f8";
export const ENAGIC_PAYMENT_METHODS_URL =
  "https://e-store.enagic.com/us_en/payment";
export const ENAGIC_BUSINESS_URL =
  "https://www.enagic.com/en_US/business-opportunity";
export const ENAGIC_EARNINGS_DISCLOSURE_URL =
  "https://www.enagic.com/en_US/distributors-earnings-disclosure-statement";

export type EnagicMachine = {
  name: string;
  tagline: string;
  bestFor: string;
  keyFeature: string;
  productUrl: string;
  highlight?: boolean;
  /** Real product photo (in /public). Falls back to the schematic when absent. */
  image?: string;
};

export const ENAGIC_MACHINES: EnagicMachine[] = [
  {
    name: "LeveLuk K8",
    tagline: "Flagship",
    bestFor: "Families and small businesses",
    keyFeature:
      "Eight platinum-coated titanium plates. Enagic's current US product page lists a negative ORP specification of -722 mV and stable production at a higher flow rate.",
    productUrl: "https://www.enagic.com/en_US/products/leveluk-k8",
    highlight: true,
    image: "/machines/leveluk-k8.png",
  },
  {
    name: "SD501DX",
    tagline: "Advanced",
    bestFor: "Modern kitchens",
    keyFeature:
      "Seven plates, five water types, and audio notifications in eight languages in a sleek countertop design.",
    productUrl: "https://www.enagic.com/en_US/products/leveluk-sd501dx",
    image: "/machines/leveluk-sd501dx.jpg",
  },
  {
    name: "SD501 Platinum",
    tagline: "Refined",
    bestFor: "Multilingual households",
    keyFeature:
      "The SD501 platform in a polished finish with five-language audio guidance and a five-year warranty.",
    productUrl:
      "https://www.enagic.com/en_US/products/leveuluk-sd501-platinum",
    image: "/machines/leveluk-sd501-platinum.png",
  },
  {
    name: "SD501",
    tagline: "Classic",
    bestFor: "The original home workhorse",
    keyFeature:
      "Seven plates, a large LCD panel, and clear voice prompts. Enagic describes it as the flagship home-use model.",
    productUrl: "https://www.enagic.com/en_US/products/leveuluk-sd501-original",
    image: "/machines/leveluk-sd501.png",
  },
  {
    name: "Super501",
    tagline: "Heavy Use",
    bestFor: "Large families and higher-volume use",
    keyFeature:
      "A 7 + 5 plate system, twin hoses, a built-in enhancer tank, and water-pressure regulation for demanding use.",
    productUrl: "https://www.enagic.com/en_US/products/leveluk-super501",
    image: "/machines/leveluk-super501.png",
  },
  {
    name: "JrIV",
    tagline: "Energy Saver",
    bestFor: "Singles and couples",
    keyFeature:
      "Four solid plates and lower power consumption. Enagic positions it as a starter model for lower-volume households.",
    productUrl: "https://www.enagic.com/en_US/products/leveluk-jr4",
    image: "/machines/leveluk-jr4.png",
  },
  {
    name: "SD501U",
    tagline: "Under Counter",
    bestFor: "Counter-space conscious kitchens",
    keyFeature:
      "The quality and power of the SD501 beneath the sink, with a compact wall-mounted LCD control panel.",
    productUrl:
      "https://www.enagic.com/en_US/products/leveluk-sd501u-under-counter",
    image: "/machines/leveluk-sd501u.png",
  },
  {
    name: "Anespa DX",
    tagline: "Home Spa",
    bestFor: "Bathing, skin, and hair care",
    keyFeature:
      "A mineral-ion water spa system for the bathroom. It complements the drinking-water machines rather than replacing one.",
    productUrl:
      "https://www.enagic.com/en_US/products/anespadx-mineral-ion-water-spa",
    image: "/machines/anespa-dx.png",
  },
];

export type K8PaymentOption = {
  label: string;
  monthlyPayment: string;
  processingCharge: string;
};

export const K8_PRICE_AMOUNT = 5890;
export const K8_PRICE = "$5,890";
export const K8_DEPOSIT = "$970";
export const K8_PAYMENT_OPTIONS: K8PaymentOption[] = [
  {
    label: "Full payment",
    monthlyPayment: "$5,890 once",
    processingCharge: "$0",
  },
  {
    label: "3 payments",
    monthlyPayment: "$1,640 / month",
    processingCharge: "$60",
  },
  {
    label: "6 payments",
    monthlyPayment: "$820 / month",
    processingCharge: "$120",
  },
  {
    label: "10 payments",
    monthlyPayment: "$492 / month",
    processingCharge: "$200",
  },
  {
    label: "12 payments",
    monthlyPayment: "$410 / month",
    processingCharge: "$240",
  },
  {
    label: "20 payments",
    monthlyPayment: "$246 / month",
    processingCharge: "$400",
  },
  {
    label: "24 payments",
    monthlyPayment: "$205 / month",
    processingCharge: "$480",
  },
];
