export default {
    color: {
      label: "Color",
      type: "color"
    },
    textColor: {
        label: "Text Color",
        type: "color",
      },
    url: {
      label: "URL",
      type: "string"
    },
    brandName: {
      label: "Brand Name",
      type: "string"
    },
    firstSlideImageOne: {
      label: "First Slide Image One",
      type: "string"
    },
    firstSlideImageTwo: {
      label: "First Slide Image Two",
      type: "string"
    },
    transitionHeading: {
      label: "Transition Heading",
      type: "string"
    },
    transitionSlogan: {
      label: "Transition Slogan",
      type: "string"
    },
    bestProductsHeading: {
      label: "Best Products Heading",
      type: "string"
    },
    bestProductImages: {
      label: "Best Products Images",
      type: "array",
      items:{
        type:"string"
      }
    },
    opHeading: {
      label: "First Slide Heading",
      type: "string"
    },
    opSlogan: {
      label: "First Slide Slogan",
      type: "string"
    },
    opImages: {
      label: "First Slide Images",
      type: "array",
      items:{
        type:"string"
      }
    },
    fdHeading: {
      label: "Second Slide Heading",
      type: "string"
    },
    fdSlogan: {
      label: "Second Slide Slogan",
      type: "string"
    },
    fdImages: {
      label: "Second Slide Images",
      type: "array",
      items:{
        type:"string"
      }
    },
};