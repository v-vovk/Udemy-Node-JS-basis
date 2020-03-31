const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('<h1>hello from node.js</h1>')
  res.write('<h2>hello from node.js</h2>')
  res.write('<h3>hello from node.js</h3>')
  res.end(`
    <div style="background: red; width: 200px; height: 200px">
      <h2>Test</h2>
    </div>
  `)
})

server.listen(3000, () => {
  console.log('server is runnig...')
})
