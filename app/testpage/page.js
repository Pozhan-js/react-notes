"use client";

import dayjs from "dayjs";

export default function Example() {
  return <div>{dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>;
}
