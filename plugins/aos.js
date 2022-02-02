import AOS from "aos";

export default ({ app }, inject) => {
  app.AOS = new AOS.init({
    offset: 300,
    duration: 1000,
    disable: "phone",
  });
};
