import { main_tags } from "@prisma/client";

//gets the subtag id for the user's current path using the router path
export const getMainTagId = (
  mainTags: main_tags[],
  routerPath: string | string[]
) => {
  const id = mainTags.find((m) => routerPath.includes(m.tag_path));
  return id?.id;
};
