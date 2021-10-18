import MotorCortex from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
import initParams from "./initParams";
const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);

export const clip = new MotorCortex.HTMLClip({
  html: `
    <div class="root">
      <div class="fist-slide">
        <div class="fist-slide-text-wrapper">
          <div class="heading"> {{ initParams.brandName }}</div>
          <a class="url" target="_blank" href="https://{{ initParams.url }}"> {{ initParams.url }}</a>
          <div class="fist-slide-line"></div>
        </div>
        <img class="fist-slide-image-two" src="{{initParams.firstSlideImageTwo}}">
        <img class="fist-slide-image-one" src="{{initParams.firstSlideImageOne}}">
      </div>
      <div class="transition">
        <div class="svg-wrapper">
          <svg height="582" width="1140" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape1" height="582" width="1140" />
          </svg>
          <div class="transition-text">
            <div class="transition-heading h2">{{ initParams.transitionHeading }} </div>
            <div class="transition-slogan h3">{{ initParams.transitionSlogan }}</div>
          </div>
        </div>
      </div>
      <div class="best-products">
        <div class="best-products-text">
          <div class="best-products-heading h2">{{ initParams.bestProductsHeading }} </div>
          <div class="best-products-slogan h3">{{ initParams.bestProductsSlogan }}</div>
        </div>
        <div class="best-products-images">
          <img class="best-products-image1" src="{{initParams.bestProductImages[0]}}">
          <img class="best-products-image2" src="{{initParams.bestProductImages[1]}}">
          <img class="best-products-image3" src="{{initParams.bestProductImages[2]}}">  
        </div>
      </div>
      <div class="op">
        <div class="op-text">
          <div class="op-heading h2">{{ initParams.opHeading }} </div>
          <div class="op-slogan h3">{{ initParams.opSlogan }}</div>
        </div>
        <div class="op-images">
          <img class="op-image1" src="{{initParams.opImages[0]}}">
          <img class="op-image2" src="{{initParams.opImages[1]}}">
          <img class="op-image3" src="{{initParams.opImages[2]}}">
        </div>
      </div>
      <div class="fd">
        <div class="fd-text">
          <div class="fd-heading h2">{{ initParams.fdHeading }} </div>
          <div class="fd-slogan h3">{{ initParams.fdSlogan }}</div>
        </div>
        <div class="fd-images">
          <img class="fd-image1" src="{{initParams.fdImages[0]}}">
          <div class="fd-images-holder">
            <img class="fd-image2" src="{{initParams.fdImages[1]}}">
            <img class="fd-image3" src="{{initParams.fdImages[2]}}">
            <img class="fd-image4" src="{{initParams.fdImages[3]}}">
            <img class="fd-image5" src="{{initParams.fdImages[4]}}">
          </div>        
        </div>
      </div>
    </div>`,
  css: `
  img{object-fit: cover;}
  .root {
    width:1920px;
    height:1080px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    background: {{ initParams.color }};
    font-family: 'Montserrat', sans-serif;
    position:relative;
    color:{{initParams.textColor}};
    
  }
  .fist-slide-text-wrapper{
    position:absolute;
    top:15%;
    left:15%;
    z-index: 2;
  }
  .heading{
    font-size: 150px;
    font-weight: 900;
  }
  .url{
    font-size: 50px;
    text-decoration: none;
    color:{{initParams.textColor}}
  }
  .fist-slide-line{
    margin-top:30px;
    width: 300px;
    height:10px;
    background:{{initParams.textColor}}
  }
  .fist-slide-image-one{
    position:absolute;
    left:40%;
    bottom:-3%;
    width: 360px;
    height:400px;
    background: url({{initParams.firstSlideImageOne}});
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: -20px 19px 86px -50px #000000;
  }
  .fist-slide-image-two{
    position:absolute;
    left:50%;
    top:0;
    width: 100%;
    height:100%;
    background: url({{initParams.firstSlideImageTwo}});
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: 1px -2px 86px -28px #000000; 
  }

  .svg-wrapper,.transition-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .shape1{
    stroke-dasharray: 3443;
    stroke-width: 10px;
    fill: transparent;
    stroke: {{initParams.textColor}};
    border-bottom: 5px solid black;
    stroke-dashoffset: -3443;
  }
  .transition-text,.best-products-text{
    width:800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .h2{
    font-size: 100px;
    font-weight: 900;
  }

  .h3{
    font-size: 40px;
    font-weight: 400;
  }

  .transition-heading{
    text-align: center;
  }

  .transition{
    position: absolute;
  }

  .best-products-text{
    position: absolute;
    width:690px;
    align-items: flex-start;
    top: 10%;
    left: 7%;
  }
  .best-products-slogan{
    width:440px
  }
  .best-products-image1{
    width:730px;
    height:860px;
    box-shadow: 1px -2px 86px -28px #000000; 
    right: 44px;
    position: absolute;
    top:160px;
  }
  .best-products-image2{
    width:410px;
    height:480px;
    box-shadow: 1px -2px 86px -28px #000000; 
    position: absolute;
    left: 710px;
    top:40px;
  }

  .best-products-image3{
    width:410px;
    height:380px;
    box-shadow: 1px -2px 86px -28px #000000; 
    position: absolute;
    left: 710px;
    top:612px;
  }
  .op,.fd{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .op-text{
    position: absolute;
    width:690px;
    align-items: flex-start;
    top: 10%;
    right: 7%;
    z-index:2;
  }

  .op-image1{
    width:694px;
    height:390px;
    // background: url({{initParams.opImages[0]}});
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: 0 0px 42px -20px #000000; 
    right: 70px;
    position: absolute;
    bottom:56px;
    background-position: center center;
    z-index:2
  }
  .op-image2{
    width:700px;
    height:700px;
    // background: url({{initParams.opImages[1]}});
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: 0 0px 42px -20px #000000; 
    position: absolute;
    left: 518px;
    bottom:186px;
    background-position: center center;
  }

  .op-image3{
    width:600px;
    height:580px;
    // background: url({{initParams.opImages[2]}});
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: 0 0px 42px -20px #000000; 
    position: absolute;
    left: 60px;
    top:74px;
    background-repeat: no-repeat;
    background-size:cover;
  }

  .fd-text{
    position: absolute;
    width:810px;
    align-items: flex-start;
    top: 66%;
    left: 46%;
    z-index:2;
  }

  .fd-image1{
    width:890px;
    height:940px;

    box-shadow: 0 0px 42px -20px #000000; 
    left:60px;
    position: absolute;
    top:70px;
    background-position: center center;
  }
  .fd-image2{
    width:346px;
    height:282px;

    position: absolute;
    top:0;
    left:0;
  }
  .fd-image3{
    width:346px;
    height:282px;

    position: absolute;
    top:0;
    left :386px;
  }
  .fd-image4{
    width:346px;
    height:282px;

    position: absolute;
    top:300px;
    left :0px;
  }
  .fd-image5{
    width:346px;
    height:282px;

    position: absolute;
    top:300px;
    left :386px;
  }
  .fd-images-holder{
    left:136px;
    position: absolute;
    top:90px;
    left:1000px
  }

  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParamsValidationRules: {
    color: {
      label: "Bg Color",
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
      label: "url",
      type: "string",
      optional: false,
      default: "motorcortexjs.com",
    },
    brandName: {
      label: "Brand Name",
      type: "string",
      optional: false,
      default: "Motorcortexjs",
    },
    firstSlideImageOne:{
      label: "First slide Image One",
      type: "string",
      optional: false,
      default: "./assets/first-slide1.jpg",
    },
    firstSlideImageTwo:{
      label: "First slide Image Two",
      type: "string",
      optional: false,
      default: "./assets/first-slide2.jpg",
    },
    transitionHeading:{
      label: "Transition Heading",
      type: "string",
      optional: false,
      default: "Choose Convenience",
    },
    transitionSlogan:{
      label: "Transition Slogan",
      type: "string",
      optional: false,
      default: "Shop with us",
    },
    bestProductsHeading:{
      label: "Best Products Heading",
      type: "string",
      optional: false,
      default: "Best Products",
    },
    bestProductsSlogan:{
      label: "Best Products Slogan",
      type: "string",
      optional: false,
      default: "Wide assortment New Collection",
    },
    bestProductImages:{
      label: "Best Products Images",
      type: "array",
      items: "string",
      default:["./assets/bp1.jpg","./assets/bp2.jpg","./assets/bp3.jpg"]
    },
    opHeading:{
      label: "Online Promotion Heading",
      type: "string",
      optional: false,
    },
    opSlogan:{
      label: "Online promotions Slogan",
      type: "string",
      optional: false,
      default: "Wide assortment New Collection",
    },
    opImages:{
      label: "Online promotions Images",
      type: "array",
      items: "string",
    },
    fdHeading:{
      label: "Fast Delivery Heading",
      type: "string",
      fdtional: false,
    },
    fdSlogan:{
      label: "Fast Delivery Slogan",
      type: "string",
      fdtional: false,
      default: "Wide assortment New Collection",
    },
    fdImages:{
      label: "Fast Delivery Images",
      type: "array",
      items: "string",
    },
    
  },
  initParams: initParams[0].value,
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap`
    }
  ],
});



