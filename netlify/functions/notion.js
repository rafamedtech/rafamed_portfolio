const { Client } = require("@notionhq/client");

exports.handler = async () => {
  const notion = await new Client({
    auth: process.env.NOTION_API_TOKEN,
  });

  const databaseId = "646a703196184d2abbabc1ef0d26c499";

  const myPage = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(myPage),
  };
};
