let ws = new WebSocket('ws://123.207.136.134:9010/ajaxchattest')
ws.onopen = e => {
    console.info('websocket connected')
}