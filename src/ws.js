let ws = new WebSocket(process.env.VUE_APP_SOCKET_URL)
ws.onopen = e => {
    console.info('websocket connected')
}
ws.onclose = e => {
    console.info('websocket closed')
}

export default ws;