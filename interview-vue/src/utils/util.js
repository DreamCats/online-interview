export function randomString(){
    var expect=3;//期望的字符串长度
    var str=Math.random().toString(36).substring(2);
    while(str.length<expect){
        str=Math.random().toString(36).substring(2)
    }
    return str.substring(0,expect);
}


export function Timestamp2Date(timestamp) {
    let t = parseInt(timestamp) * 1000
    let d = new Date(t)
    return (d.getFullYear()) + "-" +
        (d.getMonth() + 1) + "-" +
        (d.getDate()) + " " +
        (d.getHours()) + ":" +
        (d.getMinutes()) + ":" +
        (d.getSeconds())
}

export function NowDate() {
    return new Date()
}

export function MaxDate() {
    let d = new Date()
    d.setFullYear(d.getFullYear()+20)
    return d
}

export function MinDate() {
    let d = new Date()
    d.setFullYear(d.getFullYear() - 20)
    return d
}

export function Date2Time(time) {
    // let d = new Date()
    return (time.getFullYear()) + "-" +
        (time.getMonth() > 10 ? time.getMonth() : "0" + time.getMonth()) + "-" +
        (time.getDate() > 10 ? time.getDate() : "0" + time.getDate()) + " " +
        (time.getHours() > 10 ? time.getHours() : "0" + time.getHours()) + ":" +
        (time.getMinutes() > 10 ? time.getMinutes() : "0" + time.getMinutes()) + ":" +
        (time.getSeconds() > 10 ? time.getSeconds() : "0" + time.getSeconds())
}