const rootBlur = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      filter:"blur(0px)"
    },
    initialValues: {
      filter:"blur(5px)"
    }
  },
  {
    selector: ".root",
    duration: 200,
    easing: "linear"
  }
);

const subtitleSpacing = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      letterSpacing:"1px"
    },
    initialValues: {
      letterSpacing: "3px"
  }
  },
  {
    selector: ".fist-slide-text-wrapper .url",
    duration: 1200,
    easing: "linear"
  }
);
const titleSpacing = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      letterSpacing:"1px"
    },
    initialValues: {
      letterSpacing: "20px"
  }
  },
  {
    selector: ".fist-slide-text-wrapper .heading",
    duration: 1200,
    easing: "linear"
  }
);

const fistSlideImageTwo = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      left:"46%"
    },
    initialValues: {
      left: "50%"
  }
  },
  {
    selector: ".fist-slide-image-two",
    duration: 1200,
    easing: "linear"
  }
);

const fistSlideImageOne = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      bottom:"0%"
    },
    initialValues: {
      bottom: "-3%"
  }
  },
  {
    selector: ".fist-slide-image-one",
    duration: 1200,
    easing: "linear"
  }
);


const fistSlideOpacity = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:0
    },
    initialValues: {
      opacity:1
    }
  },
  {
    selector: ".fist-slide",
    duration: 1,
    easing: "linear"
  }
);
const svgShapeOne = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      strokeDashoffset: 0,
    },
    
  },
  {
    duration: 800,
    selector: ".shape1",
    easing: "linear"
  }
);

