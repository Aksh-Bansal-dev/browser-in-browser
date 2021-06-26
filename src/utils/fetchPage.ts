export const fetchPage = async (url: string): Promise<string> => {
  try {
    const res = await fetch(url);
    console.log(res);
    return "https://google.com";
  } catch (err) {
    console.log(err);
    return "";
  }
};
