import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import { labels, statuses } from "./data";
import { AttedanceSchema } from "./schema";
import moment from "moment";

const attedance = () => ({
  id: `ATT-${faker.number.int({ min: 1000, max: 9999 })}`,
  staff_name: faker.person.fullName(),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  created_at: moment(faker.date.anytime()).format("DD-MM-YYYY HH:mm:ss"),
  avatar: faker.image.avatar(),
});

export const generateFakeAttedance = (length: number) => {
  const attedances: Array<AttedanceSchema> = [];

  Array.from({ length: length }).forEach(() => {
    attedances.push(attedance());
  });

  return attedances;
};

console.log("✅ Attedance data generated.");
