import cheerio from "cheerio";
import request from "request-promise";

const getData = async (link: string) => {
  const result = await request.get(link);
  const $ = cheerio.load(result);

  const updatedAt = $(`div > table > thead > tr > th > span`)
    .text()
    .slice(23, 40);

  let data: any = [];

  const howManyCities = $(`div > table > tbody`)[0].children.length;

  let cities: any = [];
  for (let i = 1; i <= howManyCities; i++) {
    const city = $(
      `tr.ui-widget-content:nth-child(${i}) > td:nth-child(1) > span:nth-child(1)`
    ).text();
    const time1 = $(
      `tr.ui-widget-content:nth-child(${i}) > td:nth-child(3)`
    ).text();
    const time2 = $(
      `tr.ui-widget-content:nth-child(${i}) > td:nth-child(4)`
    ).text();
    const time3 = $(
      `tr.ui-widget-content:nth-child(${i}) > td:nth-child(5)`
    ).text();

    cities.push(city);
    const times = { city, updatedAt, newTimes: { time1, time2, time3 } };
    data.push(times);
  }

  return { data, cities };
};

export default getData;
