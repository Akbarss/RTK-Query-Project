import Iconify from "../Icon/Iconify";

const getIcon = (name: string) => <Iconify icon={name} width={30} height={30} />;

const navConfig = [
  {
    title: "Главная",
    path: "/",
    icon: getIcon("carbon:dashboard"),
    keyrouter: "",
  },
  {
    title: "Активность",
    path: "/activity",
    icon: getIcon("mdi:clipboard-text-date-outline"),
    keyrouter: "act",
  },
  {
    title: "Divider",
    path: "null",
  },
  {
    title: "Редактировать",
    path: "/edit",
    icon: getIcon("mdi:account-edit-outline"),
    keyrouter: "edi",
  },
  {
    title: "Статистика",
    path: "/statistics",
    icon: getIcon("carbon:dashboard-reference"),
    keyrouter: "sta",
  },
  {
    title: "Divider",
    path: "null",
  },
  {
    title: "Блог",
    icon: getIcon("mdi:calendar-multiple"),
    path: "/posts",
  },
  {
    title: "Авторы",
    icon: getIcon("mdi:account-edit-outline"),
    path: "/posts/authors",
  },
  {
    title: "Категории",
    icon: getIcon("gridicons:stats-up"),
    path: "/posts/categories",
  },
];

export default navConfig;