const transitionTransform = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      transform:{
        scale:0.8
      }
    },
    initialValues: {
      transform:{
        scale:0
      }
    }
  },
  {
    duration: 800,
    selector: ".transition",
    easing: "linear"
  }
);

const transitionLetterSpacing = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      letterSpacing:"1px"
    },
    initialValues: {
      letterSpacing: "-12px"
  }
  },
  {
    selector: ".transition",
    duration: 1200,
    easing: "linear"
  }
);
const transitionTransformToOne = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      transform:{
        scale:1
      }
    },
    initialValues: {
      transform:{
        scale:0.8
      }
    }
  },
  {
    selector: ".transition",
    duration: 1200,
    easing: "linear"
  }
);

const transitionOpacity = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:0
    },
  },
  {
    selector: ".transition",
    duration: 1,
    easing: "linear"
  }
);

const test = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      filter:"blur(0px)"
    },
    initialValues: {
      filter:"blur(3px)"
    }
  },
  {
    selector: ".best-products-heading,.best-products-slogan",
    duration: 600,
    easing: "linear"
  }
);

const bestProductOpacity = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:1
    },
    initialValues: {
      opacity:0.00001,
    }
  },
  {
    selector: ".best-products",
    duration: 1,
    easing: "linear"
  }
);

const bpOneBgSize = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      backgroundSize: "730px",
      top:"120px"
    },
    initialValues: {
      backgroundSize: "830px",
      top:"180px"
    }
  },
  {
    selector: ".best-products-image1",
    duration: 2500,
    easing: "linear"
  }
);

const bpTwoBgSize = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      backgroundPositionX: "-100px",
    },
    initialValues: {
      backgroundPositionX: "0px",
    }
  },
  {
    selector: ".best-products-image2",
    duration: 2500,
    easing: "linear"
  }
);

const bpThreeBgSize = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      backgroundPositionY: "0px",
      top:"570px"
    },
    initialValues: {
      backgroundPositionY: "-100px",
      top:"612px"
    }
  },
  {
    selector: ".best-products-image3",
    duration: 2500,
    easing: "linear"
  }
);

const bestProductsTextSpacing = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      letterSpacing:"1px"
    },
    initialValues: {
      letterSpacing: "7px"
  }
  },
  {
    selector: ".best-products-heading",
    duration: 2500,
    easing: "linear"
  }
);

const bestProductOpacityZero = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:0
      // visibility:"visible"
    },
    initialValues: {
      opacity:1,
      // visibility:"hiden"
    }
  },
  {
    selector: ".best-products",
    duration: 1,
    easing: "linear"
  }
);

