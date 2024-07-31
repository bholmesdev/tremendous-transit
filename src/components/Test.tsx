import { actions } from "astro:actions";
import { createResource, Show } from "solid-js";

export default function Test() {
  const [result] = createResource(() => actions.getUser.orThrow({ id: "ben" }));
  return <Show when={result()}>{(user) => <p>Hello {user().name}</p>}</Show>;
}
