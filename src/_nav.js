export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-bag",
      badge: {
        variant: "info",
        text: "INFO",
      },
    },
    {
      name: "Profile",
      url: "/profile",
      icon: "icon-people",
    },
    {
      name: "Pay Slips",
      url: "/payslips",
      icon: "icon-wallet",
    },
    {
      name: "Feed",
      url: "/feed",
      icon: "icon-feed",
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