const opOpacity = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:1,
      // visibility:"visible"
    },
    initialValues: {
      opacity:0.00001,
      // visibility:"hidden"
    }
  },
  {
    selector: ".op",
    duration: 1,
    easing: "linear"
  }
);
const rootOp = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      filter:"blur(0px)"
    },
    initialValues: {
      filter:"blur(5px)"
    }
  },
  {
    selector: ".op",
    duration: 200,
    easing: "linear"
  }
);

const opTextSpacing = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      letterSpacing:"1px"
    },
    initialValues: {
      letterSpacing: "7px"
  }
  },
  {
    selector: ".op-heading",
    duration: 2000,
    easing: "linear"
  }
);

const opImageOne = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      right:"100px"
    },
    initialValues: {
      right:"60px"
  }
  },
  {
    selector: ".op-image1",
    duration: 2000,
    easing: "linear"
  }
);

const opImageTwo = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      top:"150px"
    },
    initialValues: {
      top:"200px"
  }
  },
  {
    selector: ".op-image2",
    duration: 2000,
    easing: "linear"
  }
);


const opImageThree = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      top:"40px"
    },
    initialValues: {
      top:"80px"
  }
  },
  {
    selector: ".op-image3",
    duration: 2000,
    easing: "linear"
  }
);


const opOpacityZero = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:0
    },
    initialValues: {
      opacity:1
    }
  },
  {
    selector: ".op",
    duration: 1,
    easing: "linear"
  }
);

const fdOpacity = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:1
    },
    initialValues: {
      opacity:0.00001,
    }
  },
  {
    selector: ".fd",
    duration: 1,
    easing: "linear"
  }
);


const fdBlur = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      filter:"blur(0px)"
    },
    initialValues: {
      filter:"blur(5px)"
    }
  },
  {
    selector: ".fd",
    duration: 200,
    easing: "linear"
  }
);

const fdLetterSpacing = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      letterSpacing:"3px"
    },
    initialValues: {
      letterSpacing: "1px"
  }
  },
  {
    selector: ".fd-text",
    duration: 1200,
    easing: "linear"
  }
);

const fdImageOne = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      left:"140px"
    },
    initialValues: {
      left:"60px"
  }
  },
  {
    selector: ".fd-image1",
    duration: 1800,
    easing: "linear"
  }
);
const fdImageGrid = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      left:"1080px"
    },
    initialValues: {
      left:"1000px"
  }
  },
  {
    selector: ".fd-images-holder",
    duration: 1800,
    easing: "linear"
  }
);

const fdImageFive = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      left:"386px"
    },
    initialValues: {
      left:"426px"
  }
  },
  {
    selector: ".fd-image5",
    duration: 1500,
    easing: "easeOutQuad"
  }
);

const fdopacityZero = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      opacity:0
    },
    initialValues: {
      opacity:1
  }
  },
  {
    selector: ".fd",
    duration: 400,
    easing: "easeOutQuad"
  }
);


clip.addIncident(rootBlur, 0);
clip.addIncident(subtitleSpacing, 200);
clip.addIncident(titleSpacing,200);
clip.addIncident(fistSlideImageTwo,200);
clip.addIncident(fistSlideImageOne,200);
clip.addIncident(fistSlideOpacity,1400);
clip.addIncident(svgShapeOne,1400);
clip.addIncident(transitionTransform,1400);
clip.addIncident(transitionLetterSpacing,1800);
clip.addIncident(transitionTransformToOne,2200);
clip.addIncident(transitionOpacity,3400);
clip.addIncident(test,3400);
clip.addIncident(bestProductOpacity,3400);
clip.addIncident(bpOneBgSize,3400);
clip.addIncident(bpTwoBgSize,3400);
clip.addIncident(bpThreeBgSize,3400);
clip.addIncident(bestProductsTextSpacing,3400);
clip.addIncident(bestProductOpacityZero,5900);
clip.addIncident(opOpacity,5900);
clip.addIncident(rootOp,5901);
clip.addIncident(opTextSpacing,5901);
clip.addIncident(opImageOne,5901);
clip.addIncident(opImageTwo,5901);
clip.addIncident(opImageThree,5901);
clip.addIncident(opOpacityZero,7901);
clip.addIncident(fdOpacity,7901);
clip.addIncident(fdBlur,7902);
clip.addIncident(fdLetterSpacing,7902);
clip.addIncident(fdImageOne,7902);
clip.addIncident(fdImageGrid,7902);
clip.addIncident(fdImageFive,7902);
clip.addIncident(fdopacityZero,9702);
