/**
 * 参数配置
 * Created by zhangyong on 14-2-7.
 */
module.exports = {
    port: 3000,
    context: '/adp_proportion',
    pc_adp: ["60124", "60011", "60010", "60009", "60008", "60007", "60003", "50001", "60284", "60240", "60239", "60205", "60006", "50008", "50004"],
    mobile_adp: ["50009", "50010", "60296", "60329", "60328", "60294"],
    db_info: {
        host: '192.168.16.241',
        user: 'root',
        password: 'microlens',
        database: 'microlens_master',
        debug: false
    },
    logger: {
        "appenders": [
            {
                "type": "console"
            },
            {
                "type": "file",
                "filename": "./log/runtime.log",
                "maxLogSize": 2048,
                "category": "default"
            }
        ],
        "replaceConsole": true
    }
};