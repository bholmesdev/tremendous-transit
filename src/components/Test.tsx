import { actions } from "astro:actions";
import { createResource } from "solid-js";

export default function Test() {
  const [result] = createResource(() => actions.test({ key: "42" }));
  return <p>{result()?.key ?? "Loading"}</p>;
}
