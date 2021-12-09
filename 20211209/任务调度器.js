/*
1.筛选出任务队列，包括freq和cd:
tasks = {
    taskName1: {
        freq: 1,
        cd: 0
    },
    taskName2: {
        freq: 1,
        cd: 0
    },
}
*/
function getTaskObj (tasks) {
    const obj = {}
    tasks.forEach(task => {
        if(obj[task]) {
            obj[task].freq++
        } else {
            obj[task] = {freq: 1, cd: 0}
        }
    });
    return obj;
}

// 定义方法，查询obj中freq最高的第一个的key,并减少cd
var getMax = function(obj) {// 正在cd的任务，cd过1
    let res 
    for(let i in obj) {
        if(obj[i].cd>0) {
            obj[i].cd--;
            if(res===undefined) res = 0;
            continue;
        }
        if(!res || (obj[i].cd===0 && obj[i].freq>obj[res].freq)) {
            res = i;
        }  
    }
    return res
}

var leastInterval = function (tasks, n) {
    if(n===0) return tasks.length;
    let obj = getTaskObj(tasks)
    let during = 0;
    while(obj!=={}) {
        // 获取当前最适合执行的任务
        const currentKey = getMax(obj);
        if(currentKey === 0) {
            during++;
            continue;
        } else if (currentKey === undefined) {
            return during;
        }
        if(obj[currentKey].freq>1) {
            obj[currentKey].freq--;
            obj[currentKey].cd = n;
        } else {
            delete obj[currentKey];
        }    
        during++;
    }
    return during;
}