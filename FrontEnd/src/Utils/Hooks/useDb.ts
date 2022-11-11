import { useState } from "react";

export default function useTranslate() {

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<any>({});

  const dBComm = (dbName: string, collName: string, query: object, uri: string) => {
    var Params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dbName: dbName,
        collName: collName,
        query: query,
      })
    };
    console.log(Params)
    setLoading(true);
    console.log(Params.body);
    fetch(uri, Params)
      .then((res) => res.json())
      .then((res: object) => setData(res))
      .catch((error) => { console.error(error); setError(error) })
      .finally(() => { setLoading(false) })
  }

  return { data, loading, error, dBComm }
}