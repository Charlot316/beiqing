import { result } from "lodash-es";
import { getMenu } from "../services/login";

export const MANAGE_MENUS = [
  {
    name: "系统管理",
    path: "/app/admin/system",
    icon: "setting",
    childMenu: [
      {
        name: "教师管理",
        path: "/app/admin/system/teachers",
      },
      {
        name: "班级管理",
        path: "/app/admin/system/classes",
      },
      {
        name: "学生管理",
        path: "/app/admin/system/students",
      },
      {
        name: "教室管理",
        path: "/app/admin/system/classrooms",
      },
    ],
  },
  {
    name: "资源管理",
    path: "/app/admin/resource",
    icon: "resource",
    childMenu: [
      {
        name: "上传管理",
        path: "/app/admin/resource/upload",
      },
      {
        name: "场景管理",
        path: "/app/admin/resource/scene",
      },
      {
        name: "角色管理",
        path: "/app/admin/resource/character",
      },
    ],
  },
  {
    name: "课程管理",
    path: "/app/admin/course",
    icon: "course",
    childMenu: [
      {
        name: "课程定制",
        path: "/app/admin/course/setting",
      },
    ],
  },
];

export const STUDENT_MENUS = [
  {
    name: "学生管理",
    path: "/app",
    icon: "setting",
    childMenu: [
      {
        name: "成绩管理",
        path: "/app/student/list",
        component: "views/Score",
      },
    ],
  },
];

export var TEACHER_MENUS = [];

export async function setMenuValue() {
  await getMenu().then((result) => {
    TEACHER_MENUS = result.data;
  });
  TEACHER_MENUS.map((item) => {
    item.icon = "setting";
    item.value = item.id;
    item.label = item.name;
    item.childMenu = item.subMenu;
    item.children = item.subMenu;
    item.children.map((childItem) => {
      childItem.value = childItem.topicId;
      childItem.label = childItem.name;
    });
    delete item.subMenu;
  });
}
export default { MANAGE_MENUS, STUDENT_MENUS, TEACHER_MENUS, setMenuValue };
