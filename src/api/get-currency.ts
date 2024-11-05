import axios from "axios";

export async function getCurrency() {
  const res = await axios.get(
    `https://api.exchangerate.host/latest?base=USD&symbols=RUB,UZS`
  );

  return res.data;
}
