const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmg08o4/",
            name: "ssmg08o4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmg08o4/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "德云社票务系统"
        } 
    }
}
export default base
