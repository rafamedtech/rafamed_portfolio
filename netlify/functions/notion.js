const { Client } = require("@notionhq/client");

exports.handler = async () => {
  const notion = await new Client({
    auth: "secret_6rqUOc8FfWuL2dt3mmiVzwNuXQlfm4WeNPLle5ro03H",
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
