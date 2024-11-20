"use client";

import useSWR from "swr";

const djangoApiEndpoint = 'http://localhost:8000/';
const usersEndpoint = `${djangoApiEndpoint}users/`;

export default function Home() {
  const { data } = useSWR<{ id: number, username: string, email: string }[]>(
    usersEndpoint, 
    (url: string) => fetch(url).then((res) => res.json())
  );
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Users</h1>
        <ul className="flex flex-col gap-4">
          {data?.map((user) => (
            <li key={user.id}>
              <p className="text-lg font-bold">{user.username}</p>
              <p className="text-sm">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
