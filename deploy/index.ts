import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const endpoint = new awsx.apigateway.API("pulumiapi", {
    routes: [
        {
            path: "/",
            method: "GET",
            eventHandler: (req, res, cb) => {
                cb(undefined, {
                    statusCode: 200,
                    body: Buffer.from("hello, world", "utf-8").toString("base64"),
                    isBase64Encoded: true
                })
            }
        }
    ]
})

exports.url = endpoint.url;