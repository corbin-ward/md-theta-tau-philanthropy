export interface ShirtSale {
    id: string;
    title: string;
    description: string;
    presaleEndDate: string;
    regularSaleEndDate: string;
    deliveryInfo: string;
    price: {
      presale: number;
      regular: number;
    };
    headerColor: string;
    buttons: {
      text: string;
      link: string;
    }[];
  }
  
  export const shirtData: ShirtSale = {
    id: "shirt-presale",
    title: "Philanthropy Event T-Shirts",
    description: "Support Habitat for Humanity by purchasing our limited edition event t-shirt! Presale discount available until March 16th. Regular sale runs from March 17th-21st. Shirts will be delivered to chapters at their meetings approximately one week after the philanthropy event ends.",
    presaleEndDate: "March 16, 2025",
    regularSaleEndDate: "March 21, 2025",
    deliveryInfo: "Shirts will be delivered to chapter meetings approximately one week after philanthropy ends",
    price: {
      presale: 19,
      regular: 19
    },
    headerColor: "bg-theta-red",
    buttons: [
      { 
        text: "Order Your Shirt", 
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdEAcBEP4VQsaAFBHHhlF8G6hU3iQy2FQ9hnWanJdFgElIfFA/viewform?usp=preview" 
      }
    ]
  };