export default {
    color: {
      label: "Color",
      type: "color",
      optional: true,
      default: "white",
    },
    textColor: {
        label: "Text Color",
        type: "color",
        optional: true,
        default: "#121212",
      },
    url: {
      label: "URL",
      type: "string",
      optional: true,
      default: "docs.motorcortexjs.com",
    },
    brandName: {
      label: "Brand Name",
      type: "string",
      optional: true,
      default: "Motorcortex",
    },
    firstSlideImageOne: {
      label: "First Slide Image One",
      type: "string",
      optional: true,
      default: "https://donkeyclip.github.io/product-promo/demo/assets/first-slide1.jpg",
    },
    firstSlideImageTwo: {
      label: "First Slide Image Two",
      type: "string",
      optional: true,
      default: "https://donkeyclip.github.io/product-promo/demo/assets/first-slide2.jpg",
    },
    transitionHeading: {
      label: "Transition Heading",
      type: "string",
      optional: true,
      default: "Choose Convenience",
    },
    transitionSlogan: {
      label: "Transition Slogan",
      type: "string",
      optional: true,
      default: "Shop with us",
    },
    bestProductsHeading: {
      label: "Best Products Heading",
      type: "string",
      optional: true,
      default: "Wide assortment New Collection",
    },
    bestProductImages: {
      label: "Best Products Images",
      type: "array",
      optional: true,
      default: ["https://donkeyclip.github.io/product-promo/demo/assets/bp1.jpg","https://donkeyclip.github.io/product-promo/demo/assets/bp2.jpg","https://donkeyclip.github.io/product-promo/demo/assets/bp3.jpg"],
      items:"string"
    },
    opHeading: {
      label: "First Slide Heading",
      type: "string",
      optional: true,
      default: "Online Promotions",
    },
    opSlogan: {
      label: "First Slide Slogan",
      type: "string",
      optional: true,
      default: "Best Prices",
    },
    opImages: {
      label: "First Slide Images",
      type: "array",
      optional: true,
      default: ["https://donkeyclip.github.io/product-promo/demo/assets/op1.jpg","https://donkeyclip.github.io/product-promo/demo/assets/op2.jpg","https://donkeyclip.github.io/product-promo/demo/assets/op3.jpg"],
      items:"string"
    },
    fdHeading: {
      label: "Second Slide Heading",
      type: "string",
      optional: true,
      default: "Fast delivery",
    },
    fdSlogan: {
      label: "Second Slide Slogan",
      type: "string",
      optional: true,
      default: "Free from 50$ prurchese",
    },
    fdImages: {
      label: "Second Slide Images",
      type: "array",
      optional: true,
      default: ["https://donkeyclip.github.io/product-promo/demo/assets/fd1.jpg","https://donkeyclip.github.io/product-promo/demo/assets/fd2.jpg","https://donkeyclip.github.io/product-promo/demo/assets/fd3.jpg","https://donkeyclip.github.io/product-promo/demo/assets/fd4.jpg","https://donkeyclip.github.io/product-promo/demo/assets/fd5.jpg"],
      items:"string"
    },
};