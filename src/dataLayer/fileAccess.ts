import * as AWS from 'aws-sdk'
import * as AWSXRay from 'aws-xray-sdk'

export class FileAccess {

    constructor(
        XAWS = AWSXRay.captureAWS(AWS),
        private readonly s3: AWS.S3 = new XAWS.S3({ signatureVersion: 'v4' }),
        private readonly bucketName: string = process.env.ATTACHMENT_S3_BUCKET,
        private readonly thumbBucketName: string = process.env.THUMBNAILS_S3_BUCKET,
        private readonly urlExpiration: number = parseInt(process.env.SIGNED_URL_EXPIRATION)) {
    }

    getDownloadUrl(imageId: string): string {
        return this.s3.getSignedUrl('getObject', {
            Bucket: this.bucketName,
            Key: imageId
        })
    }

    getDownlThumbUrl(imageId: string): string {
        return this.s3.getSignedUrl('getObject', {
            Bucket: this.thumbBucketName,
            Key: imageId
        })
    }

    getUploadUrl(imageId: string): string {
        return this.s3.getSignedUrl('putObject', {
            Bucket: this.bucketName,
            Key: imageId,
            Expires: this.urlExpiration
        })
    }

    async deleteAttachment(todoId: string)  {        
        await this.s3.deleteObject({
            Bucket: this.bucketName,
            Key: todoId
        }).promise()
        await this.s3.deleteObject({
            Bucket: this.thumbBucketName,
            Key: todoId
        }).promise()
    }

    

    
}