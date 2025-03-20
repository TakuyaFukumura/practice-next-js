export default async function Call() {
  // APIを呼び出し（初回表示に使うイメージ）
  const apiResponse = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store", // キャッシュを無効化して毎回最新データを取得
  });
  const data = await apiResponse.json();

  return (
    <main>
      <h1>APIの呼び出し結果（サーバーコンポーネント）</h1>
      <p>{data.message}</p>
    </main>
  );
}
