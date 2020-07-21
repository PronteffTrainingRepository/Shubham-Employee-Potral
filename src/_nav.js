export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW",
      },
    },
    {
      name: "Profile",
      url: "/profile",
      icon: "icon-people",
    },
    {
      name: "PaySlips",
      url: "/payslips",
      icon: "Pay Slips",
    },
    {
      title: true,
      name: "Extras",
    },
    {
      name: "Pages",
      url: "/pages",
      icon: "icon-star",
      children: [
        {
          name: "Login",
          url: "/login",
          icon: "icon-star",
        },
        {
          name: "Register",
          url: "/register",
          icon: "icon-star",
        },
        {
          name: "Error 404",
          url: "/404",
          icon: "icon-star",
        },
      ],
    },
  ],
};
