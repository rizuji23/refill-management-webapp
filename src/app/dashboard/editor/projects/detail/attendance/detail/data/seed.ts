import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import moment from "moment";
import { labels, statuses } from "../../data/data";
import { AttedanceHistorySchema } from "./schema";

const attedance = () => ({
  id: `ATT-${faker.number.int({ min: 1000, max: 9999 })}`,
  label: faker.helpers.arrayElement(labels).value,
  clock_in: moment(faker.date.anytime()).format("HH:mm:ss"),
  clock_out: moment(faker.date.anytime()).format("HH:mm:ss"),
  status: faker.helpers.arrayElement(statuses).value,
  created_at: moment(faker.date.anytime()).format("DD-MM-YYYY HH:mm:ss"),
});

export const generateFakeAttedanceHistory = (length: number) => {
  const attedances: Array<AttedanceHistorySchema> = [];

  Array.from({ length: length }).forEach(() => {
    attedances.push(attedance());
  });

  return attedances;
};

console.log("✅ Attedance data generated.");
