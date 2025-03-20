"use client";

import { useEffect, useState } from "react";

export default function Call() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hello"); // APIエンドポイント
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
        setMessage("エラーが発生しました");
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>APIの呼び出し結果</h1>
      <p>{message}</p>
    </main>
  );
}
