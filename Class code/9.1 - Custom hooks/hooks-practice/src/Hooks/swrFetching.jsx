import useSWR from "swr";

const fetcher = async function (url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

function Profile() {
  const { data, error, isLoading } = useSWR(""); //Todo server is not working
}
