// // const dayjs = require('dayjs')
// // const a = require('a')

// // console.log(`Today's date: ${dayjs().format()}`)
// // console.log(`From package a: ${a.getMessage()}`)

// dependencies
import { DaprServer, CommunicationProtocolEnum } from '@dapr/dapr'

// code
const daprHost = '127.0.0.1'
const serverHost = '127.0.0.1'
const serverPort = '6002'
const daprPort = '3600'

start().catch((e) => {
  console.error(e)
  process.exit(1)
})

async function start() {
  console.log('START CALLED')
  const server = new DaprServer(
    serverHost,
    serverPort,
    daprHost,
    daprPort,
    CommunicationProtocolEnum.GRPC
  )
  await server.binding.receive('calc', async (request) =>
    console.log(`Received Message: ${JSON.stringify(request)}`)
    // ...args
  )
  await server.start()
  console.log('AKKKKKKK======================')
  const ZB = require('zeebe-node')
  // const topology = await zbc.topology()
  // console.log('topology: ', JSON.stringify(topology, null, 2))
  setTimeout(async () => {
    try {
      const zbc = new ZB.ZBClient('http://3.6.248.160:26500')
      const bpmn = await zbc.deployProcess('bpmn/sample.bpmn')
      console.log('bpmn deploy: ', bpmn)
      const res = await zbc.createProcessInstance('weather-report', {})
      console.log('Output of Workflow: ', res)
    } catch (err) {
      console.log('err:', err)
    }
  }, 4000)
}

// import { config } from 'dotenv'
// config()
// void (async () => {
//

// })()

// createProcessInstanceWithResult
