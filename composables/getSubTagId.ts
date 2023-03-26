import { sub_tags } from "@prisma/client";

//gets the subtag id for the user's current subpath using the router path
export const getSubTagId = (
  subTags: sub_tags[],
  routerPath: string | string[]
) => {
  const id = subTags.find((s) => routerPath.includes(s.tag_path));
  return id?.id;
};
