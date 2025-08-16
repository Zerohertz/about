export const generateSectionId = (title: string): string => {
  return title.replace(" & ", "-").replace(" ", "-").toLowerCase();
};
