import AWS, { S3 } from "aws-sdk";
import { catcher } from "../middlewares/errorHandler";
const AWSCredentials = require("config").get("AWS");
/**
 * @desc AWS (Amazon Web Services) integration configurations
 * @ref https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-node-examples.html
 */

// Config AWS Enviroment
AWS.config.update({
  accessKeyId: AWSCredentials.key,
  secretAccessKey: AWSCredentials.secret,
  region: AWSCredentials.region,
});

const s3 = new S3();

export const upload = async (
  buff: Buffer,
  key: string,
  contentType: string
) => {
  const params: any = {
    ACL: "public-read",
    Bucket: AWSCredentials.bucket.name,
    Body: buff,
    Key: key,
    ContentType: contentType,
  };

  try {
    const response = await s3.upload(params).promise();
    // Meta data about the uploaded object
    return response;
  } catch (error) {
    catcher(error);
  }
};

export const getObject = async (key: string) => {
  try {
    const response = await s3
      .getObject({
        Bucket: AWSCredentials.bucket.name,
        Key: key,
      })
      .promise();

    return response;
  } catch (error) {
    catcher(error);
  }
};

export const updateObject = async (
  buff: Buffer,
  key: string,
  contentType: string
) => {
  const params: any = {
    ACL: "public-read",
    Bucket: AWSCredentials.bucket.name,
    Body: buff,
    Key: key,
    ContentType: contentType,
  };

  try {
    const response = await s3.putObject(params).promise();
    return response;
  } catch (error) {
    catcher(error);
  }
};
