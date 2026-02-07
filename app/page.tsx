import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*");

  return (
    <main style={{ padding: 24 }}>
      <h1>闇クイズ</h1>

      <h2>debug</h2>
      <pre>{JSON.stringify({ error, questions }, null, 2)}</pre>
    </main>
  );
}
