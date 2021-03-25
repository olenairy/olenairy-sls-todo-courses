import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as AWS from 'aws-sdk'
import { getUserId} from '../utils'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { createLogger } from '../../utils/logger'
import { getUncompleteTodos } from '../../businessLogic/todos'

const myDomain = '*'
const myEmail = process.env.EMAIL


// const jsontext = '{"email":"olena.ch@yahoo.com","name":"John Doe","content":"Hey!"}'

const ses = new AWS.SES()
const logger = createLogger('sendEmail')


export const handler = middy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.info('Processing event: ', event)



  
  const userId = getUserId(event)
  const items = await getUncompleteTodos(userId, undefined, 20);
  
  var resultString  = ''
  //const easyitems:[] = []
    for (let item of items.todoItems) {
      // easyitems['name'] = item['name']  
      // easyitems['dueDate'] = item['dueDate'] 
      resultString = resultString + item['name']  + ' - ' + item['dueDate']  + '\n'
    }
  //const easycontent = easyitems.toString()
  




  // const content =  JSON.stringify({
  //   items: items.todoItems
  // })
  try {
    const emailParams = generateEmailParams(event.body, resultString)
  
    const data = await ses.sendEmail(emailParams).promise()
 
        return generateResponse(200, data)
        
 

  } catch (err) {
      return generateError(500, err)
    
  }

})

handler.use(
  cors({
    credentials: true
  })
)    

function generateEmailParams (body, cont) {





  const { email, name } = JSON.parse(body)
  //const { email, name, content } = JSON.parse(jsontext)
  const content = cont
  console.log(email, name, content)
  if (!(email && name && content)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'content\'.')
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [email] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          // Charset: 'UTF-8',
          Data: `Message sent from ${myEmail} \n ${name} \n\n\ Todays Todos: \n\n ${content}`
        }
      },
      Subject: {
        // Charset: 'UTF-8',
        Data: `Your Todays Todos`
      }
    }
  }
}

function generateError (code, err) {
  console.log(err)
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(err.message)
  }
}

function generateResponse (code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  }
}